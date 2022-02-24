<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Occupant;
use App\Models\Block;
use Illuminate\Database\Eloquent\SoftDeletes;

class Site extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = "sites";

    protected $guarded = [];

    public function getStats() {
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
        $companies = $this->accounts()->where('type','company')->withSum('payments','amount')->withSum('getCompanyExpenses','amount')->get();

        foreach($companies as $company) {
            $company['balance'] = $company['get_company_expenses_sum_amount'] - $company['payments_sum_amount'];
        }
        return $companies;
    }

    public function getEmployees()
    {
        return $this->accounts()->where('type','employee')->get();
    }

    public function blocks()
    {
        return $this->hasMany(Block::class, 'sites_id', 'id');
    }

    public function occupants() {
        return $this->hasMany(Occupant::class, 'sites_id', 'id')->with('property','account');
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

    public function debits($status=null)
    {
        $where = array(['transaction_type' , 'debit']);
        if ($status!=null) {
            array_push($where, ['status' , $status]);
        }

        $debits = $this->hasMany(Transaction::class, 'sites_id', 'id')
            ->where($where)
            ->with('occupant')
            ->orderBy('date','desc')
            ->paginate(20);

        foreach($debits as $debit)  { // TODO: fix n+1
            $debit['account'] = (isset($debit['occupant'])) ? Account::find($debit['occupant']['accounts_id'])->hidePassword() : null;
            $debit['property'] = (isset($debit['occupant'])) ? Property::find($debit['occupant']['properties_id']) : null ;
            $debit['property']->block;
        }
        return $debits;
    }

    public function getCountOfDebits() {
        return $this->hasMany(Transaction::class, 'sites_id', 'id')
            ->where('transaction_type', 'debit')
            ->count();
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
    public function expenses($req)
    {
        $where = array(['transaction_type' , 'expense']);

        if($req->except == 'paid') {
            array_push($where, ['status' , '<>', 'paid']);
        }

        $expenses = $this->hasMany(Transaction::class, 'sites_id', 'id')
            ->where($where)
            ->orderBy('date','desc')
            ->with('account')
            ->withSum('payments','amount')
            ->get();

        Transaction::translateStatusToTurkish($expenses);
        return $expenses;
    }

    public function getUnpaidExpenses() {
        $expenses = $this->hasMany(Transaction::class, 'sites_id', 'id')
            ->where('transaction_type', 'expense')
            ->where('status','<>','paid')
            ->orderBy('date','asc')
            ->with('account')
            ->withSum('payments','amount')
            ->get();

        Transaction::translateStatusToTurkish($expenses);
        return $expenses;
    }
}
