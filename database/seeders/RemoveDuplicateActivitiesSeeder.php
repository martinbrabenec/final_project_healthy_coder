<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RemoveDuplicateActivitiesSeeder extends Seeder
{
    public function run()
    {
        $duplicates = DB::table('activities')
            ->select('name')
            ->groupBy('name')
            ->havingRaw('COUNT(*) > 1')
            ->get();

        $deletedCount = 0;

        foreach ($duplicates as $duplicate) {
            $latestId = DB::table('activities')
                ->where('name', $duplicate->name)
                ->latest('id')
                ->value('id');

            $deletedCount += DB::table('activities')
                ->where('name', $duplicate->name)
                ->where('id', '<>', $latestId)
                ->delete();
        }

        $this->command->info("Removed {$deletedCount} duplicate activities.");
    }
}