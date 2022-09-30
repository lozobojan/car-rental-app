<?php

Route::group(['middleware' =>  ['auth:sanctum']], function(){
    Route::post('/me', \App\Http\Controllers\Api\Auth\CurrentUserController::class);
    Route::post('/logout', \App\Http\Controllers\Api\Auth\LogoutController::class);
});

Route::group(['prefix' => 'v1', 'as' => 'api.', 'namespace' => 'Api\V1\Admin', 'middleware' => ['auth:sanctum']], function () {
    // Abilities
    Route::apiResource('abilities', 'AbilitiesController', ['only' => ['index']]);

    // Locales
    Route::get('locales/languages', 'LocalesController@languages')->name('locales.languages');
    Route::get('locales/messages', 'LocalesController@messages')->name('locales.messages');

    // Permissions
    Route::resource('permissions', 'PermissionsApiController');

    // Roles
    Route::resource('roles', 'RolesApiController');

    // Users
    Route::resource('users', 'UsersApiController');

    // Client
    Route::resource('clients', 'ClientApiController');

    // Country
    Route::resource('countries', 'CountryApiController');

    // Vehicle
    Route::post('vehicles/media', 'VehicleApiController@storeMedia')->name('vehicles.storeMedia');
    Route::resource('vehicles', 'VehicleApiController');

    // Vehicle Type
    Route::resource('vehicle-types', 'VehicleTypeApiController');

    // Reservation
    Route::resource('reservations', 'ReservationApiController');

    // Location
    Route::resource('locations', 'LocationApiController');
});

Route::post('/login', \App\Http\Controllers\Api\Auth\LoginController::class);


