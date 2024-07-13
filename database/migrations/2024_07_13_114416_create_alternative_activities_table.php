<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAlternativeActivitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('alternative_activities', function (Blueprint $table) {
            $table->id();
            $table->string('alternative_activity');
            $table->string('link_to_photo');
            $table->string('external_info');  // Defined as string
            $table->timestamps();

            // Indexes
            $table->index('alternative_activity');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('alternative_activities');
    }
}

