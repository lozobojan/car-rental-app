<?php

namespace App\Models;

use \DateTimeInterface;
use App\Support\HasAdvancedFilter;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Client extends Model
{
    use HasAdvancedFilter;
    use SoftDeletes;
    use HasFactory;

    public $table = 'clients';

    protected $dates = [
        'first_reservation_date',
        'last_reservation_date',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $orderable = [
        'id',
        'name',
        'passport_number',
        'phone_number',
        'email',
        'first_reservation_date',
        'last_reservation_date',
        'country.name',
    ];

    protected $filterable = [
        'id',
        'name',
        'passport_number',
        'phone_number',
        'email',
        'first_reservation_date',
        'last_reservation_date',
        'country.name',
    ];

    protected $fillable = [
        'name',
        'passport_number',
        'phone_number',
        'email',
        'first_reservation_date',
        'last_reservation_date',
        'remarks',
        'country_id',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    public function getFirstReservationDateAttribute($value)
    {
        return $value ? Carbon::createFromFormat('Y-m-d H:i:s', $value)->format(config('project.date_format')) : null;
    }

    public function setFirstReservationDateAttribute($value)
    {
        $this->attributes['first_reservation_date'] = $value ? Carbon::createFromFormat(config('project.date_format'), $value)->format('Y-m-d') : null;
    }

    public function getLastReservationDateAttribute($value)
    {
        return $value ? Carbon::createFromFormat('Y-m-d H:i:s', $value)->format(config('project.date_format')) : null;
    }

    public function setLastReservationDateAttribute($value)
    {
        $this->attributes['last_reservation_date'] = $value ? Carbon::createFromFormat(config('project.date_format'), $value)->format('Y-m-d') : null;
    }

    public function country()
    {
        return $this->belongsTo(Country::class);
    }

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }
}
