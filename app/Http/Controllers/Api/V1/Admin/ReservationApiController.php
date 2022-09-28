<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreReservationRequest;
use App\Http\Requests\UpdateReservationRequest;
use App\Http\Resources\Admin\ReservationResource;
use App\Models\Client;
use App\Models\Location;
use App\Models\Reservation;
use App\Models\Vehicle;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ReservationApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('reservation_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new ReservationResource(Reservation::with(['client', 'vehicle', 'pickupLocation', 'dropoffLocation'])->advancedFilter());
    }

    public function store(StoreReservationRequest $request)
    {
        $reservation = Reservation::create($request->validated());

        return (new ReservationResource($reservation))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create()
    {
        abort_if(Gate::denies('reservation_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [
                'client'           => Client::get(['id', 'name']),
                'vehicle'          => Vehicle::get(['id', 'registration_plates']),
                'pickup_location'  => Location::get(['id', 'name']),
                'dropoff_location' => Location::get(['id', 'name']),
            ],
        ]);
    }

    public function show(Reservation $reservation)
    {
        abort_if(Gate::denies('reservation_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new ReservationResource($reservation->load(['client', 'vehicle', 'pickupLocation', 'dropoffLocation']));
    }

    public function update(UpdateReservationRequest $request, Reservation $reservation)
    {
        $reservation->update($request->validated());

        return (new ReservationResource($reservation))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(Reservation $reservation)
    {
        abort_if(Gate::denies('reservation_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new ReservationResource($reservation->load(['client', 'vehicle', 'pickupLocation', 'dropoffLocation'])),
            'meta' => [
                'client'           => Client::get(['id', 'name']),
                'vehicle'          => Vehicle::get(['id', 'registration_plates']),
                'pickup_location'  => Location::get(['id', 'name']),
                'dropoff_location' => Location::get(['id', 'name']),
            ],
        ]);
    }

    public function destroy(Reservation $reservation)
    {
        abort_if(Gate::denies('reservation_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $reservation->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
