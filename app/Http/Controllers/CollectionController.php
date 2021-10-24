<?php

namespace App\Http\Controllers;

use App\Models\DebitCollection;
use App\Models\Site;
use App\Models\Transaction;
use Illuminate\Http\Request;

class CollectionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($sites_id)
    {
        $collections = Site::find($sites_id)->collections();
        return response()->json(['data' => $collections]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store($sites_id, Request $req)
    {
        $collection_data = $req->all();
        $collection_data['date'] = date('Y-m-d', strtotime($collection_data['date']));
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
        }
        if($collection) {
            return response()->json(['message' => 'Tahsilat başarıyla kaydedildi.']);
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
        $collection  = Transaction::where('id',$id)->with('occupant','vault')->first();
        return response()->json(['data' => $collection]);
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
