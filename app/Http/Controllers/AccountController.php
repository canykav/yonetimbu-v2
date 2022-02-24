<?php

namespace App\Http\Controllers;

use App\Models\Account;
use Illuminate\Http\Request;

class AccountController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($sites_id, request $req)
    {
        $accounts = Account::where('sites_id', $sites_id);

        if($req->except) {
            switch ($req->except) {
                case "person":
                    $accounts = $accounts->where('type','<>','person')->get();
                break;
                case "employee":
                    $accounts = $accounts->where('type','<>','employee')->get();
                break;
                case "company":
                    $accounts = $accounts->where('type','<>','account')->get();
                break;
            }
        } else {
            $accounts = $accounts->get();
        }

        return response()->json(['data' => $accounts]);
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
    public function store(Request $request)
    {
        //
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
    public function destroy(Request $request, $sites_id, $id)
    {

        $account = Account::find($id);

        if($account['type'] == 'person') {
            $accountProperties = $account->getPersonProperties();
            if(count($accountProperties)>0) {
                return response()->json(['message' => 'Hesapla ilişkili bölüm(ler) bulunmaktadır. Hesap silinemedi.'],500);
            }
        }

        if($account['type'] == 'employee' || $account['type'] == 'company') {
            $accountTransactions = $account->getTransactions();

            if(count($accountTransactions)>0) {
                return response()->json(['message' => 'Hesapla ilişkili işlem(ler) bulunmaktadır. Hesap silinemedi.'],500);
            }

            $accountPayments = $account->payments;

            if(count($accountPayments)>0) {
                return response()->json(['message' => 'Hesapla ilişkili işlem(ler) bulunmaktadır. Hesap silinemedi.'],500);
            }
        }

        $deleteAccount = Account::find($id)->delete();

        if($deleteAccount) {
            return response()->json(['message' => 'Hesap başarıyla silindi.']);
        } else {
            return response()->json(['message' => 'İşlem sırasında hata oluştu.']);
        }
    }
}
