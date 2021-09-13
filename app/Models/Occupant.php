<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Occupant extends Model
{
    use HasFactory;

    protected $table = "occupants";

    protected $guarded = [];

    public function property() {
        return $this->hasMany(Property::class, 'id', 'properties_id')->with('block');
    }

    public function account() {
        return $this->hasMany(Account::class, 'id', 'accounts_id');
    }
}
