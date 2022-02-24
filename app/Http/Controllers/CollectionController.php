<?php

namespace App\Http\Controllers;

use App\Models\DebitCollection;
use App\Models\Site;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CollectionController extends Controller
{
    public function index($sites_id)
    {
        $collections = Site::find($sites_id)->collections();
        return response()->json(['data' => $collections]);
    }

    public function store($sites_id, Request $req)
    {
        $collection_data = $req->all();
        $collection_data['date'] = (isset($collection_data['date'])) ? date('Y-m-d', strtotime($collection_data['date'])) : null;
        $collection_data['transaction_type'] = 'collection';
        $collection_data['sites_id'] = $sites_id;
        unset($collection_data['debits_id']);

        $collection = Transaction::create($collection_data);
        if($req->debits_id) {
            $debitCollection = DebitCollection::create([
                'debits_id' => $req->debits_id,
                'collections_id' => $collection['id'],
                'amount' => $collection['amount']
        ]);
        Transaction::updateDebitStatus($req->debits_id);
        } else if($req->occupants_id){
            $debits = Transaction::where('occupants_id', $req->occupants_id)
                ->where('status','<>','paid')
                ->where('transaction_type','debit')
                ->withSum('debitCollections','amount')
                ->orderBy('date','asc')
                ->get();

            $collection_remaining_amount = $collection['amount'];
            foreach($debits as $debit) {
                $debit_remaining_amount = $debit['amount'] - $debit['debit_collections_sum_amount'];
                if($collection_remaining_amount >= $debit_remaining_amount) {
                    DebitCollection::create([
                        'debits_id' => $debit['id'],
                        'collections_id' => $collection['id'],
                        'amount' => $debit_remaining_amount
                ]);
                Transaction::updateDebitStatus($debit['id']);
                $collection_remaining_amount -= $debit['amount'];
                } else if($collection_remaining_amount < $debit_remaining_amount && $collection_remaining_amount>0 ) {
                    DebitCollection::create([
                        'debits_id' => $debit['id'],
                        'collections_id' => $collection['id'],
                        'amount' => $collection_remaining_amount
                ]);
                Transaction::updateDebitStatus($debit['id']);
                $collection_remaining_amount = 0;
                } else {
                    break;
                }
            }
        }
        if($collection) {
            return response()->json(['message' => 'Tahsilat başarıyla kaydedildi.']);
        } else {
            return response()->json(['message' => 'Kayıt sırasında hata oluştu.'],500);
        }
    }

    public function show($sites_id, $id)
    {
        $collection  = Transaction::where('id',$id)->with('occupant','vault')->first();
        return response()->json(['data' => $collection]);
    }

    public function update(Request $req, $id)
    {
        //
    }

    public function destroy($sites_id ,$id)
    {
        $collection = DB::transaction(function() use ($id) {
            Transaction::find($id)->delete();
            $related_debits = DebitCollection::where('collections_id', $id)->get();
            DebitCollection::where('collections_id', $id)->delete();
            foreach($related_debits as $debit) {
                Transaction::updateDebitStatus($debit['debits_id']);
            }
            return true;
        });

        if($collection) {
            return response()->json(['message' => 'Tahsilat başarıyla silindi.']);
        } else {
            return response()->json(['message' => 'İşlem sırasında hata oluştu.'],500);
        }
    }
}
