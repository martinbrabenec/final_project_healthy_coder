<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class IngredientsTableSeeder extends Seeder
{
    public function run()
    {
        $ingredients = [
            ['name' => 'Quinoa'],
            ['name' => 'Black Beans'],
            ['name' => 'Olive Oil'],
            ['name' => 'Lemon'],
            ['name' => 'Dill'],
            ['name' => 'Salmon'],
            ['name' => 'Lentils'],
            ['name' => 'Spinach'],
            ['name' => 'Feta Cheese'],
            ['name' => 'Chicken Breast'],
            ['name' => 'Avocado'],
            ['name' => 'Bread'],
            ['name' => 'Sweet Potato'],
            ['name' => 'Greek Yogurt'],
            ['name' => 'Berries'],
            ['name' => 'Cauliflower'],
            ['name' => 'Carrots'],
            ['name' => 'Curry Powder'],
            ['name' => 'Tomatoes'],
            ['name' => 'Olives'],
            ['name' => 'Garlic'],
            ['name' => 'Onion'],
            ['name' => 'Salt'],
            ['name' => 'Black Pepper'],
            ['name' => 'Paprika'],
            ['name' => 'Cumin'],
            ['name' => 'Cinnamon'],
            ['name' => 'Honey'],
            ['name' => 'Coconut Oil'],
            ['name' => 'Bell Peppers'],
            ['name' => 'Chickpeas'],
            ['name' => 'Coconut Milk'],
            ['name' => 'Ginger'],
            ['name' => 'Cod'],
            ['name' => 'Red Pepper Flakes'],
        ];

        DB::table('ingredients')->insert($ingredients);
    }
}