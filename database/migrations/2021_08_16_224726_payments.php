<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Payments extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payments', function (Blueprint $table) {
            $table->id();
            $table->string('description');
            $table->enum('type', ['expense_payment','employee_advance'])->nullable();
            $table->dateTime('date')->nullable();
            $table->unsignedBigInteger('transactions_id')->nullable();;
            $table->unsignedBigInteger('accounts_id')->nullable();;
            $table->decimal('amount',19,2);
            $table->unsignedBigInteger('vaults_id');
            $table->foreign('transactions_id')->references('id')->on('transactions')->onDelete('cascade');
            $table->foreign('accounts_id')->references('id')->on('accounts')->onDelete('cascade');
            $table->foreign('vaults_id')->references('id')->on('vaults')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
