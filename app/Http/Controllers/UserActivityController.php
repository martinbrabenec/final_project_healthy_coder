<?php

namespace App\Http\Controllers;

use App\Models\UserActivity;
use Illuminate\Http\Request;

class UserActivityController extends Controller
{
    public function index()
    {
        $userActivities = UserActivity::all();
        return view('user_activities.index', compact('userActivities'));
    }

    public function create()
    {
        return view('user_activities.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'user_id' => 'required',
            'activitie_id' => 'required',
            'is_fav' => 'required|boolean',
        ]);

        UserActivity::create($request->all());

        return redirect()->route('user_activities.index')->with('success', 'User Activity created successfully.');
    }

    public function show(UserActivity $userActivity)
    {
        return view('user_activities.show', compact('userActivity'));
    }

    public function edit(UserActivity $userActivity)
    {
        return view('user_activities.edit', compact('userActivity'));
    }

    public function update(Request $request, UserActivity $userActivity)
    {
        $request->validate([
            'user_id' => 'required',
            'activitie_id' => 'required',
            'is_fav' => 'required|boolean',
        ]);

        $userActivity->update($request->all());

        return redirect()->route('user_activities.index')->with('success', 'User Activity updated successfully.');
    }

    public function destroy(UserActivity $userActivity)
    {
        $userActivity->delete();

        return redirect()->route('user_activities.index')->with('success', 'User Activity deleted successfully.');
    }
}
