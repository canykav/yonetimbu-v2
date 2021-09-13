<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Types extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('types', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->unsignedBigInteger('sites_id')->nullable();
            $table->foreign('sites_id')->references('id')->on('sites')->onDelete('cascade');
            $table->string('land_share')->nullable();
            $table->string('gross')->nullable();
            $table->string('net')->nullable();
            $table->decimal('fee_amount',19,2)->nullable();
            $table->timestamps();
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
