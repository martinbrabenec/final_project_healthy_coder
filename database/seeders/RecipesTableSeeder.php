<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RecipesTableSeeder extends Seeder
{
    public function run()
    {
        $recipes = [
            ['name' => 'Quinoa Black Bean Salad', 'is_vegetarian' => true, 'photo' => 'ASSETS/food_images/quinoa_black_bean_salad.jpg'],
            ['name' => 'Grilled Salmon with Lemon and Dill', 'is_vegetarian' => false, 'photo' => 'ASSETS/food_images/grilled_salmon_lemon_dill.jpg'],
            ['name' => 'Vegetarian Lentil Soup', 'is_vegetarian' => true, 'photo' => 'ASSETS/food_images/vegetarian_lentil_soup.jpg'],
            ['name' => 'Spinach and Feta Stuffed Chicken', 'is_vegetarian' => false, 'photo' => 'ASSETS/food_images/spinach_feta_chicken.jpg'],
            ['name' => 'Avocado Toast', 'is_vegetarian' => true, 'photo' => 'ASSETS/food_images/avocado_toast.jpg'],
            ['name' => 'Sweet Potato Fries', 'is_vegetarian' => true, 'photo' => 'ASSETS/food_images/sweet_potato_fries.jpg'],
            ['name' => 'Greek Yogurt Parfait', 'is_vegetarian' => true, 'photo' => 'ASSETS/food_images/yogurt_parfait.jpg'],
            ['name' => 'Cauliflower Rice Stir Fry', 'is_vegetarian' => true, 'photo' => 'ASSETS/food_images/cauliflower_rice_stir_fry.jpg'],
            ['name' => 'Chickpea Veggie Curry', 'is_vegetarian' => true, 'photo' => 'ASSETS/food_images/chickpea_veggie_curry.jpg'],
            ['name' => 'Baked Cod with Tomatoes and Olives', 'is_vegetarian' => false, 'photo' => 'ASSETS/food_images/baked_cod_tomatoes_olives.jpg'],
        ];

        DB::table('recipes')->insert($recipes);
    }
}