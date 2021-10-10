<?php

namespace App\Http\Controllers;

use App\Models\Account;
use App\Models\Occupant;
use App\Models\Site;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PersonController extends Controller
{

    public function index($sites_id)
    {
        $persons = Site::find($sites_id)->getPersons();
        return response()->json(['data' => $persons]);
    }

    public function store($sites_id, Request $req)
    {

        DB::beginTransaction();

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

        if($req->properties) {
            foreach($req->properties as $property) {
                $propertyControl = Occupant::where('properties_id',$property['property']['id'])->where('type', $property['type'])->whereNull('abandonment_date')->exists();
                if($propertyControl) {
                    return response()->json(['message' => $property['property']['doorWithBlock'].' bölümü müsait değil.'],500);
                }
                Occupant::create([
                    'sites_id' => $sites_id,
                    'accounts_id' => $acc->id,
                    'properties_id' => $property['property']['id'],
                    'type' => $property['type'],
                    'entry_date' =>  date('Y-m-d', strtotime($property['entry_date'])),
                    'abandonment_date' => (!empty($property['abandonment_date'])) ? date('Y-m-d', strtotime($property['abandonment_date'])) : null
                ]);
            }
        }

        if($acc) {
            DB::commit();
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
    public function show($sites_id, $id)
    {
        $acc = Account::find($id);
        $acc['properties'] = $acc->getPersonProperties();
        Occupant::translateTypesToTurkish($acc['properties']);
        return response()->json(['data' => $acc]);
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
    public function update(Request $req, $sites_id, $person)
    {
        $acc = Account::find($person)->update($req->all());
        if($acc) {
            return response()->json(['message' => 'Kişi başarıyla güncellendi.']);
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
