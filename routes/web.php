<?php
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/

// Route::get('/', function () {
//     return view('main');
// });

Route::get('/{any}', function () {
    return view('main');
})->where('any', '.*');