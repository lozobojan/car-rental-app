<?php

namespace App\Http\Requests;

use App\Models\Client;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class UpdateClientRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('client_edit');
    }

    public function rules()
    {
        return [
            'name' => [
                'string',
                'min:3',
                'max:255',
                'required',
            ],
            'passport_number' => [
                'string',
                'min:3',
                'max:255',
                'required',
                'unique:clients,passport_number,' . request()->route('client')->id,
            ],
            'phone_number' => [
                'string',
                'min:3',
                'max:255',
                'nullable',
            ],
            'email' => [
                'min:3',
                'max:255',
                'nullable',
            ],
            'first_reservation_date' => [
                'date_format:' . config('project.date_format'),
                'nullable',
            ],
            'last_reservation_date' => [
                'date_format:' . config('project.date_format'),
                'nullable',
            ],
            'remarks' => [
                'string',
                'nullable',
            ],
            'country_id' => [
                'integer',
                'exists:countries,id',
                'nullable',
            ],
        ];
    }
}
