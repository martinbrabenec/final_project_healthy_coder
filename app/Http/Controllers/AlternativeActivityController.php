<?php

namespace App\Http\Controllers;

use App\Models\AlternativeActivity;
use Illuminate\Http\Request;

class AlternativeActivityController extends Controller
{
    // Get all alternative activities
    public function index()
    {
        return response()->json(AlternativeActivity::all(), 200);
    }

    // Get a specific alternative activity by ID
    public function show($id)
    {
        $activity = AlternativeActivity::find($id);
        if ($activity) {
            return response()->json($activity, 200);
        } else {
            return response()->json(['message' => 'Activity not found'], 404);
        }
    }

    // Create a new alternative activity
    public function store(Request $request)
    {
        $activity = AlternativeActivity::create($request->all());
        return response()->json($activity, 201);
    }

    // Update an existing alternative activity
    public function update(Request $request, $id)
    {
        $activity = AlternativeActivity::find($id);
        if ($activity) {
            $activity->update($request->all());
            return response()->json($activity, 200);
        } else {
            return response()->json(['message' => 'Activity not found'], 404);
        }
    }

    // Delete an alternative activity
    public function destroy($id)
    {
        $activity = AlternativeActivity::find($id);
        if ($activity) {
            $activity->delete();
            return response()->json(['message' => 'Activity deleted'], 200);
        } else {
            return response()->json(['message' => 'Activity not found'], 404);
        }
    }
}
