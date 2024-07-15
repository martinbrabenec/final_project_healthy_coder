<?php
// app/Http/Controllers/SearchController.php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Activity;
use App\Models\AlternativeActivity;
use App\Models\Recipe;

class SearchController extends Controller
{
    public function search(Request $request)
    {
        $query = $request->input('query');
        
        $activities = Activity::where('name', 'LIKE', "%$query%")
                              ->orWhere('description', 'LIKE', "%$query%")
                              ->get();
                              
        $alternativeActivities = AlternativeActivity::where('alternative_activity', 'LIKE', "%$query%")
                                                     ->get();
                                                     
        $recipes = Recipe::where('name', 'LIKE', "%$query%")
                         ->get();
        
        return response()->json([
            'activities' => $activities,
            'alternative_activities' => $alternativeActivities,
            'recipes' => $recipes,
        ]);
    }
}
