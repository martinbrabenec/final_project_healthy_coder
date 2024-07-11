<?php
// routes/api.php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\ActivityController;
use App\Http\Controllers\Api\RecipeController;
use App\Http\Controllers\Api\IngredientController;
use App\Http\Controllers\Api\RecipeIngredientController;
use App\Http\Controllers\Api\RecipeStepController;
use App\Http\Controllers\Api\UserActivityController;
use App\Http\Controllers\Api\UserRecipeController;

// Remove the duplicate import statement for RecipeController

// User routes
Route::get('/users', [UserController::class, 'index']);
Route::get('/users/{id}', [UserController::class, 'show']);

// Activity routes
Route::get('/activities', [ActivityController::class, 'index']);
Route::get('/activities/{id}', [ActivityController::class, 'show']);

// Recipe routes
Route::get('/recipes', [RecipeController::class, 'index']);
Route::get('/recipes/{id}', [RecipeController::class, 'show']);

// Ingredient routes
Route::get('/ingredients', [IngredientController::class, 'index']);
Route::get('/ingredients/{id}', [IngredientController::class, 'show']);

// RecipeIngredient routes
Route::get('/recipe-ingredients', [RecipeIngredientController::class, 'index']);
Route::get('/recipe-ingredients/{id}', [RecipeIngredientController::class, 'show']);

// RecipeStep routes
Route::get('/recipe-steps', [RecipeStepController::class, 'index']);
Route::get('/recipe-steps/{id}', [RecipeStepController::class, 'show']);

// UserActivity routes
Route::get('/user-activities', [UserActivityController::class, 'index']);
Route::get('/user-activities/{id}', [UserActivityController::class, 'show']);

// UserRecipe routes
Route::get('/user-recipes', [UserRecipeController::class, 'index']);
Route::get('/user-recipes/{id}', [UserRecipeController::class, 'show']);

// Route::get('/test', function () {
//     return response()->json([
//         'message' => 'This is a test JSON response',
//         'status' => 'success'
//     ]);
// });

// Route::get('/users', [UserController::class, 'index']);
// Route::get('/activities', [ActivityController::class, 'index']);

// Route::get('/activities/{id}', [ActivityController::class, 'show']);


// Route::put('/activities/{id}', [ActivityController::class, 'update']);
// Route::delete('/activities/{id}', [ActivityController::class, 'destroy']);
// Route::post('/activities', [ActivityController::class, 'store']);