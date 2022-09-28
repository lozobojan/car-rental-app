<?php

namespace Database\Seeders;

use App\Models\Country;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CountriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $countries = [
            [ "name" => "Montenegro" ],
            [ "name" => "Serbia" ],
            [ "name" => "Bosnia and Herzegovina" ],
            [ "name" => "Croatia" ],
            [ "name" => "Macedonia" ],
            [ "name" => "Slovenia" ],
            [ "name" => "France" ],
            [ "name" => "USA" ],
        ];

        Country::query()->insert($countries);
    }
}
