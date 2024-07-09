<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RecipeIngredientsTableSeeder extends Seeder
{
    public function run()
    {
        $recipeIngredients = [
            // Quinoa Black Bean Salad
            ['recipe_id' => 1, 'ingredient_id' => 1, 'quantity' => '1', 'unit' => 'cup'],
            ['recipe_id' => 1, 'ingredient_id' => 2, 'quantity' => '1', 'unit' => 'can'],
            ['recipe_id' => 1, 'ingredient_id' => 3, 'quantity' => '2', 'unit' => 'tbsp'],
            ['recipe_id' => 1, 'ingredient_id' => 4, 'quantity' => '1', 'unit' => ''],
            ['recipe_id' => 1, 'ingredient_id' => 19, 'quantity' => '1', 'unit' => 'cup'],
            ['recipe_id' => 1, 'ingredient_id' => 21, 'quantity' => '2', 'unit' => 'cloves'],
            ['recipe_id' => 1, 'ingredient_id' => 26, 'quantity' => '1', 'unit' => 'tsp'],

            // Grilled Salmon with Lemon and Dill
            ['recipe_id' => 2, 'ingredient_id' => 6, 'quantity' => '4', 'unit' => 'fillets'],
            ['recipe_id' => 2, 'ingredient_id' => 4, 'quantity' => '1', 'unit' => ''],
            ['recipe_id' => 2, 'ingredient_id' => 5, 'quantity' => '2', 'unit' => 'tbsp'],
            ['recipe_id' => 2, 'ingredient_id' => 3, 'quantity' => '2', 'unit' => 'tbsp'],
            ['recipe_id' => 2, 'ingredient_id' => 21, 'quantity' => '2', 'unit' => 'cloves'],
            ['recipe_id' => 2, 'ingredient_id' => 23, 'quantity' => '1/2', 'unit' => 'tsp'],
            ['recipe_id' => 2, 'ingredient_id' => 24, 'quantity' => '1/4', 'unit' => 'tsp'],

            // Vegetarian Lentil Soup
            ['recipe_id' => 3, 'ingredient_id' => 7, 'quantity' => '1', 'unit' => 'cup'],
            ['recipe_id' => 3, 'ingredient_id' => 17, 'quantity' => '2', 'unit' => ''],
            ['recipe_id' => 3, 'ingredient_id' => 22, 'quantity' => '1', 'unit' => ''],
            ['recipe_id' => 3, 'ingredient_id' => 19, 'quantity' => '1', 'unit' => 'can'],
            ['recipe_id' => 3, 'ingredient_id' => 18, 'quantity' => '1', 'unit' => 'tbsp'],
            ['recipe_id' => 3, 'ingredient_id' => 3, 'quantity' => '2', 'unit' => 'tbsp'],
            ['recipe_id' => 3, 'ingredient_id' => 21, 'quantity' => '2', 'unit' => 'cloves'],

            // Spinach and Feta Stuffed Chicken
            ['recipe_id' => 4, 'ingredient_id' => 10, 'quantity' => '4', 'unit' => 'breasts'],
            ['recipe_id' => 4, 'ingredient_id' => 8, 'quantity' => '2', 'unit' => 'cups'],
            ['recipe_id' => 4, 'ingredient_id' => 9, 'quantity' => '1/2', 'unit' => 'cup'],
            ['recipe_id' => 4, 'ingredient_id' => 3, 'quantity' => '2', 'unit' => 'tbsp'],
            ['recipe_id' => 4, 'ingredient_id' => 21, 'quantity' => '2', 'unit' => 'cloves'],
            ['recipe_id' => 4, 'ingredient_id' => 23, 'quantity' => '1', 'unit' => 'tsp'],
            ['recipe_id' => 4, 'ingredient_id' => 24, 'quantity' => '1/2', 'unit' => 'tsp'],

            // Avocado Toast
            ['recipe_id' => 5, 'ingredient_id' => 11, 'quantity' => '1', 'unit' => ''],
            ['recipe_id' => 5, 'ingredient_id' => 12, 'quantity' => '2', 'unit' => 'slices'],
            ['recipe_id' => 5, 'ingredient_id' => 4, 'quantity' => '1/2', 'unit' => ''],
            ['recipe_id' => 5, 'ingredient_id' => 35, 'quantity' => '1/4', 'unit' => 'tsp'],
            ['recipe_id' => 5, 'ingredient_id' => 23, 'quantity' => '1/4', 'unit' => 'tsp'],
            ['recipe_id' => 5, 'ingredient_id' => 24, 'quantity' => '1/8', 'unit' => 'tsp'],

            // Sweet Potato Fries
            ['recipe_id' => 6, 'ingredient_id' => 13, 'quantity' => '2', 'unit' => 'large'],
            ['recipe_id' => 6, 'ingredient_id' => 3, 'quantity' => '2', 'unit' => 'tbsp'],
            ['recipe_id' => 6, 'ingredient_id' => 25, 'quantity' => '1', 'unit' => 'tsp'],
            ['recipe_id' => 6, 'ingredient_id' => 23, 'quantity' => '1/2', 'unit' => 'tsp'],
            ['recipe_id' => 6, 'ingredient_id' => 24, 'quantity' => '1/4', 'unit' => 'tsp'],

            // Greek Yogurt Parfait
            ['recipe_id' => 7, 'ingredient_id' => 14, 'quantity' => '1', 'unit' => 'cup'],
            ['recipe_id' => 7, 'ingredient_id' => 15, 'quantity' => '1/2', 'unit' => 'cup'],
            ['recipe_id' => 7, 'ingredient_id' => 28, 'quantity' => '1', 'unit' => 'tbsp'],
            ['recipe_id' => 7, 'ingredient_id' => 27, 'quantity' => '1/4', 'unit' => 'tsp'],

            // Cauliflower Rice Stir Fry
            ['recipe_id' => 8, 'ingredient_id' => 16, 'quantity' => '1', 'unit' => 'head'],
            ['recipe_id' => 8, 'ingredient_id' => 30, 'quantity' => '1', 'unit' => ''],
            ['recipe_id' => 8, 'ingredient_id' => 17, 'quantity' => '1', 'unit' => ''],
            ['recipe_id' => 8, 'ingredient_id' => 29, 'quantity' => '2', 'unit' => 'tbsp'],
            ['recipe_id' => 8, 'ingredient_id' => 21, 'quantity' => '2', 'unit' => 'cloves'],
            ['recipe_id' => 8, 'ingredient_id' => 33, 'quantity' => '1', 'unit' => 'tbsp'],
            ['recipe_id' => 8, 'ingredient_id' => 23, 'quantity' => '1/2', 'unit' => 'tsp'],
            ['recipe_id' => 8, 'ingredient_id' => 24, 'quantity' => '1/4', 'unit' => 'tsp'],

            // Chickpea Veggie Curry
            ['recipe_id' => 9, 'ingredient_id' => 31, 'quantity' => '1', 'unit' => 'can'],
            ['recipe_id' => 9, 'ingredient_id' => 18, 'quantity' => '2', 'unit' => 'tbsp'],
            ['recipe_id' => 9, 'ingredient_id' => 32, 'quantity' => '1', 'unit' => 'can'],
            ['recipe_id' => 9, 'ingredient_id' => 30, 'quantity' => '1', 'unit' => ''],
            ['recipe_id' => 9, 'ingredient_id' => 17, 'quantity' => '1', 'unit' => ''],
            ['recipe_id' => 9, 'ingredient_id' => 21, 'quantity' => '2', 'unit' => 'cloves'],
            ['recipe_id' => 9, 'ingredient_id' => 33, 'quantity' => '1', 'unit' => 'tbsp'],
            ['recipe_id' => 9, 'ingredient_id' => 26, 'quantity' => '1', 'unit' => 'tsp'],

            // Baked Cod with Tomatoes and Olives
            ['recipe_id' => 10, 'ingredient_id' => 34, 'quantity' => '4', 'unit' => 'fillets'],
            ['recipe_id' => 10, 'ingredient_id' => 19, 'quantity' => '1', 'unit' => 'cup'],
            ['recipe_id' => 10, 'ingredient_id' => 20, 'quantity' => '1/2', 'unit' => 'cup'],
            ['recipe_id' => 10, 'ingredient_id' => 3, 'quantity' => '2', 'unit' => 'tbsp'],
            ['recipe_id' => 10, 'ingredient_id' => 21, 'quantity' => '2', 'unit' => 'cloves'],
            ['recipe_id' => 10, 'ingredient_id' => 4, 'quantity' => '1', 'unit' => ''],
            ['recipe_id' => 10, 'ingredient_id' => 23, 'quantity' => '1/2', 'unit' => 'tsp'],
            ['recipe_id' => 10, 'ingredient_id' => 24, 'quantity' => '1/4', 'unit' => 'tsp'],
        ];

        DB::table('recipe_ingredients')->insert($recipeIngredients);
    }
}