<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;

    protected $table = "transactions";

    protected $guarded = [];

    const PENDING = 'pending';
    const PARTIAL = 'partial';
    const PAID = 'paid';

    const PENDING_TR = 'Ödenmedi';
    const PARTIAL_TR = 'Kısmi Ödeme';
    const PAID_TR = 'Ödendi';

    public function occupant() {
        return $this->belongsTo(Occupant::class,'occupants_id', 'id');
    }
}
