<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Activity extends Model
{
    protected $fillable = [
        'name', 'description', 'activity_type', 'body_zone', 'image'
    ];

    public function userActivities()
    {
        return $this->hasMany(UserActivity::class);
    }
}