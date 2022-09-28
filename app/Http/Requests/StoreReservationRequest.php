<?php

namespace App\Http\Requests;

use App\Models\Reservation;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class StoreReservationRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('reservation_create');
    }

    public function rules()
    {
        return [
            'client_id' => [
                'integer',
                'exists:clients,id',
                'required',
            ],
            'vehicle_id' => [
                'integer',
                'exists:vehicles,id',
                'required',
            ],
            'date_from' => [
                'date_format:' . config('project.date_format'),
                'required',
            ],
            'date_to' => [
                'date_format:' . config('project.date_format'),
                'required',
            ],
            'total_price' => [
                'numeric',
                'min:0',
                'nullable',
            ],
            'pickup_location_id' => [
                'integer',
                'exists:locations,id',
                'required',
            ],
            'dropoff_location_id' => [
                'integer',
                'exists:locations,id',
                'required',
            ],
        ];
    }
}
