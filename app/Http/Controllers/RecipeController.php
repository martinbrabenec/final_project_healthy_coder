<?php

namespace App\Http\Controllers;

use App\Models\Recipe;
use App\Models\Ingredient;
use Illuminate\Http\Request;

class RecipeController extends Controller
{
    public function index()
    {
        $recipes = Recipe::all();
        return view('recipes.index', compact('recipes'));
    }

    public function create()
    {
        $ingredients = Ingredient::all();
        return view('recipes.create', compact('ingredients'));
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'is_vegetarian' => 'required|boolean',
            'photo' => 'nullable|image|max:2048',
            'ingredients' => 'required|array',
            'ingredients.*.id' => 'required|exists:ingredients,id',
            'ingredients.*.quantity' => 'required|numeric',
            'ingredients.*.unit' => 'required|string',
            'steps' => 'required|array',
            'steps.*.description' => 'required|string',
        ]);

        if ($request->hasFile('photo')) {
            $path = $request->file('photo')->store('recipes', 'public');
            $validated['photo'] = $path;
        }

        $recipe = Recipe::create($validated);

        foreach ($validated['ingredients'] as $ingredientData) {
            $recipe->ingredients()->attach($ingredientData['id'], [
                'quantity' => $ingredientData['quantity'],
                'unit' => $ingredientData['unit'],
            ]);
        }

        foreach ($validated['steps'] as $index => $step) {
            $recipe->steps()->create([
                'step_number' => $index + 1,
                'description' => $step['description'],
            ]);
        }

        return redirect()->route('recipes.show', $recipe)->with('success', 'Recipe created successfully');
    }

    public function show(Recipe $recipe)
    {
        $recipe->load('ingredients', 'steps');
        return view('recipes.show', compact('recipe'));
    }

    public function edit(Recipe $recipe)
    {
        $ingredients = Ingredient::all();
        $recipe->load('ingredients', 'steps');
        return view('recipes.edit', compact('recipe', 'ingredients'));
    }

    public function update(Request $request, Recipe $recipe)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'is_vegetarian' => 'required|boolean',
            'photo' => 'nullable|image|max:2048',
            'ingredients' => 'required|array',
            'ingredients.*.id' => 'required|exists:ingredients,id',
            'ingredients.*.quantity' => 'required|numeric',
            'ingredients.*.unit' => 'required|string',
            'steps' => 'required|array',
            'steps.*.description' => 'required|string',
        ]);

        if ($request->hasFile('photo')) {
            $path = $request->file('photo')->store('recipes', 'public');
            $validated['photo'] = $path;
        }

        $recipe->update($validated);

        $recipe->ingredients()->detach();
        foreach ($validated['ingredients'] as $ingredientData) {
            $recipe->ingredients()->attach($ingredientData['id'], [
                'quantity' => $ingredientData['quantity'],
                'unit' => $ingredientData['unit'],
            ]);
        }

        $recipe->steps()->delete();
        foreach ($validated['steps'] as $index => $step) {
            $recipe->steps()->create([
                'step_number' => $index + 1,
                'description' => $step['description'],
            ]);
        }

        return redirect()->route('recipes.show', $recipe)->with('success', 'Recipe updated successfully');
    }

    public function destroy(Recipe $recipe)
    {
        $recipe->ingredients()->detach();
        $recipe->steps()->delete();
        $recipe->delete();

        return redirect()->route('recipes.index')->with('success', 'Recipe deleted successfully');
    }
}