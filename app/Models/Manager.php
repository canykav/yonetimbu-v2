<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use App\Http\Site;

class Manager extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $table = "managers";

       /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    static function getSites($managers_id)
    {
        return ManagerSite::where('managers_id', $managers_id)
            ->leftJoin('sites','managers_sites.sites_id', '=', 'sites.id')
            ->whereNull('sites.deleted_at')
            ->select('sites.*','managers_sites.managers_id')
            ->get();
    }

}
