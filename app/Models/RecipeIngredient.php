namespace App\Models;

<?php
use Illuminate\Database\Eloquent\Model;
use App\Models\Recipe;
use App\Models\Ingredient;

class RecipeIngredient extends Model
{
    protected $fillable = [
        'recipe_id',
        'ingredient_id',
        'quantity',
        'unit'
    ];

    public function recipe()
    {
        return $this->belongsTo(Recipe::class);
    }

    public function ingredient()
    {
        return $this->belongsTo(Ingredient::class);
    }
}
