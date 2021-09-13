<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Manager;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    /*public function __construct()
    {
        $this->middleware('auth');
    }*/

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $manager = Auth::user();
        $sites = Manager::getSites($manager->id);
        unset($manager->password);
        return view('admin/homepage', ['manager' => json_encode($manager), 'sites' => json_encode($sites)] );
    }
    public function register()
    {
        return view('auth/register');
    }
    public function login()
    {
        return view('auth/login');
    }
}
