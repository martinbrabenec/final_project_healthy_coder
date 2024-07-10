<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable;

    protected $fillable = [
        'first_name', 'last_name', 'name', 'email', 'date_of_birth', 'profile_picture', 'password',
    ];

    protected $hidden = [
        'password', 'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'date_of_birth' => 'date',
    ];

    public function activities()
    {
        return $this->belongsToMany(Activity::class, 'user_activities');
    }

    public function recipes()
    {
        return $this->belongsToMany(Recipe::class, 'user_recipes');
    }
}