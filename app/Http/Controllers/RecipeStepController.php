<?php

namespace App\Http\Controllers;

use App\Models\RecipeStep;
use Illuminate\Http\Request;

class RecipeStepController extends Controller
{
    public function index()
    {
        $recipeSteps = RecipeStep::all();
        return view('recipe_steps.index', compact('recipeSteps'));
    }

    public function create()
    {
        return view('recipe_steps.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'recipe_id' => 'required',
            'step_number' => 'required',
            'description' => 'required',
        ]);

        RecipeStep::create($request->all());

        return redirect()->route('recipe_steps.index')->with('success', 'Recipe Step created successfully.');
    }

    public function show(RecipeStep $recipeStep)
    {
        return view('recipe_steps.show', compact('recipeStep'));
    }

    public function edit(RecipeStep $recipeStep)
    {
        return view('recipe_steps.edit', compact('recipeStep'));
    }

    public function update(Request $request, RecipeStep $recipeStep)
    {
        $request->validate([
            'recipe_id' => 'required',
            'step_number' => 'required',
            'description' => 'required',
        ]);

        $recipeStep->update($request->all());

        return redirect()->route('recipe_steps.index')->with('success', 'Recipe Step updated successfully.');
    }

    public function destroy(RecipeStep $recipeStep)
    {
        $recipeStep->delete();

        return redirect()->route('recipe_steps.index')->with('success', 'Recipe Step deleted successfully.');
    }
}
