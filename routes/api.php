<?php
// routes/api.php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/test', function () {
    return response()->json([
        'message' => 'This is a test JSON response',
        'status' => 'success'
    ]);
});
