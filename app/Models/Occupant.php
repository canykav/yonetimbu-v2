<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Occupant extends Model
{
    use HasFactory;

    protected $table = "occupants";

    protected $guarded = [];

    const HOUSEHOLDER = 'householder';
    const TENANT =  'tenant';
    const HOUSEHOLDER_TR = 'Kat Maliki';
    const TENANT_TR =  'Kiracı';

    public function property() {
        return $this->hasOne(Property::class, 'id', 'properties_id')->with('block');
    }

    public function account() {
        return $this->hasMany(Account::class, 'id', 'accounts_id');
    }

    public function getUnpaidDebits() {
        $debits = Transaction::where('transaction_type','debit')->where('status','<>','paid')
        ->leftjoin('occupants','transactions.occupants_id','occupants.id')
        ->where('occupants.id', $this->id)
        ->with('occupant')
        ->withSum('debitCollections','amount')
        ->orderBy('date','desc')
        ->get();

        Transaction::translateStatusToTurkish($debits);
        return $debits;
    }

    static function payDebitWithBalance($occupants_id, $debits_id) {

    }

    public static function translateTypesToTurkish($properties) {
        foreach($properties as $property) {
            switch ($property['type']) {
                case Occupant::HOUSEHOLDER:
                $property['type'] = Occupant::HOUSEHOLDER_TR;
                break;

                case Occupant::TENANT:
                $property['type'] = Occupant::TENANT_TR;
                break;
                default:
                $property['type'];
            }
        }
        return $properties;
    }
}
