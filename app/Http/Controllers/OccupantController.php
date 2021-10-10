<?php

namespace App\Http\Controllers;

use App\Models\Account;
use App\Models\Occupant;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OccupantController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(request $req)
    {
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $req, $sites_id)
    {
        if($req->name) {
            DB::beginTransaction();

            $acc = Account::create([
                'name' => $req->name,
                'sites_id' => $sites_id,
            ]);
            $occ = Occupant::create([
                'sites_id' => $sites_id,
                'accounts_id' => $acc->id,
                'properties_id' => $req->properties_id,
                'type' => $req->type,
                'entry_date' => (!empty($req['entry_date'])) ? date('Y-m-d', strtotime($req['entry_date'])) : null
            ]);

            DB::commit();

            if($occ) {
                return response()->json(['message' => 'Oturan başarıyla kaydedildi.']);
            } else {
                return response()->json(['message' => 'Kayıt sırasında hata oluştu.'],500);
            }
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
    public function update(Request $req, $sites_id, $occupants_id)
    {
        $req['abandonment_date'] = (!empty($req['abandonment_date'])) ? date('Y-m-d', strtotime($req['abandonment_date'])) : null;
        $occ = Occupant::find($occupants_id)->update($req->all());

        if($occ) {
            return response()->json(['message' => 'Oturan başarıyla güncellendi.']);
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
    public function destroy($id)
    {
        //
    }
}
