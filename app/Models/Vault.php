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
}
