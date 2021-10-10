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
        }  else {
            $expenses = Site::find($sites_id)->expenses();
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
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
