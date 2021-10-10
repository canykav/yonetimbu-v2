<?php

namespace App\Http\Controllers;

use App\Models\Account;
use App\Models\Site;
use App\Models\Transaction;
use Illuminate\Http\Request;
use App\Models\Debit;
use App\Models\Occupant;
use App\Models\Payment;
use Illuminate\Support\Facades\DB;

class DebitController extends Controller
{
    public function index(request $req, $sites_id)
    {
        if(!$req->except && !$req->persons_id) {
            $debits = Site::find($sites_id)->debits();
        } else if ($req->except=='paid' && $req->persons_id) {
                $debits = Account::find($req->persons_id)->getUnpaidDebits();
        } else if ($req->except=='paid' && $req->occupants_id) {
            $debits = Occupant::find($req->occupants_id)->getUnpaidDebits();
    }
        return response()->json(['data' => $debits]);
    }


    public function store($sites_id, Request $req)
    {
        if($req->persons) {
            return $this->storeMultipleDebit($sites_id, $req);
        } else {
            $debit_data = $req->all();

            $debit_data['date'] = ($debit_data['date']) ? date('Y-m-d', strtotime($debit_data['date'])) : null;
            $debit_data['due_date'] = ($debit_data['due_date']) ? date('Y-m-d', strtotime($debit_data['due_date'])) : null;
            $debit_data['transaction_type'] = 'debit';
            $debit_data['sites_id'] = $sites_id;
            $debit_data['status'] = 'pending';

            $debit = Transaction::create($debit_data);

            if($debit) {
                return response()->json(['message' => 'Borçlandırma başarıyla kaydedildi.']);
            } else {
                return response()->json(['message' => 'Kayıt sırasında hata oluştu.'],500);
            }
        }

    }

    public function storeMultipleDebit($sites_id, $req) {
        $properties = Site::find($sites_id)->getProperties();

        if($req->persons=="tenants") {
            DB::beginTransaction();
            foreach($properties as $property) {
                if(empty($property['householder']) && empty($property['tenant'])) {
                    return response()->json(['message' => 'Kat Maliki ve kiracısı bulunmayan bölümler olduğundan borçlandırma tamamlanamadı.'],500);
                }
            }
            foreach($properties as $property) {
                Transaction::create([
                    'occupants_id' => ($property['tenant']) ? $property['tenant']['id'] : $property['householder']['id'] ,
                    'description' => $req->description,
                    'transaction_type' => 'debit',
                    'date' => ($req->date) ? date('Y-m-d', strtotime($req->date)) : null,
                    'due_date' => ($req->due_date) ? date('Y-m-d', strtotime($req->due_date)) : null,
                    'amount' => $req->amount,
                    'status' => 'pending',
                    'sites_id' => $sites_id,
                ]);
            }
            DB::commit();
        } else if($req->persons=="householders") {
            foreach($properties as $property) {
                if(empty($property['householder'])) {
                    return response()->json(['message' => 'Kat Maliki bulunmayan bölümler olduğundan borçlandırma tamamlanamadı.'],500);
                }
            }
            DB::beginTransaction();
            foreach($properties as $property) {
                Transaction::create([
                    'occupants_id' => $property['householder']['id'],
                    'description' => $req->description,
                    'transaction_type' => 'debit',
                    'date' => ($req->date) ? date('Y-m-d', strtotime($req->date)) : null,
                    'due_date' => ($req->due_date) ? date('Y-m-d', strtotime($req->due_date)) : null,
                    'amount' => $req->amount,
                    'status' => 'pending',
                    'sites_id' => $sites_id,
                ]);
            }
            DB::commit();
        }
        return response()->json(['message' => 'Borçlandırmalar başarıyla kaydedildi.']);
    }

    public function show($sites_id, $debits_id)
    {
        $debit = Transaction::where('id', $debits_id)->withSum('debitCollections','amount')->first();
        $debit['occupant'] = $debit->occupant;
        $debit['occupant']['account'] = Account::find($debit['occupant']['accounts_id']);
        $debit['status'] = Transaction::translateStatusToTurkish($debit['status']);
        $debit->debitCollections;
        return response()->json(['data' => $debit]);
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
