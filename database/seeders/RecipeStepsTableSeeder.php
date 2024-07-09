<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RecipeStepsTableSeeder extends Seeder
{
    public function run()
    {
        $recipeSteps = [
            // Quinoa Black Bean Salad
            ['recipe_id' => 1, 'step_number' => 1, 'description' => 'Rinse quinoa thoroughly under cold water.'],
            ['recipe_id' => 1, 'step_number' => 2, 'description' => 'Cook quinoa according to package instructions. Let it cool.'],
            ['recipe_id' => 1, 'step_number' => 3, 'description' => 'Drain and rinse black beans.'],
            ['recipe_id' => 1, 'step_number' => 4, 'description' => 'Chop tomatoes and mince garlic.'],
            ['recipe_id' => 1, 'step_number' => 5, 'description' => 'In a large bowl, combine cooled quinoa, black beans, and chopped tomatoes.'],
            ['recipe_id' => 1, 'step_number' => 6, 'description' => 'In a small bowl, whisk together olive oil, lemon juice, minced garlic, and cumin.'],
            ['recipe_id' => 1, 'step_number' => 7, 'description' => 'Pour the dressing over the quinoa mixture and toss to combine.'],
            ['recipe_id' => 1, 'step_number' => 8, 'description' => 'Season with salt and pepper to taste. Serve chilled or at room temperature.'],

            // Grilled Salmon with Lemon and Dill
            ['recipe_id' => 2, 'step_number' => 1, 'description' => 'Preheat grill to medium-high heat.'],
            ['recipe_id' => 2, 'step_number' => 2, 'description' => 'In a small bowl, mix chopped dill, minced garlic, lemon zest, salt, and pepper.'],
            ['recipe_id' => 2, 'step_number' => 3, 'description' => 'Brush salmon fillets with olive oil and rub the dill mixture all over.'],
            ['recipe_id' => 2, 'step_number' => 4, 'description' => 'Place salmon on the grill, skin-side down. Cook for 4-5 minutes.'],
            ['recipe_id' => 2, 'step_number' => 5, 'description' => 'Carefully flip the salmon and cook for another 3-4 minutes, or until it flakes easily with a fork.'],
            ['recipe_id' => 2, 'step_number' => 6, 'description' => 'Remove from grill and let rest for 2 minutes.'],
            ['recipe_id' => 2, 'step_number' => 7, 'description' => 'Squeeze fresh lemon juice over the salmon before serving.'],

            // Vegetarian Lentil Soup
            ['recipe_id' => 3, 'step_number' => 1, 'description' => 'Rinse lentils and set aside.'],
            ['recipe_id' => 3, 'step_number' => 2, 'description' => 'In a large pot, heat olive oil over medium heat. Add diced onions and carrots. Sauté for 5 minutes.'],
            ['recipe_id' => 3, 'step_number' => 3, 'description' => 'Add minced garlic and curry powder. Cook for another minute until fragrant.'],
            ['recipe_id' => 3, 'step_number' => 4, 'description' => 'Add lentils, diced tomatoes, and 4 cups of water or vegetable broth. Bring to a boil.'],
            ['recipe_id' => 3, 'step_number' => 5, 'description' => 'Reduce heat and simmer for 25-30 minutes, or until lentils are tender.'],
            ['recipe_id' => 3, 'step_number' => 6, 'description' => 'Season with salt and pepper to taste.'],
            ['recipe_id' => 3, 'step_number' => 7, 'description' => 'Serve hot, garnished with fresh herbs if desired.'],

            // Spinach and Feta Stuffed Chicken
            ['recipe_id' => 4, 'step_number' => 1, 'description' => 'Preheat oven to 375°F (190°C).'],
            ['recipe_id' => 4, 'step_number' => 2, 'description' => 'In a bowl, mix chopped spinach, crumbled feta, minced garlic, and a drizzle of olive oil.'],
            ['recipe_id' => 4, 'step_number' => 3, 'description' => 'Cut a pocket into each chicken breast.'],
            ['recipe_id' => 4, 'step_number' => 4, 'description' => 'Stuff each chicken breast with the spinach and feta mixture.'],
            ['recipe_id' => 4, 'step_number' => 5, 'description' => 'Season the outside of the chicken with salt, pepper, and paprika.'],
            ['recipe_id' => 4, 'step_number' => 6, 'description' => 'Heat olive oil in an oven-safe skillet over medium-high heat.'],
            ['recipe_id' => 4, 'step_number' => 7, 'description' => 'Sear the chicken breasts for 3-4 minutes on each side until golden.'],
            ['recipe_id' => 4, 'step_number' => 8, 'description' => 'Transfer the skillet to the preheated oven and bake for 15-20 minutes, until chicken is cooked through.'],

            // Avocado Toast
            ['recipe_id' => 5, 'step_number' => 1, 'description' => 'Toast the bread slices until golden brown.'],
            ['recipe_id' => 5, 'step_number' => 2, 'description' => 'Cut the avocado in half, remove the pit, and scoop out the flesh into a bowl.'],
            ['recipe_id' => 5, 'step_number' => 3, 'description' => 'Mash the avocado with a fork and add lemon juice, salt, and red pepper flakes.'],
            ['recipe_id' => 5, 'step_number' => 4, 'description' => 'Spread the mashed avocado evenly on the toasted bread slices.'],
            ['recipe_id' => 5, 'step_number' => 5, 'description' => 'Optionally, top with additional ingredients like sliced tomatoes or a poached egg.'],

            // Sweet Potato Fries
            ['recipe_id' => 6, 'step_number' => 1, 'description' => 'Preheat oven to 425°F (220°C).'],
            ['recipe_id' => 6, 'step_number' => 2, 'description' => 'Wash and peel the sweet potatoes, then cut them into even-sized fries.'],
            ['recipe_id' => 6, 'step_number' => 3, 'description' => 'In a large bowl, toss the sweet potato fries with olive oil, paprika, salt, and pepper.'],
            ['recipe_id' => 6, 'step_number' => 4, 'description' => 'Spread the fries in a single layer on a baking sheet.'],
            ['recipe_id' => 6, 'step_number' => 5, 'description' => 'Bake for 20-25 minutes, flipping halfway through, until crispy and golden.'],
            ['recipe_id' => 6, 'step_number' => 6, 'description' => 'Serve hot with your favorite dipping sauce.'],

            // Greek Yogurt Parfait
            ['recipe_id' => 7, 'step_number' => 1, 'description' => 'In a glass or bowl, start with a layer of Greek yogurt.'],
            ['recipe_id' => 7, 'step_number' => 2, 'description' => 'Add a layer of mixed berries on top of the yogurt.'],
            ['recipe_id' => 7, 'step_number' => 3, 'description' => 'Drizzle honey over the berries.'],
            ['recipe_id' => 7, 'step_number' => 4, 'description' => 'Repeat the layers until the glass is full.'],
            ['recipe_id' => 7, 'step_number' => 5, 'description' => 'Top with a sprinkle of cinnamon and serve immediately.'],

            // Cauliflower Rice Stir Fry
            ['recipe_id' => 8, 'step_number' => 1, 'description' => 'Cut cauliflower into florets and pulse in a food processor until it resembles rice.'],
            ['recipe_id' => 8, 'step_number' => 2, 'description' => 'Heat coconut oil in a large skillet over medium heat.'],
            ['recipe_id' => 8, 'step_number' => 3, 'description' => 'Add minced garlic and grated ginger, sauté for 1 minute.'],
            ['recipe_id' => 8, 'step_number' => 4, 'description' => 'Add diced bell peppers and carrots, cook for 3-4 minutes until slightly tender.'],
            ['recipe_id' => 8, 'step_number' => 5, 'description' => 'Add the cauliflower rice to the skillet and stir fry for 5-7 minutes.'],
            ['recipe_id' => 8, 'step_number' => 6, 'description' => 'Season with salt and pepper to taste.'],
            ['recipe_id' => 8, 'step_number' => 7, 'description' => 'Serve hot, garnished with chopped green onions if desired.'],

            // Chickpea Veggie Curry
            ['recipe_id' => 9, 'step_number' => 1, 'description' => 'In a large pot, heat oil over medium heat. Add diced onions and sauté until translucent.'],
            ['recipe_id' => 9, 'step_number' => 2, 'description' => 'Add minced garlic and grated ginger, cook for another minute.'],
            ['recipe_id' => 9, 'step_number' => 3, 'description' => 'Stir in curry powder and cook until fragrant.'],
            ['recipe_id' => 9, 'step_number' => 4, 'description' => 'Add diced carrots and bell peppers, cook for 5 minutes.'],
            ['recipe_id' => 9, 'step_number' => 5, 'description' => 'Add chickpeas and coconut milk. Simmer for 15-20 minutes.'],
            ['recipe_id' => 9, 'step_number' => 6, 'description' => 'Season with salt and pepper to taste.'],
            ['recipe_id' => 9, 'step_number' => 7, 'description' => 'Serve hot over rice or with naan bread.'],

            // Baked Cod with Tomatoes and Olives
            ['recipe_id' => 10, 'step_number' => 1, 'description' => 'Preheat oven to 400°F (200°C).'],
            ['recipe_id' => 10, 'step_number' => 2, 'description' => 'In a baking dish, combine diced tomatoes, sliced olives, minced garlic, and olive oil.'],
            ['recipe_id' => 10, 'step_number' => 3, 'description' => 'Season cod fillets with salt and pepper, then place them on top of the tomato mixture.'],
            ['recipe_id' => 10, 'step_number' => 4, 'description' => 'Drizzle lemon juice over the fish.'],
            ['recipe_id' => 10, 'step_number' => 5, 'description' => 'Bake for 15-20 minutes, until the fish flakes easily with a fork.'],
            ['recipe_id' => 10, 'step_number' => 6, 'description' => 'Serve hot, spooning the tomato and olive mixture over the fish.'],
        ];

        DB::table('recipe_steps')->insert($recipeSteps);
    }
}