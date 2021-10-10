<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vault extends Model
{
    use HasFactory;

    const BANK = 'bank';
    const VAULT = 'vault';

    const BANK_TR = 'Banka Hesabı';
    const VAULT_TR = 'Kasa';

    protected $table = "vaults";

    protected $guarded = [];

    public function collections() {
        return $this->hasMany(Transaction::class, 'vaults_id', 'id')
                    ->where('transaction_type','collection');
    }
    public function payments() {
        return $this->hasMany(Payment::class, 'vaults_id', 'id');
    }

    public static function translateTypesToTurkish($vaults) {
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
}
