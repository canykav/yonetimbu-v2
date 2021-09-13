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

require __DIR__.'/auth.php';

Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->middleware('auth')->name('index');

Route::get('/sites/new', [App\Http\Controllers\SiteController::class, 'create'])->middleware('auth');

Route::any('/{all}', function () {
    return view('admin.site.index', ['manager' => Auth::user()]);
})->middleware('auth')->where(['all' => '.*']);
