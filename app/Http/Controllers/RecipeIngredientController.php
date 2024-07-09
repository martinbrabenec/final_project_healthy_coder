<?php

namespace App\Http\Controllers;

use App\Models\RecipeIngredient;
use Illuminate\Http\Request;

class RecipeIngredientController extends Controller
{
    public function index()
    {
        $recipeIngredients = RecipeIngredient::all();
        return view('recipe_ingredients.index', compact('recipeIngredients'));
    }

    public function create()
    {
        return view('recipe_ingredients.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'recipe_id' => 'required',
            'ingredient_id' => 'required',
            'quantity' => 'required',
            'unit' => 'required',
        ]);

        RecipeIngredient::create($request->all());

        return redirect()->route('recipe_ingredients.index')->with('success', 'Recipe Ingredient created successfully.');
    }

    public function show(RecipeIngredient $recipeIngredient)
    {
        return view('recipe_ingredients.show', compact('recipeIngredient'));
    }

    public function edit(RecipeIngredient $recipeIngredient)
    {
        return view('recipe_ingredients.edit', compact('recipeIngredient'));
    }

    public function update(Request $request, RecipeIngredient $recipeIngredient)
    {
        $request->validate([
            'recipe_id' => 'required',
            'ingredient_id' => 'required',
            'quantity' => 'required',
            'unit' => 'required',
        ]);

        $recipeIngredient->update($request->all());

        return redirect()->route('recipe_ingredients.index')->with('success', 'Recipe Ingredient updated successfully.');
    }

    public function destroy(RecipeIngredient $recipeIngredient)
    {
        $recipeIngredient->delete();

        return redirect()->route('recipe_ingredients.index')->with('success', 'Recipe Ingredient deleted successfully.');
    }
}
