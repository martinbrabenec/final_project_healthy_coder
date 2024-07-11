<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\UserRecipe;
use Illuminate\Http\Request;

class UserRecipeController extends Controller
{
    public function index()
    {
        $userRecipes = UserRecipe::all();
        return response()->json($userRecipes);
    }

    public function show($id)
    {
        $userRecipe = UserRecipe::findOrFail($id);
        return response()->json($userRecipe);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'user_id' => 'required|exists:users,id',
            'recipe_id' => 'required|exists:recipes,id',
        ]);

        $userRecipe = UserRecipe::create($validatedData);
        return response()->json($userRecipe, 201);
    }

    public function update(Request $request, $id)
    {
        $userRecipe = UserRecipe::findOrFail($id);
        $validatedData = $request->validate([
            'user_id' => 'exists:users,id',
            'recipe_id' => 'exists:recipes,id',
        ]);

        $userRecipe->update($validatedData);
        return response()->json($userRecipe);
    }

    public function destroy($id)
    {
        $userRecipe = UserRecipe::findOrFail($id);
        $userRecipe->delete();
        return response()->json(null, 204);
    }
}