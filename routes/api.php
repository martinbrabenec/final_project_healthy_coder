<?php
// routes/api.php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\ActivityController;

// Route::get('/test', function () {
//     return response()->json([
//         'message' => 'This is a test JSON response',
//         'status' => 'success'
//     ]);
// });

Route::get('/users', [UserController::class, 'index']);
Route::get('/activities', [ActivityController::class, 'index']);