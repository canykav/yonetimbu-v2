<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Vaults extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vaults', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->date('opening_date')->nullable();
            $table->set('type', ['bank','vault']);
            $table->string('bank')->nullable();
            $table->string('branch')->nullable();
            $table->string('iban')->nullable();
            $table->unsignedBigInteger('sites_id');
            $table->timestamps();
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
