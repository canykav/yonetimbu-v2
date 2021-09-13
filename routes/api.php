<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('sites', App\Http\Controllers\SiteController::class);

Route::prefix('sites/{sites_id}/')->middleware('auth:web')->group(function () { // api routes must have api middleware but my application use this routes on just web pages.
    Route::resource('persons', App\Http\Controllers\PersonController::class);
    Route::resource('properties', App\Http\Controllers\PropertyController::class);
    Route::resource('vaults', App\Http\Controllers\VaultController::class);
    Route::resource('types', App\Http\Controllers\TypeController::class);
    Route::resource('blocks', App\Http\Controllers\BlockController::class);
    Route::resource('companies', App\Http\Controllers\CompanyController::class);
    Route::resource('employees', App\Http\Controllers\EmployeeController::class);
    Route::resource('debits', App\Http\Controllers\DebitController::class);
    Route::resource('collections', App\Http\Controllers\CollectionController::class);
    Route::resource('expenses', App\Http\Controllers\ExpenseController::class);
    Route::resource('occupants', App\Http\Controllers\OccupantController::class);

});


