<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AdditionalActivitiesSeeder extends Seeder
{
    public function run()
    {
        $activities = [
            [
                'name' => 'Tennis',
                'description' => 'Racket sport for 1-4 players, improves cardiovascular fitness, agility, and coordination',
                'activity_type' => 'sport',
                'body_zone' => 'General',
                'image' => 'ASSETS/activities/Tennis.jpg'
            ],
            [
                'name' => 'BasBaskketball',
                'description' => 'Team sport with 5 players per side, enhances cardiovascular fitness and teamwork',
                'activity_type' => 'sport',
                'body_zone' => 'General',
                'image' => 'ASSETS/activities/Basketball.jpg'
            ],
            [
                'name' => 'Rock Climbing',
                'description' => 'Climbing natural or artificial walls, enhances strength, flexibility, and problem-solving',
                'activity_type' => 'sport',
                'body_zone' => 'General',
                'image' => 'ASSETS/activities/Rock Climbing.jpg'
            ],
            [
                'name' => 'Soccer',
                'description' => 'Team sport with 11 players per side, improves cardiovascular health and agility',
                'activity_type' => 'sport',
                'body_zone' => 'General',
                'image' => 'ASSETS/activities/Soccer.jpg'
            ],
            [
                'name' => 'Volleyball',
                'description' => 'Team sport with 6 players per side, improves hand-eye coordination and agility',
                'activity_type' => 'sport',
                'body_zone' => 'General',
                'image' => 'ASSETS/activities/Volleyball.jpg'
            ],
            [
                'name' => 'Wrist Flexor Stretch Plus',
                'description' => 'Extended wrist flexor stretch to alleviate strain from prolonged typing',
                'activity_type' => 'coder',
                'body_zone' => 'Hand & Wrist',
                'image' => 'ASSETS/activities/Wrist Flexor Stretch Plus.jpg'
            ],
            [
                'name' => 'Neck Tension Reliever',
                'description' => 'Gentle neck stretches and rotations to relieve tension from prolonged screen viewing',
                'activity_type' => 'coder',
                'body_zone' => 'Neck & Upper Body',
                'image' => 'ASSETS/activities/Neck Tension Reliever.jpg'
            ],
            [
                'name' => 'Seated Spinal Decompression',
                'description' => 'Leaning back exercise to decompress spine after long sitting periods',
                'activity_type' => 'coder',
                'body_zone' => 'Posture & Sitting',
                'image' => 'ASSETS/activities/Seated Spinal Decompression.jpg'
            ],
            [
                'name' => 'Digital Eye Strain Relief',
                'description' => 'Eye exercise following the 20-20-20 rule to reduce screen-induced eye strain',
                'activity_type' => 'coder',
                'body_zone' => 'Head & Eyes',
                'image' => 'ASSETS/activities/Digital Eye Strain Relief.jpg'
            ],
            [
                'name' => 'DesDek Leg Lifts',
                'description' => 'Leg lifting exercise to improve circulation during long sitting periods',
                'activity_type' => 'coder',
                'body_zone' => 'Lower Body',
                'image' => 'ASSETS/activities/Desk Leg Lifts.jpg'
            ],
            [
                'name' => 'Keyboard Hand Stretch',
                'description' => 'Hand and finger stretches to prevent stiffness from repetitive typing motions',
                'activity_type' => 'coder',
                'body_zone' => 'Hand & Wrist',
                'image' => 'ASSETS/activities/Keyboard Hand Stretch.jpg'
            ],
    
                'name' => 'Upper Back Posture Corrector',
                'description' => 'Shoulder blade squeeze to counteract forward shoulder roll from computer use',
                'activity_type' => 'coder',
                'body_zone' => 'Neck & Upper Body',
                'image' => 'ASSETS/activities/Upper Back Posture Corrector.jpg'
            ],
            [
                'name' => 'Mindful Sitting Reset',
                'description' => 'Brief posture reset exercise to improve awareness and reduce slouching',
                'activity_type' => 'coder',
                'body_zone' => 'Posture & Sitting',
                'image' => 'ASSETS/activities/Mindful Sitting Reset.jpg'
            ],
            [
                'name' => 'Focus Shift Exercise',
                'description' => 'Eye focusing exercise to reduce strain and improve focus flexibility for screen workers',
                'activity_type' => 'coder',
                'body_zone' => 'Head & Eyes',
                'image' => 'ASSETS/activities/Focus Shift Exercise.jpg'
            ],
            [
                'name' => 'Seated Ankle Rotations',
                'description' => 'Ankle rotation exercise to improve circulation in lower legs during long sitting periods',
                'activity_type' => 'coder',
                'body_zone' => 'Lower Body',
                'image' => 'ASSETS/activities/Seated Ankle Rotations.jpg'
            ],
            [
                'name' => 'Finger Tapping Drill',
                'description' => 'Rapid finger tapping exercise to improve dexterity and prevent repetitive strain',
                'activity_type' => 'coder',
                'body_zone' => 'Hand & Wrist',
                'image' => 'ASSETS/activities/Finger Tapping Drill.jpg'
            ],
            [
                'name' => 'Shoulder Blade Squeeze',
                'description' => 'Exercise to improve posture and relieve upper back tension from prolonged sitting',
                'activity_type' => 'coder',
                'body_zone' => 'Neck & Upper Body',
                'image' => 'ASSETS/activities/Shoulder Blade Squeeze.jpg'
            ],
            [
                'name' => 'Chair Swivel Stretch',
                'description' => 'Seated twisting exercise to engage core and improve spinal mobility',
                'activity_type' => 'coder',
                'body_zone' => 'Posture & Sitting',
                'image' => 'ASSETS/activities/Chair Swivel Stretch.jpg'
            ],
            [
                'name' => 'Palming for Eye Relaxation',
                'description' => 'Covering eyes with palms to rest them from screen glare and reduce eye strain',
                'activity_type' => 'coder',
                'body_zone' => 'Head & Eyes',
                'image' => 'ASSETS/activities/Palming for Eye Relaxation.jpg'
            ],
            [
                'name' => 'Seated Leg Extensions',
                'description' => 'Leg extension exercise to engage quadriceps and improve blood flow while seated',
                'activity_type' => 'coder',
                'body_zone' => 'Lower Body',
                'image' => 'ASSETS/activities/Seated Leg Extensions.jpg'
            ],
        ];

        DB::table('activities')->insert($activities);
    }
}