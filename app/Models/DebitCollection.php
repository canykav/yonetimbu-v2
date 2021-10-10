<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DebitCollection extends Model
{
    use HasFactory;

    protected $table = "debits_collections";

    protected $guarded = [];

    public $timestamps = false;

    public function collection() {
        return $this->belongsTo(Transaction::class, 'collections_id', 'id')->with('vault');
    }
}
