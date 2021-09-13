<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Property extends Model
{
    use HasFactory;

    protected $table = "properties";

    protected $guarded = [];

    public function type() {
        return $this->hasOne(Type::class, 'id', 'types_id');
    }

    public function block() {
        return $this->belongsTo(Block::class,  'blocks_id', 'id');
    }

    public function getBlockName() {
        return $this->hasOne(Block::class, 'id', 'blocks_id')->name;
    }
}
