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
        Vault::translateTypesToTurkish($vaults);
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
    public function show($sites_id, $vault)
    {
        $vault = Vault::find($vault);
        switch ($vault['type']) {
            case Vault::BANK:
            $vault['type'] = Vault::BANK_TR;
            break;

            case Vault::VAULT:
            $vault['type'] = Vault::VAULT_TR;
            break;

            default:
            $vault['type'];
        }
        return response()->json(['data' => $vault]);
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
    public function update(Request $req, $sites_id, $id)
    {
        $req['opening_date'] = (!empty($req['opening_date'])) ? date('Y-m-d', strtotime($req['opening_date'])) : null;
        $vault = Vault::find($id)->update($req->all());
        if($vault) {
            return response()->json(['message' => 'Kasa/banka başarıyla güncellendi.']);
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
    public function destroy($sites_id, $id)
    {
        $vault = Vault::find($id);
        $transactions = $vault->collections;
        $payments = $vault->payments;
        if(count($transactions) > 0 || count($payments) > 0)  {
            return response()->json(['message' => 'Kasayla ilişkili işlem(ler) bulunmaktadır. Kasa silinemedi.'],500);
        }
        $deleteVault = Vault::find($id)->delete();

        if($deleteVault) {
            return response()->json(['message' => 'Kasa başarıyla silindi.']);
        } else {
            return response()->json(['message' => 'İşlem sırasında hata oluştu.']);
        }

    }
}
