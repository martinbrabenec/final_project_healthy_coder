<?php

namespace App\Http\Controllers;

use App\Models\UserRecipe;
use Illuminate\Http\Request;

class UserRecipeController extends Controller
{
    public function index()
    {
        $userRecipes = UserRecipe::all();
        return view('user_recipes.index', compact('userRecipes'));
    }

    public function create()
    {
        return view('user_recipes.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'user_id' => 'required',
            'recipe_id' => 'required',
            'is_fav' => 'required|boolean',
            'user_rank' => 'required|numeric|min:1|max:5',
        ]);

        UserRecipe::create($request->all());

        return redirect()->route('user_recipes.index')->with('success', 'User Recipe created successfully.');
    }

    public function show(UserRecipe $userRecipe)
    {
        return view('user_recipes.show', compact('userRecipe'));
    }

    public function edit(UserRecipe $userRecipe)
    {
        return view('user_recipes.edit', compact('userRecipe'));
    }

    public function update(Request $request, UserRecipe $userRecipe)
    {
        $request->validate([
            'user_id' => 'required',
            'recipe_id' => 'required',
            'is_fav' => 'required|boolean',
            'user_rank' => 'required|numeric|min:1|max:5',
        ]);

        $userRecipe->update($request->all());

        return redirect()->route('user_recipes.index')->with('success', 'User Recipe updated successfully.');
    }

    public function destroy(UserRecipe $userRecipe)
    {
        $userRecipe->delete();

        return redirect()->route('user_recipes.index')->with('success', 'User Recipe deleted successfully.');
    }
}
