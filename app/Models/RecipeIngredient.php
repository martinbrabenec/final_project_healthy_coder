<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RecipeIngredient extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = ['ingredient_id', 'quantity', 'unit'];

    public function ingredient()
    {
        return $this->belongsTo(Ingredient::class);
    }
}
