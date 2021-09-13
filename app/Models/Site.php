<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Occupant;
use App\Models\Block;

class Site extends Model
{
    use HasFactory;

    protected $table = "sites";

    protected $guarded = [];

    public $timestamps = false;

    public function accounts()
    {
        return $this->hasMany(Account::class, 'sites_id', 'id');
    }

    public function getPersons()
    {
        return $this->accounts()->where('type','person')->get();
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
        $vaults =  $this->hasMany(Vault::class, 'sites_id', 'id')->get();

        foreach($vaults as $vault) {
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

    public function debits()
    {
        $debits = $this->hasMany(Transaction::class, 'sites_id', 'id')
            ->where('transaction_type', 'debit')
            ->with('occupant')
            ->get();
        foreach($debits as $debit)  {
            $debit['account'] = Account::find($debit['occupant']['accounts_id'])->hidePassword();
            $debit['property'] =  Property::find($debit['occupant']['properties_id']);
            $debit['property']->block;
        }
        return $debits;
    }

    public function collections()
    {
        $collections = $this->hasMany(Transaction::class, 'sites_id', 'id')
            ->where('transaction_type', 'collection')
            ->with('occupant')
            ->get();
        foreach($collections as $collection)  {
            $collection['account'] = Account::find($collection['occupant']['accounts_id'])->hidePassword();
            $collection['property'] =  Property::find($collection['occupant']['properties_id']);
            $collection['property']->block;
        }
        return $collections;
    }
    public function expenses()
    {
        $expenses = $this->hasMany(Transaction::class, 'sites_id', 'id')
            ->where('transaction_type', 'expense')
            ->get();
        foreach($expenses as $expense) {
            $expense['account'] = Account::find($expense['accounts_id'])->hidePassword();
            $expense['remaining_amount'] = $expense['amount'] - Payment::where('transactions_id', $expense['id'])->sum('amount');
            switch ($expense['status']) {
                case Transaction::PENDING:
                $expense['status'] = Transaction::PENDING_TR;
                break;

                case Transaction::PARTIAL:
                $expense['status'] = Transaction::PARTIAL_TR;
                break;

                case Transaction::PAID:
                $expense['status'] = Transaction::PAID_TR;
                break;
                default:
                $expense['status'];
            }
        }
        return $expenses;
    }
}
