<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('sites', App\Http\Controllers\SiteController::class);

Route::get('sites/{sites_id}/dashboard',  [App\Http\Controllers\DashboardController::class, 'index']);

// api routes must have api middleware but my application use this routes on just web pages.
Route::prefix('sites/{sites_id}/')->middleware('auth:web')->group(function () {
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
    Route::resource('accounts', App\Http\Controllers\AccountController::class);
    Route::resource('transactions', App\Http\Controllers\TransactionController::class);
    Route::resource('inventory', App\Http\Controllers\InventoryController::class);
    Route::resource('fixtures', App\Http\Controllers\FixtureController::class);
    Route::resource('types', App\Http\Controllers\TypeController::class);
    Route::resource('payments', App\Http\Controllers\PaymentController::class);
});


