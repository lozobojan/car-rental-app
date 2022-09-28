<?php

namespace App\Models;

use \DateTimeInterface;
use App\Support\HasAdvancedFilter;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Reservation extends Model
{
    use HasAdvancedFilter;
    use SoftDeletes;
    use HasFactory;

    public $table = 'reservations';

    protected $dates = [
        'date_from',
        'date_to',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $orderable = [
        'id',
        'client.name',
        'vehicle.registration_plates',
        'date_from',
        'date_to',
        'total_price',
        'pickup_location.name',
        'dropoff_location.name',
    ];

    protected $filterable = [
        'id',
        'client.name',
        'vehicle.registration_plates',
        'date_from',
        'date_to',
        'total_price',
        'pickup_location.name',
        'dropoff_location.name',
    ];

    protected $fillable = [
        'client_id',
        'vehicle_id',
        'date_from',
        'date_to',
        'total_price',
        'pickup_location_id',
        'dropoff_location_id',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    public function client()
    {
        return $this->belongsTo(Client::class);
    }

    public function vehicle()
    {
        return $this->belongsTo(Vehicle::class);
    }

    public function getDateFromAttribute($value)
    {
        return $value ? Carbon::createFromFormat('Y-m-d H:i:s', $value)->format(config('project.date_format')) : null;
    }

    public function setDateFromAttribute($value)
    {
        $this->attributes['date_from'] = $value ? Carbon::createFromFormat(config('project.date_format'), $value)->format('Y-m-d') : null;
    }

    public function getDateToAttribute($value)
    {
        return $value ? Carbon::createFromFormat('Y-m-d H:i:s', $value)->format(config('project.date_format')) : null;
    }

    public function setDateToAttribute($value)
    {
        $this->attributes['date_to'] = $value ? Carbon::createFromFormat(config('project.date_format'), $value)->format('Y-m-d') : null;
    }

    public function pickupLocation()
    {
        return $this->belongsTo(Location::class);
    }

    public function dropoffLocation()
    {
        return $this->belongsTo(Location::class);
    }

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }
}
