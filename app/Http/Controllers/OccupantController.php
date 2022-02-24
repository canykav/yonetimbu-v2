<?php

namespace App\Http\Controllers;

use App\Models\Account;
use App\Models\Occupant;
use App\Models\Site;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OccupantController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($sites_id, request $req)
    {
        if($req->accounts_id && $req->properties_id) {
            $occupants = Occupant::where('accounts_id', $req->accounts_id)->where('properties_id', $req->properties_id)
                ->with('property','account')
                ->orderBy('entry_date','desc')
                ->get();
        } else if($req->accounts_id) {
            $occupants = Occupant::where('accounts_id', $req->accounts_id)
                ->with('property','account')
                ->orderBy('entry_date','desc')
                ->get();
        } else if($req->properties_id) {
            $occupants = Occupant::where('properties_id', $req->properties_id)
                ->with('property','account')
                ->orderBy('entry_date','desc')
                ->get();
        } else {
            $occupants = Site::find($sites_id)->occupants;
        }
        foreach($occupants as $occupant) {
            $occupant['balance'] = Occupant::find($occupant['id'])->getBalance();
        }
        Occupant::translateTypesToTurkish($occupants);

        return response()->json(['data' => $occupants]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $req, $sites_id)
    {
        if(empty($req->name)) {
            return response()->json(['message' => 'Kişi adı boş bırakılamaz.'],500);
        }
        if(empty($req->entry_date)) {
            return response()->json(['message' => 'Giriş tarihi boş bırakılamaz.'],500);
        }

        if($req->accounts_id) {
            $occ = $this->createOccupant($sites_id, $req);
        } else if($req->name) {
            DB::beginTransaction();

            $acc = Account::create([
                'name' => $req->name,
                'sites_id' => $sites_id,
            ]);

            $req['accounts_id'] = $acc->id;

            $occ = $this->createOccupant($sites_id, $req);

            DB::commit();
        }

        if($occ) {
            return response()->json(['message' => 'Oturan başarıyla kaydedildi.']);
        } else {
            return response()->json(['message' => 'Kayıt sırasında hata oluştu.'],500);
        }
    }

    private function createOccupant($sites_id, $req) {
        return Occupant::create([
            'sites_id' => $sites_id,
            'accounts_id' => $req->accounts_id,
            'properties_id' => $req->properties_id,
            'type' => $req->type,
            'entry_date' => (!empty($req['entry_date'])) ? date('Y-m-d', strtotime($req['entry_date'])) : null
        ]);
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
