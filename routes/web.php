<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ActivityController;
use App\Http\Controllers\RecipeController;
use App\Http\Controllers\IngredientController;
use App\Http\Controllers\RecipeStepController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/

Route::get('/', function () {
    return view('home');
});

// User routes
Route::resource('users', UserController::class)->except(['create', 'store']);

// Activity routes
Route::resource('activities', ActivityController::class);

// Recipe routes
Route::resource('recipes', RecipeController::class);

// Ingredient routes
Route::resource('ingredients', IngredientController::class);

// Recipe Step routes (nested under recipes)
Route::resource('recipes.steps', RecipeStepController::class)->except(['show']);
