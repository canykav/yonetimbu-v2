<?php

namespace App\Http\Controllers;

use App\Models\Account;
use App\Models\Site;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    public function index($sites_id)
    {
        $employees = Site::find($sites_id)->getEmployees();
        return response()->json(['data' => $employees]);
    }

    public function store($sites_id, Request $req)
    {
        $employee_data = $req->all();

        $employee_data['employee_start_date'] = date('Y-m-d', strtotime($employee_data['employee_start_date']));
        $employee_data['employee_leave_date'] = date('Y-m-d', strtotime($employee_data['employee_leave_date']));
        $employee_data['type'] = 'employee';
        $employee_data['sites_id'] = $sites_id;

        $employee = Account::create($employee_data);

        if($employee) {
            return response()->json(['message' => 'Personel başarıyla kaydedildi.']);
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
