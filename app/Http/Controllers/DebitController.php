<?php

namespace App\Http\Controllers;

use App\Models\Site;
use App\Models\Transaction;
use Illuminate\Http\Request;
use App\Models\Debit;

class DebitController extends Controller
{
    public function index($sites_id)
    {
        $debits = Site::find($sites_id)->debits();
        return response()->json(['data' => $debits]);
    }


    public function store($sites_id, Request $req)
    {
        $debit_data = $req->all();

        $debit_data['date'] = date('Y-m-d', strtotime($debit_data['date']));
        $debit_data['due_date'] = date('Y-m-d', strtotime($debit_data['due_date']));
        $debit_data['transaction_type'] = 'debit';
        $debit_data['sites_id'] = $sites_id;

        $debit = Transaction::create($debit_data);

        if($debit) {
            return response()->json(['message' => 'Borçlandırma başarıyla kaydedildi.']);
        } else {
            return response()->json(['message' => 'Kayıt sırasında hata oluştu.'],500);
        }
    }

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
    public function update(Request $req, $id)
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
