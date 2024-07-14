<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ActivitiesController extends Controller
{
    /**
     * Display a listing of the activities.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $activities = Activity::all();
        return view('activities.index', compact('activities'));
    }

    /**
     * Show the form for creating a new activity.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('activities.create');
    }

    /**
     * Store a newly created activity in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:255',
            'description' => 'required',
            'activity_type' => 'required|in:sport,coder',
            'body_zone' => 'required|in:Posture & Sitting,Neck & Upper Body,Hand & Wrist,Head & Eyes,Lower Body,General',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048'
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        $activity = new Activity($request->all());

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $name = time().'.'.$image->getClientOriginalExtension();
            $destinationPath = public_path('/ASSETS/activities');
            $image->move($destinationPath, $name);
            $activity->image = 'ASSETS/activities/'.$name;
        }

        $activity->save();

        return redirect()->route('activities.index')->with('success', 'Activity created successfully');
    }

    /**
     * Display the specified activity.
     *
     * @param  \App\Models\Activity  $activity
     * @return \Illuminate\Http\Response
     */
    public function show(Activity $activity)
    {
        return view('activities.show', compact('activity'));
    }

    /**
     * Show the form for editing the specified activity.
     *
     * @param  \App\Models\Activity  $activity
     * @return \Illuminate\Http\Response
     */
    public function edit(Activity $activity)
    {
        return view('activities.edit', compact('activity'));
    }

    /**
     * Update the specified activity in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Activity  $activity
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Activity $activity)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:255',
            'description' => 'required',
            'activity_type' => 'required|in:sport,coder',
            'body_zone' => 'required|in:Posture & Sitting,Neck & Upper Body,Hand & Wrist,Head & Eyes,Lower Body,General',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048'
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        $activity->fill($request->all());

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $name = time().'.'.$image->getClientOriginalExtension();
            $destinationPath = public_path('/ASSETS/activities');
            $image->move($destinationPath, $name);
            $activity->image = 'ASSETS/activities/'.$name;
        }

        $activity->save();

        return redirect()->route('activities.index')->with('success', 'Activity updated successfully');
    }

    /**
     * Remove the specified activity from storage.
     *
     * @param  \App\Models\Activity  $activity
     * @return \Illuminate\Http\Response
     */
    public function destroy(Activity $activity)
    {
        $activity->delete();
        return redirect()->route('activities.index')->with('success', 'Activity deleted successfully');
    }

    /**
     * Get activities by type (sport or coder).
     *
     * @param  string  $type
     * @return \Illuminate\Http\Response
     */
    public function getByType($type)
    {
        if (!in_array($type, ['sport', 'coder'])) {
            return response()->json(['error' => 'Invalid activity type'], 400);
        }

        $activities = Activity::where('activity_type', $type)->get();
        return response()->json($activities);
    }

    /**
     * Get activities by body zone.
     *
     * @param  string  $zone
     * @return \Illuminate\Http\Response
     */
    public function getByBodyZone($zone)
    {
        $validZones = ['Posture & Sitting', 'Neck & Upper Body', 'Hand & Wrist', 'Head & Eyes', 'Lower Body', 'General'];
        if (!in_array($zone, $validZones)) {
            return response()->json(['error' => 'Invalid body zone'], 400);
        }

        $activities = Activity::where('body_zone', $zone)->get();
        return response()->json($activities);
    }
}