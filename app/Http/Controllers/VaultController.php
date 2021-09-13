<?php

namespace App\Http\Controllers;

use App\Models\Site;
use App\Models\Vault;
use Illuminate\Http\Request;

class VaultController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($sites_id)
    {
        $vaults = Site::find($sites_id)->vaults();
        return response()->json(['data' => $vaults]);
    }

    public function store($sites_id, Request $req)
    {
        $req['opening_date'] = date('Y-m-d', strtotime($req['opening_date']));
        $req['sites_id'] = $sites_id;
        $vault = Vault::create($req->all());

        if($vault) {
            return response()->json(['message' => 'Kasa/banka başarıyla kaydedildi.']);
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