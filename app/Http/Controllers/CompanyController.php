<?php

namespace App\Http\Controllers;

use App\Models\Company;
use App\Models\Site;
use Illuminate\Http\Request;

class CompanyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($sites_id)
    {
        $companies = Site::find($sites_id)->getCompanies();
        return response()->json(['data' => $companies]);
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
        $data = $req->all();
        $data['sites_id'] = $sites_id;
        $data['type'] = 'company';
        $company = Company::create($data);
        if($company) {
            return response()->json(['message' => 'Firma başarıyla kaydedildi.']);
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
    public function show($sites_id, $companies_id)
    {
        $company = Company::find($companies_id);
        return response()->json(['data' => $company]);
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
    public function update(Request $req, $sites_id, $companies_id)
    {
        $company = Company::find($companies_id)->update($req->all());
        if($company) {
            return response()->json(['message' => 'Firma başarıyla güncellendi.']);
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
