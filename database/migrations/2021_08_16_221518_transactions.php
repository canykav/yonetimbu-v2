<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Transactions extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('occupants_id')->nullable();
            $table->unsignedBigInteger('accounts_id')->nullable();
            $table->string('description');
            $table->enum('transaction_type', ['debit','expense','collection']);
            $table->date('date')->nullable();
            $table->date('due_date')->nullable();
            $table->decimal('amount',19,2)->nullable();
            $table->enum('status', ['pending','partial','paid'])->nullable();
            $table->unsignedBigInteger('vaults_id')->nullable();
            $table->string('debit_type')->nullable();
            $table->string('expense_type')->nullable();
            $table->string('bill_no')->nullable();
            $table->unsignedBigInteger('sites_id');
            $table->timestamps();
            $table->foreign('accounts_id')->references('id')->on('accounts')->onDelete('cascade');
            $table->foreign('occupants_id')->references('id')->on('occupants')->onDelete('cascade');
            $table->foreign('vaults_id')->references('id')->on('vaults')->onDelete('cascade');
            $table->foreign('sites_id')->references('id')->on('sites')->onDelete('cascade');
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
