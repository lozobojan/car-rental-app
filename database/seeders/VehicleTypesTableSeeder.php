<?php

namespace Database\Seeders;

use App\Models\VehicleType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class VehicleTypesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $types = [
            ['name' => "City car"],
            ['name' => "Sedan"],
            ['name' => "Estate"],
            ['name' => "Van"],
            ['name' => "SUV"],
        ];

        VehicleType::query()->insert($types);
    }
}
