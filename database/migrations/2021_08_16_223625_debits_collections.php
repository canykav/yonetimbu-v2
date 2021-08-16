<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class DebitsCollections extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('debits_collections', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('debits_id');
            $table->unsignedBigInteger('collections_id');
            $table->decimal('amount',19,2);
            $table->foreign('debits_id')->references('id')->on('debits')->onDelete('cascade');
            $table->foreign('collections_id')->references('id')->on('collections')->onDelete('cascade');
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
