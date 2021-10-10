<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    use HasFactory;

    protected $table = "accounts";

    protected $guarded = [];

    //protected $hidden = array('password');

    public function getPersonProperties(){
        return Property::where('occupants.accounts_id', $this->id)
        ->leftjoin('occupants','properties.id','=','occupants.properties_id')
        ->select('occupants.*','properties.*','occupants.id as occupants_id')
        ->with('block')
        ->get();
    }

    public function getPersonBalance(){
        $totalCollection = Transaction::where('transaction_type','collection')->where('accounts_id', $this->id)->sum('amount');
        $totalDebit = Transaction::where('transaction_type','debit')->where('accounts_id', $this->id)->sum('amount');
        return $totalCollection - $totalDebit;
    }

    public function hidePassword() {
        if(!empty($this->password)) {
            unset($this->password);
        }
            return $this;
    }
    public function getUnpaidDebits() {
        $debits = Transaction::where('transaction_type','debit')->where('status','<>','paid')
        ->leftjoin('occupants','transactions.occupants_id','occupants.id')
        ->where('occupants.accounts_id', $this->id)
        ->with('occupant')
        ->withSum('payments','amount')
        ->orderBy('date','desc')
        ->get();

        Transaction::translateStatusToTurkish($debits);
        return $debits;
    }

    public function getCompanyReceivables() {
        $transactions = Transaction::where('transaction_type', 'expense')
            ->where('accounts_id', $this->id)
            ->where('status', '<>', 'paid')
            ->withSum('payments','amount')
            ->get();
        return $transactions;
    }

    public function getEmployeeReceivables() {
        $transactions = Transaction::where('transaction_type', 'expense')
            ->where('accounts_id', $this->id)
            ->where('status', '<>', 'paid')
            ->withSum('payments','amount')
            ->get();
        return $transactions;
    }
}
