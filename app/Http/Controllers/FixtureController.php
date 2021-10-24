<?php

namespace App\Http\Controllers;

use App\Models\Fixture;
use App\Models\Site;
use Illuminate\Http\Request;

class FixtureController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($sites_id)
    {
        $fixtures = Site::find($sites_id)->fixtures;
        return response()->json(['data' => $fixtures]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store($sites_id, Request $req)
    {
        $req['bought_date'] = date('Y-m-d', strtotime($req['bought_date']));
        $req['sites_id'] = $sites_id;
        $fixture = Fixture::create($req->all());

        if($fixture) {
            return response()->json(['message' => 'Demirbaş başarıyla kaydedildi.']);
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
        $fixture  = Fixture::find($id);
        return response()->json(['data' => $fixture]);
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
    public function update(Request $req,  $sites_id, $id)
    {
        $req['bought_date'] = (!empty($req['bought_date'])) ? date('Y-m-d', strtotime($req['bought_date'])) : null;
        $updateFixture = Fixture::findorFail($id)->update($req->all());

        if($updateFixture) {
            return response()->json(['message' => 'Demirbaş başarıyla güncellendi.']);
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
        $deleteFixture = Fixture::find($id)->delete();
        if($deleteFixture) {
            return response()->json(['message' => 'Demirbaş başarıyla silindi.']);
        } else {
            return response()->json(['message' => 'İşlem sırasında hata oluştu.'],500);
        }
    }
}
