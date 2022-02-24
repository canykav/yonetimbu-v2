<?php

namespace App\Http\Controllers;

use App\Models\Account;
use App\Models\Property;
use App\Models\Site;
use App\Models\Occupant;
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
    public function show($sites_id, $id)
    {
        $property  = Property::where('id',$id)->with('block','type')->first();
        return response()->json(['data' => $property]);
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
        $updateProperty = Property::findorFail($id)->update($req->all());

        if($updateProperty) {
            return response()->json(['message' => 'Bölüm başarıyla güncellendi.']);
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
    public function destroy(Request $req, $sites_id, $id)
    {
        if(Occupant::where('properties_id', $id)->exists()) {
            return response()->json(['message' => 'Bu bölüme bağlanmış hesap(lar) vardır. Bölüm silinemedi.'],500);
        } else {
            $deleteProperty = Property::find($id)->delete();
            if($deleteProperty) {
                return response()->json(['message' => 'Bölüm başarıyla silindi.']);
            } else {
                return response()->json(['message' => 'İşlem sırasında hata oluştu.']);
            }
        }
    }
}
