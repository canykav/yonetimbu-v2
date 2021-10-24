<?php

namespace App\Http\Controllers;

use App\Models\Account;
use App\Models\Payment;
use App\Models\Site;
use App\Models\Transaction;
use Illuminate\Http\Request;

class ExpenseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(request $req, $sites_id)
    {
        if($req->companies_id && $req->transaction_type == 'expense') {
            $expenses = Account::find($req->companies_id)->getCompanyReceivables();
            Transaction::translateStatusToTurkish($expenses);
        } elseif($req->employees_id && $req->transaction_type == 'expense') {
            $expenses = Account::find($req->employees_id)->getEmployeeReceivables();
            Transaction::translateStatusToTurkish($expenses);
        } else {
            $expenses = Site::find($sites_id)->expenses($req);
        }
        return response()->json(['data' => $expenses]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store($sites_id, Request $req)
    {
        $expense_data = $req->all();

        $expense_data['date'] = ($expense_data['date']) ? date('Y-m-d', strtotime($expense_data['date'])) : null;
        $expense_data['due_date'] = ($expense_data['due_date']) ? date('Y-m-d', strtotime($expense_data['due_date'])) : null;
        $expense_data['transaction_type'] = 'expense';
        $expense_data['sites_id'] = $sites_id;

        $expense = Transaction::create($expense_data);

        if($expense['status'] == 'paid') {
            Payment::create([
                'description' => $expense['description'],
                'type' => 'expense_payment',
                'date' =>  $expense['date'],
                'transactions_id' => $expense['id'],
                'amount' => $expense['amount'],
                'vaults_id' => $expense['vaults_id']
            ]);
        }

        if($expense) {
            return response()->json(['message' => 'Gider başarıyla kaydedildi.']);
        } else {
            return response()->json(['message' => 'Kayıt sırasında hata oluştu.'],500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($sites_id, $id)
    {
        $expense = Transaction::where('id', $id)
            ->withSum('payments','amount')
            ->with('account')
            ->with('payments')
            ->first();
        $expense['status'] = Transaction::translateStatusToTurkish($expense['status']);
        return response()->json(['data' => $expense]);
      }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $req, $sites_id, $id)
    {
        $req['date'] = (!empty($req['date'])) ? date('Y-m-d', strtotime($req['date'])) : null;
        $expense = Transaction::find($id)->update($req->all());
        if($expense) {
            return response()->json(['message' => 'Gider başarıyla güncellendi.']);
        } else {
            return response()->json(['message' => 'Kayıt sırasında hata oluştu.'],500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $transaction = Transaction::find($id)->delete();

        if($transaction) {
            return response()->json(['message' => 'Gider başarıyla silindi.']);
        } else {
            return response()->json(['message' => 'İşlem sırasında hata oluştu.'],500);
        }
    }
}
