<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Activity;
use Illuminate\Http\Request;

class ActivityController extends Controller
{
    public function index()
    {
        $activities = Activity::all();
        return response()->json($activities);
    }

    public function show($id)
    {
        $activity = Activity::findOrFail($id);
        return response()->json($activity);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'activity_type' => 'required|in:sport,coder',
            'body_zone' => 'required|in:Posture & Sitting,Neck & Upper Body,Hand & Wrist,Head & Eyes,Lower Body,General',
            'image' => 'nullable|string|max:255',
        ]);

        $activity = Activity::create($validatedData);
        return response()->json($activity, 201);
    }

    public function update(Request $request, $id)
    {
        $activity = Activity::findOrFail($id);
        $validatedData = $request->validate([
            'name' => 'string|max:255',
            'description' => 'string',
            'activity_type' => 'in:sport,coder',
            'body_zone' => 'in:Posture & Sitting,Neck & Upper Body,Hand & Wrist,Head & Eyes,Lower Body,General',
            'image' => 'nullable|string|max:255',
        ]);

        $activity->update($validatedData);
        return response()->json($activity);
    }

    public function destroy($id)
    {
        $activity = Activity::findOrFail($id);
        $activity->delete();
        return response()->json(null, 204);
    }
}