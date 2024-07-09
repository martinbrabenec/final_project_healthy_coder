<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Step 1: Modify the enum to include the new separate values
        DB::statement("ALTER TABLE activities MODIFY COLUMN body_zone ENUM('Posture & Sitting', 'Neck & Upper Body', 'Hand & Wrist', 'Head & Eyes', 'Lower Body', 'General') NOT NULL");

        // Step 2: Update existing records
        DB::table('activities')
            ->where('body_zone', 'Lower Body & General')
            ->update(['body_zone' => 'Lower Body']);

        // Note: You might want to manually review and update some records to 'General' if needed
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Revert the enum to its original state
        DB::statement("ALTER TABLE activities MODIFY COLUMN body_zone ENUM('Posture & Sitting', 'Neck & Upper Body', 'Hand & Wrist', 'Head & Eyes', 'Lower Body & General') NOT NULL");

        // Note: This doesn't restore the exact original state for records that were split
    }
};