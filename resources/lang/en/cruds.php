<?php

return [
    'userManagement' => [
        'title'          => 'User management',
        'title_singular' => 'User management',
    ],
    'permission' => [
        'title'          => 'Permissions',
        'title_singular' => 'Permission',
        'fields'         => [
            'id'                => 'ID',
            'id_helper'         => ' ',
            'title'             => 'Title',
            'title_helper'      => ' ',
            'created_at'        => 'Created at',
            'created_at_helper' => ' ',
            'updated_at'        => 'Updated at',
            'updated_at_helper' => ' ',
            'deleted_at'        => 'Deleted at',
            'deleted_at_helper' => ' ',
        ],
    ],
    'role' => [
        'title'          => 'Roles',
        'title_singular' => 'Role',
        'fields'         => [
            'id'                 => 'ID',
            'id_helper'          => ' ',
            'title'              => 'Title',
            'title_helper'       => ' ',
            'permissions'        => 'Permissions',
            'permissions_helper' => ' ',
            'created_at'         => 'Created at',
            'created_at_helper'  => ' ',
            'updated_at'         => 'Updated at',
            'updated_at_helper'  => ' ',
            'deleted_at'         => 'Deleted at',
            'deleted_at_helper'  => ' ',
        ],
    ],
    'user' => [
        'title'          => 'Users',
        'title_singular' => 'User',
        'fields'         => [
            'id'                       => 'ID',
            'id_helper'                => ' ',
            'name'                     => 'Name',
            'name_helper'              => ' ',
            'email'                    => 'Email',
            'email_helper'             => ' ',
            'email_verified_at'        => 'Email verified at',
            'email_verified_at_helper' => ' ',
            'password'                 => 'Password',
            'password_helper'          => ' ',
            'roles'                    => 'Roles',
            'roles_helper'             => ' ',
            'remember_token'           => 'Remember Token',
            'remember_token_helper'    => ' ',
            'created_at'               => 'Created at',
            'created_at_helper'        => ' ',
            'updated_at'               => 'Updated at',
            'updated_at_helper'        => ' ',
            'deleted_at'               => 'Deleted at',
            'deleted_at_helper'        => ' ',
        ],
    ],
    'carRental' => [
        'title'          => 'Car Rental',
        'title_singular' => 'Car Rental',
    ],
    'client' => [
        'title'          => 'Client',
        'title_singular' => 'Client',
        'fields'         => [
            'id'                            => 'ID',
            'id_helper'                     => ' ',
            'name'                          => 'Name',
            'name_helper'                   => ' ',
            'passport_number'               => 'Passport Number',
            'passport_number_helper'        => ' ',
            'phone_number'                  => 'Phone Number',
            'phone_number_helper'           => ' ',
            'email'                         => 'Email',
            'email_helper'                  => ' ',
            'first_reservation_date'        => 'First Reservation Date',
            'first_reservation_date_helper' => ' ',
            'last_reservation_date'         => 'Last Reservation Date',
            'last_reservation_date_helper'  => ' ',
            'created_at'                    => 'Created at',
            'created_at_helper'             => ' ',
            'updated_at'                    => 'Updated at',
            'updated_at_helper'             => ' ',
            'deleted_at'                    => 'Deleted at',
            'deleted_at_helper'             => ' ',
            'remarks'                       => 'Remarks',
            'remarks_helper'                => ' ',
            'country'                       => 'Country',
            'country_helper'                => ' ',
        ],
    ],
    'administration' => [
        'title'          => 'Administration',
        'title_singular' => 'Administration',
    ],
    'country' => [
        'title'          => 'Country',
        'title_singular' => 'Country',
        'fields'         => [
            'id'                => 'ID',
            'id_helper'         => ' ',
            'name'              => 'Name',
            'name_helper'       => ' ',
            'created_at'        => 'Created at',
            'created_at_helper' => ' ',
            'updated_at'        => 'Updated at',
            'updated_at_helper' => ' ',
            'deleted_at'        => 'Deleted at',
            'deleted_at_helper' => ' ',
        ],
    ],
    'vehicle' => [
        'title'          => 'Vehicle',
        'title_singular' => 'Vehicle',
        'fields'         => [
            'id'                         => 'ID',
            'id_helper'                  => ' ',
            'registration_plates'        => 'Registration Plates',
            'registration_plates_helper' => ' ',
            'year'                       => 'Year',
            'year_helper'                => ' ',
            'number_of_seats'            => 'Number Of Seats',
            'number_of_seats_helper'     => ' ',
            'price_per_day'              => 'Price Per Day',
            'price_per_day_helper'       => ' ',
            'remarks'                    => 'Remarks',
            'remarks_helper'             => ' ',
            'created_at'                 => 'Created at',
            'created_at_helper'          => ' ',
            'updated_at'                 => 'Updated at',
            'updated_at_helper'          => ' ',
            'deleted_at'                 => 'Deleted at',
            'deleted_at_helper'          => ' ',
            'vehicle_type'               => 'Vehicle Type',
            'vehicle_type_helper'        => ' ',
            'photos'                     => 'Photos',
            'photos_helper'              => ' ',
        ],
    ],
    'vehicleType' => [
        'title'          => 'Vehicle Type',
        'title_singular' => 'Vehicle Type',
        'fields'         => [
            'id'                => 'ID',
            'id_helper'         => ' ',
            'name'              => 'Name',
            'name_helper'       => ' ',
            'created_at'        => 'Created at',
            'created_at_helper' => ' ',
            'updated_at'        => 'Updated at',
            'updated_at_helper' => ' ',
            'deleted_at'        => 'Deleted at',
            'deleted_at_helper' => ' ',
        ],
    ],
    'reservation' => [
        'title'          => 'Reservation',
        'title_singular' => 'Reservation',
        'fields'         => [
            'id'                      => 'ID',
            'id_helper'               => ' ',
            'client'                  => 'Client',
            'client_helper'           => ' ',
            'vehicle'                 => 'Vehicle',
            'vehicle_helper'          => ' ',
            'date_from'               => 'Date From',
            'date_from_helper'        => ' ',
            'date_to'                 => 'Date To',
            'date_to_helper'          => ' ',
            'total_price'             => 'Total Price',
            'total_price_helper'      => ' ',
            'created_at'              => 'Created at',
            'created_at_helper'       => ' ',
            'updated_at'              => 'Updated at',
            'updated_at_helper'       => ' ',
            'deleted_at'              => 'Deleted at',
            'deleted_at_helper'       => ' ',
            'pickup_location'         => 'Pickup Location',
            'pickup_location_helper'  => ' ',
            'dropoff_location'        => 'Dropoff Location',
            'dropoff_location_helper' => ' ',
        ],
    ],
    'location' => [
        'title'          => 'Location',
        'title_singular' => 'Location',
        'fields'         => [
            'id'                => 'ID',
            'id_helper'         => ' ',
            'name'              => 'Name',
            'name_helper'       => ' ',
            'is_pickup'         => 'Is Pickup',
            'is_pickup_helper'  => ' ',
            'is_dropoff'        => 'Is Dropoff',
            'is_dropoff_helper' => ' ',
            'created_at'        => 'Created at',
            'created_at_helper' => ' ',
            'updated_at'        => 'Updated at',
            'updated_at_helper' => ' ',
            'deleted_at'        => 'Deleted at',
            'deleted_at_helper' => ' ',
        ],
    ],
];
