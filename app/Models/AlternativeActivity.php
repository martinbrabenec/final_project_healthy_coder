<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AlternativeActivity extends Model
{
    use HasFactory;

    protected $fillable = [
        'alternative_activity', 'link_to_photo', 'external_info'
    ];
}
