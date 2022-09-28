<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReservationsTable extends Migration
{
    public function up()
    {
        Schema::create('reservations', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->date('date_from');
            $table->date('date_to');
            $table->float('total_price', 15, 2)->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }
}
