<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Recipe;
use App\Models\RecipeIngredient;
use App\Models\RecipeStep;
use App\Models\Ingredient;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\ValidationException;

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
        Log::info('Incoming request data for new recipe', $request->all());

        try {
            $validatedData = $request->validate([
                'name' => 'required|max:255',
                'photo' => 'required|string',
                'is_vegetarian' => 'required|boolean',
                'ingredients' => 'required|array',
                'steps' => 'required|array'
            ]);

            $recipe = Recipe::create($validatedData);

            foreach ($request->ingredients as $ingredientData) {
              
                $ingredient = Ingredient::firstOrCreate(
                    ['name' => $ingredientData['ingredient']['name']],
                );

                $recipeIngredient = new RecipeIngredient([
                    'ingredient_id' => $ingredient->id,
                    'quantity' => $ingredientData['quantity'],
                    'unit' => $ingredientData['unit']
                ]);
                $recipe->ingredients()->save($recipeIngredient);
            }

            foreach ($request->steps as $key => $step) {
                $recipeStep = new RecipeStep([
                    'description' => $step['description'],
                    'step_number' => $key + 1
                ]);
                $recipe->steps()->save($recipeStep);
            }

            Log::info('Recipe created successfully', ['recipe' => $recipe]);
            return response()->json($recipe, 201);

        } catch (ValidationException $e) {
            Log::error('Validation failed for new recipe', [
                'errors' => $e->errors(),
                'request' => $request->all()
            ]);
            return response()->json([
                'message' => 'The given data was invalid.',
                'errors' => $e->errors(),
            ], 422);
        } catch (\Exception $e) {
            Log::error('Error creating recipe', [
                'message' => $e->getMessage(),
                'request' => $request->all()
            ]);
            return response()->json([
                'message' => 'An error occurred while creating the recipe.',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function update(Request $request, $id)
    {
        Log::info('Incoming request data for updating recipe', ['id' => $id, 'data' => $request->all()]);

        try {
            $recipe = Recipe::findOrFail($id);
            $validatedData = $request->validate([
                'name' => 'required|max:255',
                'photo' => 'required|string',
                'is_vegetarian' => 'required|boolean',
                'ingredients' => 'required|array',
                'steps' => 'required|array'
            ]);

            $recipe->update($validatedData);

            // Update ingredients
            $recipe->ingredients()->delete();
            foreach ($request->ingredients as $ingredientData) {
                // First, find or create the Ingredient
                $ingredient = Ingredient::firstOrCreate(
                    ['name' => $ingredientData['ingredient']['name']],
                    ['name' => $ingredientData['ingredient']['name']] // You can add more fields here if needed
                );

                // Now create the RecipeIngredient with the Ingredient id
                $recipeIngredient = new RecipeIngredient([
                    'ingredient_id' => $ingredient->id,
                    'quantity' => $ingredientData['quantity'],
                    'unit' => $ingredientData['unit']
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

            Log::info('Recipe updated successfully', ['recipe' => $recipe]);
            return response()->json($recipe, 200);

        } catch (ValidationException $e) {
            Log::error('Validation failed for updating recipe', [
                'id' => $id,
                'errors' => $e->errors(),
                'request' => $request->all()
            ]);
            return response()->json([
                'message' => 'The given data was invalid.',
                'errors' => $e->errors(),
            ], 422);
        } catch (\Exception $e) {
            Log::error('Error updating recipe', [
                'id' => $id,
                'message' => $e->getMessage(),
                'request' => $request->all()
            ]);
            return response()->json([
                'message' => 'An error occurred while updating the recipe.',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function destroy($id)
    {
        try {
            $recipe = Recipe::findOrFail($id);
            $recipe->ingredients()->delete();
            $recipe->steps()->delete();
            $recipe->delete();
            Log::info('Recipe deleted successfully', ['id' => $id]);
            return response()->json(null, 204);
        } catch (\Exception $e) {
            Log::error('Error deleting recipe', [
                'id' => $id,
                'message' => $e->getMessage()
            ]);
            return response()->json([
                'message' => 'An error occurred while deleting the recipe.',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}