<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\UserActivity;
use Illuminate\Http\Request;

class UserActivityController extends Controller
{
    public function index()
    {
        $userActivities = UserActivity::all();
        return response()->json($userActivities);
    }

    public function show($id)
    {
        $userActivity = UserActivity::findOrFail($id);
        return response()->json($userActivity);
    }
}