<?php

namespace App\Http\Controllers;

use App\Models\Recipe;
use App\Models\RecipeStep;
use Illuminate\Http\Request;

class RecipeStepController extends Controller
{
    public function index(Recipe $recipe)
    {
        $steps = $recipe->steps;
        return view('recipe_steps.index', compact('recipe', 'steps'));
    }

    public function create(Recipe $recipe)
    {
        return view('recipe_steps.create', compact('recipe'));
    }

    public function store(Request $request, Recipe $recipe)
    {
        $validated = $request->validate([
            'step_number' => 'required|integer|min:1',
            'description' => 'required|string',
        ]);

        $step = $recipe->steps()->create($validated);

        return redirect()->route('recipes.show', $recipe)->with('success', 'Recipe step added successfully');
    }

    public function edit(Recipe $recipe, RecipeStep $step)
    {
        return view('recipe_steps.edit', compact('recipe', 'step'));
    }

    public function update(Request $request, Recipe $recipe, RecipeStep $step)
    {
        $validated = $request->validate([
            'step_number' => 'required|integer|min:1',
            'description' => 'required|string',
        ]);

        $step->update($validated);

        return redirect()->route('recipes.show', $recipe)->with('success', 'Recipe step updated successfully');
    }

    public function destroy(Recipe $recipe, RecipeStep $step)
    {
        $step->delete();

        return redirect()->route('recipes.show', $recipe)->with('success', 'Recipe step deleted successfully');
    }
}