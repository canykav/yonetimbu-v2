<?php

namespace App\Http\Controllers;

use App\Models\Account;
use App\Models\Property;
use App\Models\Site;
use Illuminate\Http\Request;

class PropertyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($sites_id, request $req)
    {
        if($req->has('accounts_id')) {
            $properties = Account::find($req->accounts_id)->getPersonProperties();
        } else {
            $properties = Site::find($sites_id)->getProperties();
        }
        return response()->json(['data' => $properties]);
    }

    public function store(Request $request)
    {
        $property = Property::create($request->all());
        if($property) {
            return response()->json(['message' => 'Bölüm başarıyla kaydedildi.']);
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
