<?php

namespace Database\Seeders;

use App\Models\Permission;
use Illuminate\Database\Seeder;

class PermissionsTableSeeder extends Seeder
{
    public function run()
    {
        $permissions = [
            [
                'id'    => 1,
                'title' => 'user_management_access',
            ],
            [
                'id'    => 2,
                'title' => 'permission_create',
            ],
            [
                'id'    => 3,
                'title' => 'permission_edit',
            ],
            [
                'id'    => 4,
                'title' => 'permission_show',
            ],
            [
                'id'    => 5,
                'title' => 'permission_delete',
            ],
            [
                'id'    => 6,
                'title' => 'permission_access',
            ],
            [
                'id'    => 7,
                'title' => 'role_create',
            ],
            [
                'id'    => 8,
                'title' => 'role_edit',
            ],
            [
                'id'    => 9,
                'title' => 'role_show',
            ],
            [
                'id'    => 10,
                'title' => 'role_delete',
            ],
            [
                'id'    => 11,
                'title' => 'role_access',
            ],
            [
                'id'    => 12,
                'title' => 'user_create',
            ],
            [
                'id'    => 13,
                'title' => 'user_edit',
            ],
            [
                'id'    => 14,
                'title' => 'user_show',
            ],
            [
                'id'    => 15,
                'title' => 'user_delete',
            ],
            [
                'id'    => 16,
                'title' => 'user_access',
            ],
            [
                'id'    => 17,
                'title' => 'car_rental_access',
            ],
            [
                'id'    => 18,
                'title' => 'client_create',
            ],
            [
                'id'    => 19,
                'title' => 'client_edit',
            ],
            [
                'id'    => 20,
                'title' => 'client_show',
            ],
            [
                'id'    => 21,
                'title' => 'client_delete',
            ],
            [
                'id'    => 22,
                'title' => 'client_access',
            ],
            [
                'id'    => 23,
                'title' => 'administration_access',
            ],
            [
                'id'    => 24,
                'title' => 'country_create',
            ],
            [
                'id'    => 25,
                'title' => 'country_edit',
            ],
            [
                'id'    => 26,
                'title' => 'country_show',
            ],
            [
                'id'    => 27,
                'title' => 'country_delete',
            ],
            [
                'id'    => 28,
                'title' => 'country_access',
            ],
            [
                'id'    => 29,
                'title' => 'vehicle_create',
            ],
            [
                'id'    => 30,
                'title' => 'vehicle_edit',
            ],
            [
                'id'    => 31,
                'title' => 'vehicle_show',
            ],
            [
                'id'    => 32,
                'title' => 'vehicle_delete',
            ],
            [
                'id'    => 33,
                'title' => 'vehicle_access',
            ],
            [
                'id'    => 34,
                'title' => 'vehicle_type_create',
            ],
            [
                'id'    => 35,
                'title' => 'vehicle_type_edit',
            ],
            [
                'id'    => 36,
                'title' => 'vehicle_type_show',
            ],
            [
                'id'    => 37,
                'title' => 'vehicle_type_delete',
            ],
            [
                'id'    => 38,
                'title' => 'vehicle_type_access',
            ],
            [
                'id'    => 39,
                'title' => 'reservation_create',
            ],
            [
                'id'    => 40,
                'title' => 'reservation_edit',
            ],
            [
                'id'    => 41,
                'title' => 'reservation_show',
            ],
            [
                'id'    => 42,
                'title' => 'reservation_delete',
            ],
            [
                'id'    => 43,
                'title' => 'reservation_access',
            ],
            [
                'id'    => 44,
                'title' => 'location_create',
            ],
            [
                'id'    => 45,
                'title' => 'location_edit',
            ],
            [
                'id'    => 46,
                'title' => 'location_show',
            ],
            [
                'id'    => 47,
                'title' => 'location_delete',
            ],
            [
                'id'    => 48,
                'title' => 'location_access',
            ],
        ];

        Permission::insert($permissions);
    }
}
