<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

//Storage::disk('local')->put('banks.json', $banks); # dosya kaydetme kodu

class JsonController extends Controller
{
    public function getDebitTypes() {
        $debitTypes =  Storage::disk('local')->get('DebitTypes.json');
        return response()->json(['data' => $debitTypes]);
    }

    public function getBanks() {
        $banks = json_decode(Storage::disk('local')->get('Banks.json'));
        return response()->json(['data' => $banks]);
    }

    public function getExpenseTypes() {
        $expenseTypes = Storage::disk('local')->get('ExpenseTypes.json');
        return response()->json(['data' => $expenseTypes]);
    }
}
