<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\RecipeStep;
use Illuminate\Http\Request;

class RecipeStepController extends Controller
{
    public function index()
    {
        $recipeSteps = RecipeStep::all();
        return response()->json($recipeSteps);
    }

    public function show($id)
    {
        $recipeStep = RecipeStep::findOrFail($id);
        return response()->json($recipeStep);
    }
}