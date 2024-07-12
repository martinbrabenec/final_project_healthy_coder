<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Recipe;

class RecipeController extends Controller
{
    public function index()
    {
        
        $recipes = Recipe::all();
        return response()->json($recipes, 200);
    }

    public function show($id)
    {
        
        $recipe = Recipe::findOrFail($id);
        return response()->json($recipe, 200);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|max:255',
            'photo' => 'required|url',
            // Add other fields as necessary
        ]);

        $recipe = Recipe::create($validatedData);
        return response()->json($recipe, 201);
    }

    public function update(Request $request, $id)
    {
        $recipe = Recipe::findOrFail($id);
        $validatedData = $request->validate([
            'name' => 'required|max:255',
            'photo' => 'required|url',
            // Add other fields as necessary
        ]);

        $recipe->update($validatedData);
        return response()->json($recipe, 200);
    }

    public function destroy($id)
    {
        $recipe = Recipe::findOrFail($id);
        $recipe->delete();
        return response()->json(null, 204);
    }
}
