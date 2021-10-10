<?php

namespace App\Http\Controllers;

use App\Models\Payment;
use App\Models\Transaction;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $req)
    { // TODO: handle spaghetti codes, so many repeating code lines
        if($req->persons_id){
            $transactions = Transaction::leftjoin('occupants','transactions.occupants_id','occupants.id')
            ->where('occupants.accounts_id', $req->persons_id)
            ->with('occupant')
            ->orderBy('date')
            ->get();

            $balance = 0;
            foreach($transactions as $transaction) {
                if($transaction['transaction_type'] == 'debit') {
                    $balance-=$transaction['amount'];
                } elseif($transaction['transaction_type'] == 'collection') {
                    $balance+=$transaction['amount'];
                }
                $transaction['balance'] = $balance;
            }

            Transaction::translateTypesToTurkish($transactions);

            $transactions = array_reverse($transactions->toArray());
        } elseif($req->vaults_id) {
            $transactions = Transaction::where('transaction_type','collection')
                ->where('vaults_id', $req->vaults_id)
                ->orderBy('date')
                ->get();

            foreach($transactions as $transaction) {
                $transaction['extract_type'] = 'collection';
            }
            $payments = Payment::leftjoin('transactions','payments.transactions_id','transactions.id')
                ->where('payments.vaults_id', $req->vaults_id)
                ->orderBy('payments.date')
                ->select('transactions.*','payments.*')
                ->get();

            foreach($payments as $payment) {
                $payment['extract_type'] = 'payment';
            }

            $transactions = array_merge($transactions->toArray(), $payments->toArray());

            usort($transactions, function($a, $b) {
                return ($a['date'] < $b['date']) ? -1 : 1;
            });

            $balance = 0;
            for($i=0;$i<count($transactions);$i++) {
                if($transactions[$i]['extract_type'] == 'payment') {
                    $balance-=$transactions[$i]['amount'];
                    $transactions[$i]['extract_type'] = 'Ödeme';
                } elseif($transactions[$i]['extract_type'] == 'collection') {
                    $balance+=$transactions[$i]['amount'];
                    $transactions[$i]['extract_type'] = 'Tahsilat';
                }
                $transactions[$i]['balance'] = $balance;
            };

            $transactions = array_reverse($transactions);
        } elseif ($req->companies_id) {
            $transactions = Transaction::where('accounts_id', $req->companies_id)
            ->orderBy('transactions.date')
            ->get();

            foreach($transactions as $transaction) {
                $transaction['extract_type'] = 'transaction';
            }

            $payments = Payment::leftjoin('transactions','payments.transactions_id','transactions.id')
            ->where('transactions.accounts_id', $req->companies_id)
            ->orderBy('payments.date')
            ->select('transactions.*','payments.*')
            ->get();

            foreach($payments as $payment) {
                $payment['extract_type'] = 'payment';
            }

            $transactions = array_merge($transactions->toArray(), $payments->toArray());

            usort($transactions, function($a, $b) {
                return ($a['date'] < $b['date']) ? -1 : 1;
            });

            $balance = 0;
            for($i=0;$i<count($transactions);$i++) {
                if($transactions[$i]['extract_type'] == 'payment') {
                    $balance-=$transactions[$i]['amount'];
                    $transactions[$i]['extract_type'] = 'Ödeme';
                } elseif($transactions[$i]['extract_type'] == 'transaction') {
                    $balance+=$transactions[$i]['amount'];
                    $transactions[$i]['extract_type'] = 'Gider';
                }
                $transactions[$i]['balance'] = $balance;
            };
            $transactions = array_reverse($transactions);

        } elseif ($req->employees_id) {
            $transactions = Transaction::where('accounts_id', $req->employees_id)
            ->where('transaction_type','expense')
            ->orderBy('transactions.date')
            ->get();

            foreach($transactions as $transaction) {
                $transaction['extract_type'] = 'transaction';
            }

            $payments = Payment::leftjoin('transactions','payments.transactions_id','transactions.id')
            ->where('transactions.accounts_id', $req->employees_id)
            ->orderBy('payments.date')
            ->select('transactions.*','payments.*')
            ->get();

            $transactions = array_merge($transactions->toArray(), $payments->toArray());

            usort($transactions, function($a, $b) {
                return ($a['date'] < $b['date']) ? -1 : 1;
            });

            $balance = 0;
            for($i=0;$i<count($transactions);$i++) {
                if(!empty($transactions[$i]['type']) && $transactions[$i]['type'] == 'expense_payment') {
                    $balance-=$transactions[$i]['amount'];
                    $transactions[$i]['extract_type'] = 'Ödeme';
                } elseif(!empty($transactions[$i]['type']) && $transactions[$i]['type'] == 'employee_advance') {
                    $balance+=$transactions[$i]['amount'];
                    $transactions[$i]['extract_type'] = 'Avans';
                } elseif($transactions[$i]['transaction_type'] == 'expense') {
                    $balance+=$transactions[$i]['amount'];
                    $transactions[$i]['extract_type'] = 'Gider';
                }
                $transactions[$i]['balance'] = $balance;
            };
            $transactions = array_reverse($transactions);
        }
        return response()->json(['data' => $transactions]);

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
    public function store(Request $request)
    {
        //
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
