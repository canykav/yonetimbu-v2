<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Occupants extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('occupants', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('sites_id')->nullable();
            $table->unsignedBigInteger('accounts_id')->nullable();
            $table->unsignedBigInteger('properties_id')->nullable();
            $table->enum('type', ['householder','tenant']);
            $table->date('entry_date');
            $table->date('abandonment_date')->nullable();
            $table->timestamps();
            $table->foreign('sites_id')->references('id')->on('sites')->onDelete('cascade');
            $table->foreign('accounts_id')->references('id')->on('accounts')->onDelete('cascade');
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
