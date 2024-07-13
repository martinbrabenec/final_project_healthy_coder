<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Recipe;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\ValidationException;

class RecipeController extends Controller
{
    public function store(Request $request)
    {
        Log::info('Incoming request data', $request->all());

        try {
            $validatedData = $request->validate([
                'name' => 'required|string|max:255',
                'photo' => 'nullable|string|max:255',
                'is_vegetarian' => 'required|boolean',
            ]);

            // Convert boolean to integer (0 or 1)
            $validatedData['is_vegetarian'] = $validatedData['is_vegetarian'] ? 1 : 0;

            $recipe = Recipe::create($validatedData);

            Log::info('Recipe created successfully', ['recipe' => $recipe]);
            return response()->json($recipe, 201);

        } catch (ValidationException $e) {
            Log::error('Validation failed', [
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
            ], 500);
        }
    }

    // ... other methods ...
}