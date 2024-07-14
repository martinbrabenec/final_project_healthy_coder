<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Modify the existing 'body_zone' column to include new categories
        Schema::table('activities', function (Blueprint $table) {
            $table->enum('body_zone', ['Posture & Sitting', 'Neck & Upper Body', 'Hand & Wrist', 'Head & Eyes', 'Lower Body', 'General'])
                  ->default('General') // Set a default value to avoid issues during migration
                  ->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Revert the 'body_zone' column to the original categories
        Schema::table('activities', function (Blueprint $table) {
            $table->enum('body_zone', ['Posture & Sitting', 'Neck & Upper Body', 'Hand & Wrist', 'Head & Eyes', 'Lower Body & General'])
                  ->default('Lower Body & General') // Set a default value to avoid issues during migration
                  ->change();
        });
    }
};
