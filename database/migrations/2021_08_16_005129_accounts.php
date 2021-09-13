<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Accounts extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('accounts', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password')->nullable();
            $table->string('phone1')->nullable();
            $table->string('phone2')->nullable();
            $table->string('address')->nullable();
            $table->rememberToken();
            $table->unsignedBigInteger('sites_id')->nullable();
            $table->bigInteger('citizenship_no')->nullable();
            $table->string('tax_administration')->nullable();
            $table->string('iban')->nullable();
            $table->enum('type', ['person','company','employee']);
            $table->enum('employee_type', ['normal','retired']);
            $table->decimal('employee_salary',19,2)->nullable();
            $table->string('social_sec_no')->nullable();
            $table->string('employee_job')->nullable();
            $table->date('employee_start_date')->nullable();
            $table->date('employee_leave_date')->nullable();
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
