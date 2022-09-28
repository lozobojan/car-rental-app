<?php

namespace Database\Seeders;

use App\Models\Location;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LocationsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $locations = [
            ['name' => 'Podgorica', "is_pickup" => "1", "is_dropoff" => "1",],
            ['name' => 'Podgorica Airport', "is_pickup" => "1", "is_dropoff" => "1",],
            ['name' => 'Tivat', "is_pickup" => "1", "is_dropoff" => "1",],
            ['name' => 'Tivat Airport', "is_pickup" => "1", "is_dropoff" => "1",],
            ['name' => 'Budva', "is_pickup" => "1", "is_dropoff" => "1",],
            ['name' => 'Kolašin', "is_pickup" => "1", "is_dropoff" => "1",],
            ['name' => 'Žabljak', "is_pickup" => "1", "is_dropoff" => "1",],
        ];

        Location::query()->insert($locations);
    }
}
