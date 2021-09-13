<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    use HasFactory;

    protected $table = "accounts";

    protected $guarded = [];

    //protected $hidden = array('password');

    public function getPersonProperties(){
        return Property::where('occupants.accounts_id', $this->id)
        ->leftjoin('occupants','properties.id','=','occupants.properties_id')
        ->select('occupants.*','properties.*','occupants.id as occupants_id')
        ->with('block')
        ->get();
    }

    public function hidePassword() {
        unset($this->password);
        return $this;
    }
}
