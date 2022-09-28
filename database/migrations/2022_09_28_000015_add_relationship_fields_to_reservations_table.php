<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddRelationshipFieldsToReservationsTable extends Migration
{
    public function up()
    {
        Schema::table('reservations', function (Blueprint $table) {
            $table->unsignedBigInteger('client_id')->nullable();
            $table->foreign('client_id', 'client_fk_7394424')->references('id')->on('clients');
            $table->unsignedBigInteger('vehicle_id')->nullable();
            $table->foreign('vehicle_id', 'vehicle_fk_7394425')->references('id')->on('vehicles');
            $table->unsignedBigInteger('pickup_location_id')->nullable();
            $table->foreign('pickup_location_id', 'pickup_location_fk_7394448')->references('id')->on('locations');
            $table->unsignedBigInteger('dropoff_location_id')->nullable();
            $table->foreign('dropoff_location_id', 'dropoff_location_fk_7394449')->references('id')->on('locations');
        });
    }
}
