<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Occupant;
use App\Models\Block;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\DB;

class Site extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = "sites";

    protected $guarded = [];

    public function stats() {
        $totalDebitedMonthly =  Transaction::where('sites_id',$this->id)
            ->where('transaction_type','debit')
            ->whereBetween('date', [date("Y-m-1"), date("Y-m-t")])
            ->sum('amount');

        $totalCollectedMonthly = Transaction::where('sites_id',$this->id)
            ->where('transaction_type','collection')
            ->whereBetween('date', [date("Y-m-1"), date("Y-m-t")])
            ->sum('amount');

        $totalExpenseAmount = Transaction::where('sites_id',$this->id)
            ->where('transaction_type','expense')
            ->sum('amount');

        $totalExpensePayment = Payment::leftJoin('transactions','payments.transactions_id','=','transactions.id')
            ->where('transactions.id',$this->id)
            ->where('payments.type','expense_payment')
            ->sum('payments.amount');

        $totalCost = $totalExpenseAmount - $totalExpensePayment;

        $totalDebited = Transaction::where('sites_id',$this->id)
        ->where('transaction_type','debit')
        ->sum('amount');

        $totalCollected = Transaction::where('sites_id',$this->id)
        ->where('transaction_type','collection')
        ->sum('amount');

        $totalReceivables = $totalDebited - $totalCollected;

        $stats = array(
            'total_debited_monthly' => $totalDebitedMonthly,
            'total_collected_monthly' => $totalCollectedMonthly,
            'total_cost' => $totalCost,
            'total_receivables' => $totalReceivables
        );

        return $stats;
    }

    public function accounts()
    {
        return $this->hasMany(Account::class, 'sites_id', 'id');
    }

    public function getPersons()
    {
        $persons = $this->accounts()->where('type','person')->get();
        foreach ($persons as $person) {
            $person['balance'] = Account::find($person['id'])->getPersonBalance();
        }
        return $persons;
    }

    public function getCompanies()
    {
        return $this->accounts()->where('type','company')->get();
    }

    public function getEmployees()
    {
        return $this->accounts()->where('type','employee')->get();
    }

    public function blocks()
    {
        return $this->hasMany(Block::class, 'sites_id', 'id');
    }

    public function properties()
    {
        return $this->hasManyThrough(
            Property::class,
            Block::class,
            'sites_id',
            'blocks_id',
            'id',
            'id'
        )->with('block');
    }

    public function getProperties() {
        $properties = $this->properties;
        foreach($properties as $property) {
            $property['householder'] = Occupant::where('properties_id', $property->id)
            ->where('sites_id', $this->id)
            ->where('type','householder')
            ->whereNull('abandonment_date')
            ->first();

            if($property['householder']) {
                $property['householder']['name'] = Account::find($property['householder']['accounts_id'])->name;
            }

            $property['tenant'] = Occupant::where('properties_id', $property->id)
            ->where('sites_id', $this->id)
            ->where('type','tenant')
            ->whereNull('abandonment_date')
            ->first();

            if($property['tenant']) {
                $property['tenant']['name'] = Account::find($property['tenant']['accounts_id'])->name;
            }
            if($property['types_id']) {
                $property['type'] = Property::find($property->id)->type;
            }
        }
        return $properties;
    }

    public function vaults()
    {
        $vaults = $this->hasMany(Vault::class, 'sites_id', 'id')
        ->withSum('collections','amount')
        ->withSum('payments','amount')
        ->get();

        foreach($vaults as $vault) {
            $vault['balance'] = $vault['collections_sum_amount'] - $vault['payments_sum_amount'];

            switch ($vault['type']) {
                case Vault::BANK:
                $vault['type'] = Vault::BANK_TR;
                break;

                case Vault::VAULT:
                $vault['type'] = Vault::VAULT_TR;
                break;

                default:
                $vault['type'];
            }
        }
        return $vaults;

    }

    public function types()
    {
        return $this->hasMany(Type::class, 'sites_id', 'id');
    }

    public function fixtures()
    {
        return $this->hasMany(Fixture::class, 'sites_id', 'id');
    }

    public function debits()
    {
        $debits = $this->hasMany(Transaction::class, 'sites_id', 'id')
            ->where('transaction_type', 'debit')
            ->with('occupant')
            ->orderBy('date','desc')
            ->get();
        foreach($debits as $debit)  { // TODO: fix n+1
            $debit['account'] = ($debit['occupant']['accounts_id']) ? Account::find($debit['occupant']['accounts_id'])->hidePassword() : null;
            $debit['property'] = Property::find($debit['occupant']['properties_id']);
            $debit['property']->block;

        }
        return $debits;
    }

    public function collections()
    {
        $collections = $this->hasMany(Transaction::class, 'sites_id', 'id')
            ->where('transaction_type', 'collection')
            ->with('occupant')
            ->orderBy('date','desc')
            ->get();
        foreach($collections as $collection)  {
            $collection['account'] = ($collection['accounts_id']) ? Account::find($collection['accounts_id'])->hidePassword() : Account::find($collection['occupant']['accounts_id']);
            $collection['property'] = ($collection['occupants_id']) ? Property::find($collection['occupant']['properties_id']) : null;
            ($collection['property']) ? $collection['property']->block : null;
        }
        return $collections;
    }
    public function expenses()
    {
        $expenses = $this->hasMany(Transaction::class, 'sites_id', 'id')
            ->where('transaction_type', 'expense')
            ->orderBy('date','desc')
            ->with('account')
            ->withSum('debitCollections','amount')
            ->get();

        Transaction::translateStatusToTurkish($expenses);
        return $expenses;
    }
}
