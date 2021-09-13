<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ManagerSite extends Model
{
    use HasFactory;

    protected $table = "managers_sites";

    protected $guarded = [];

    public $timestamps = false;
}
