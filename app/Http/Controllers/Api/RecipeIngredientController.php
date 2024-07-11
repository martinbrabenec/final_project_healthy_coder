<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\RecipeIngredient;

class RecipeIngredientController extends Controller
{
    public function index()
    {
        $recipeIngredients = RecipeIngredient::all();
        return response()->json($recipeIngredients);
    }

    public function show($id)
    {
        $recipeIngredient = RecipeIngredient::findOrFail($id);
        return response()->json($recipeIngredient);
    }
}