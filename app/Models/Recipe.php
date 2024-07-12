<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Recipe extends Model
{
    protected $fillable = [
        'name',
        'photo',
        'is_vegetarian',
    ];

    public function ingredients()
    {
        return $this->belongsToMany(Ingredient::class, 'recipe_ingredients')
                    ->withPivot('quantity', 'unit');
    }

    public function steps()
    {
        return $this->hasMany(RecipeStep::class);
    }

    public function users()
    {
        return $this->belongsToMany(User::class, 'user_recipes');
    }
}