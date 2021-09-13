<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ManagersSites extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('managers_sites', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('managers_id');
            $table->unsignedBigInteger('sites_id');
            $table->foreign('managers_id')->references('id')->on('managers')->onDelete('cascade');
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
