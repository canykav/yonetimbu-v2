<?php

namespace App\Http\Controllers;

use App\Models\Account;
use App\Models\Site;
use Illuminate\Http\Request;

class PersonController extends Controller
{

    public function index($sites_id)
    {
        $persons = Site::find($sites_id)->getPersons();
        return response()->json(['data' => $persons]);
    }

    public function store($sites_id, Request $req)
    {
        $acc = Account::create([
            'type' => 'person',
            'name' => $req->name,
            'email' => $req->email,
            'password' => rand(1000,10000),
            'phone1' => $req->phone1,
            'phone2' => $req->phone2,
            'citizenship_no' => $req->citizenship_no,
            'sites_id' => $req->sites_id
        ]);
        if($acc) {
            return response()->json(['message' => 'Kişi başarıyla kaydedildi.']);
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
