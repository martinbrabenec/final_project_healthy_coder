<?php
// app/Http/Controllers/DataController.php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Activity;
use App\Models\AlternativeActivity;
use App\Models\Recipe;

class DataController extends Controller
{
    public function index()
    {
        $activities = Activity::all();
        $alternativeActivities = AlternativeActivity::all();
        $recipes = Recipe::all();
        
        return response()->json([
            'activities' => $activities,
            'alternative_activities' => $alternativeActivities,
            'recipes' => $recipes,
        ]);
    }
}
