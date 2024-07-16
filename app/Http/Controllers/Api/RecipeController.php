<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Recipe;
use App\Models\RecipeIngredient;
use App\Models\RecipeStep;

class RecipeController extends Controller
{
    public function index()
    {
        $recipes = Recipe::all();
        return response()->json($recipes, 200);
    }

    public function show($id)
    {
        $recipe = Recipe::with(['ingredients.ingredient', 'steps'])->findOrFail($id);
        return response()->json($recipe, 200);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|max:255',
            'photo' => 'required|string', // Changed from 'url' to 'string'
            'is_vegetarian' => 'required|boolean',
            'ingredients' => 'required|array',
            'steps' => 'required|array'
        ]);

        $recipe = Recipe::create($validatedData);

        foreach ($request->ingredients as $ingredient) {
            $recipeIngredient = new RecipeIngredient([
                'ingredient_id' => $ingredient['ingredient']['id'],
                'quantity' => $ingredient['quantity'],
                'unit' => $ingredient['unit']
            ]);
            $recipe->ingredients()->save($recipeIngredient);
        }

        foreach ($request->steps as $step) {
            $recipeStep = new RecipeStep([
                'description' => $step['description'],
                'step_number' => $step['step_number']
            ]);
            $recipe->steps()->save($recipeStep);
        }

        return response()->json($recipe, 201);
    }

    public function update(Request $request, $id)
    {
        $recipe = Recipe::findOrFail($id);
        $validatedData = $request->validate([
            'name' => 'required|max:255',
            'photo' => 'required|string', // Changed from 'url' to 'string'
            'is_vegetarian' => 'required|boolean',
            'ingredients' => 'required|array',
            'steps' => 'required|array'
        ]);

        $recipe->update($validatedData);

        // Update ingredients
        $recipe->ingredients()->delete();
        foreach ($request->ingredients as $ingredient) {
            $recipeIngredient = new RecipeIngredient([
                'ingredient_id' => $ingredient['ingredient']['id'],
                'quantity' => $ingredient['quantity'],
                'unit' => $ingredient['unit']
            ]);
            $recipe->ingredients()->save($recipeIngredient);
        }

        // Update steps
        $recipe->steps()->delete();
        foreach ($request->steps as $step) {
            $recipeStep = new RecipeStep([
                'description' => $step['description'],
                'step_number' => $step['step_number']
            ]);
            $recipe->steps()->save($recipeStep);
        }

        return response()->json($recipe, 200);
    }

    public function destroy($id)
    {
        $recipe = Recipe::findOrFail($id);
        $recipe->ingredients()->delete();
        $recipe->steps()->delete();
        $recipe->delete();
        return response()->json(null, 204);
    }
}
