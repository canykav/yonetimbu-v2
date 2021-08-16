<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ManagersSubscriptions extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('managers_subscriptions', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('managers_id');
            $table->string('description');
            $table->enum('role', ['manager','company'])->nullable();
            $table->date('start_date');
            $table->date('expiry_date');
            $table->integer('total_property');
            $table->foreign('managers_id')->references('id')->on('managers')->onDelete('cascade');
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
