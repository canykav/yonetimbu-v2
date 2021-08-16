<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Notes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('notes', function (Blueprint $table) {
            $table->id();
            $table->string('description');
            $table->unsignedBigInteger('managers_id')->nullable();
            $table->unsignedBigInteger('transactions_id')->nullable();
            $table->unsignedBigInteger('vaults_id')->nullable();
            $table->unsignedBigInteger('accounts_id')->nullable();
            $table->unsignedBigInteger('properties_id')->nullable();
            $table->foreign('managers_id')->references('id')->on('managers')->onDelete('cascade');
            $table->foreign('transactions_id')->references('id')->on('transactions')->onDelete('cascade');
            $table->foreign('vaults_id')->references('id')->on('vaults')->onDelete('cascade');
            $table->foreign('properties_id')->references('id')->on('properties')->onDelete('cascade');
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
