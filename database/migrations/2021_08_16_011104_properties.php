<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Properties extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('properties', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->unsignedBigInteger('blocks_id')->nullable();
            $table->string('door_no');
            $table->unsignedBigInteger('types_id')->nullable();
            $table->timestamps();
            $table->foreign('blocks_id')->references('id')->on('blocks')->onDelete('cascade');
            $table->foreign('types_id')->references('id')->on('types')->onDelete('set null');
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
