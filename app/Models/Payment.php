<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;

    protected $table = "payments";

    protected $guarded = [];

    public $timestamps = false;

    public function vault() {
        return $this->hasOne(Vault::class,  'id', 'vaults_id');
    }
}
