<?php

namespace App\Http\Requests;

use App\Models\Vehicle;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class UpdateVehicleRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('vehicle_edit');
    }

    public function rules()
    {
        return [
            'registration_plates' => [
                'string',
                'min:5',
                'max:255',
                'required',
                'unique:vehicles,registration_plates,' . request()->route('vehicle')->id,
            ],
            'year' => [
                'integer',
                'min:-2147483648',
                'max:2147483647',
                'required',
            ],
            'number_of_seats' => [
                'integer',
                'min:-2147483648',
                'max:2147483647',
                'required',
            ],
            'price_per_day' => [
                'numeric',
                'min:0',
                'required',
            ],
            'remarks' => [
                'string',
                'nullable',
            ],
            'vehicle_type_id' => [
                'integer',
                'exists:vehicle_types,id',
                'required',
            ],
            'photos' => [
                'array',
                'required',
            ],
            'photos.*.id' => [
                'integer',
                'exists:media,id',
            ],
        ];
    }
}
