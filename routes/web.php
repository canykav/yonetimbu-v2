<?php

use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/register', [App\Http\Controllers\HomeController::class, 'register'])
                ->middleware('guest')
                ->name('register');

Route::get('/login', [App\Http\Controllers\HomeController::class, 'login'])
                ->middleware('guest')
                ->name('login');


/*
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
*/
//Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('index');
Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('index');

Route::any('/{all}', function () {
    return view('admin.site.index');
})->where(['all' => '.*']);
