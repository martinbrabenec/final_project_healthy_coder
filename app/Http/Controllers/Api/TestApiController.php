<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

class TestApiController extends Controller
{
    public function test()
    {
        return response()->json([
            'message' => 'API is working correctly',
            'status' => 'success'
        ]);
    }
}
