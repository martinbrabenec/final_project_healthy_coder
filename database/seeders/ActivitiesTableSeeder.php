<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ActivitiesTableSeeder extends Seeder
{
    public function run()
    {
        $activities = [
            // Sport activities (all General)
            [
                'name' => 'Jogging',
                'description' => 'Running at a steady pace for exercise',
                'activity_type' => 'sport',
                'body_zone' => 'General',
                'image' => 'ASSETS/activities/Jogging.jpg'
            ],
            [
                'name' => 'Swimming',
                'description' => 'Moving through water using limbs',
                'activity_type' => 'sport',
                'body_zone' => 'General',
                'image' => 'ASSETS/activities/Swimming.jpg'
            ],
            [
                'name' => 'Cycling',
                'description' => 'Riding a bicycle for exercise',
                'activity_type' => 'sport',
                'body_zone' => 'General',
                'image' => 'ASSETS/activities/Cycling.jpg'
            ],
            [
                'name' => 'Yoga',
                'description' => 'Physical, mental, and spiritual practices',
                'activity_type' => 'sport',
                'body_zone' => 'General',
                'image' => 'ASSETS/activities/Yoga.jpg'
            ],
            [
                'name' => 'Weightlifting',
                'description' => 'Lifting weights for strength training',
                'activity_type' => 'sport',
                'body_zone' => 'General',
                'image' => 'ASSETS/activities/Weightlifting.jpg'
            ],
            [
                'name' => 'Pilates',
                'description' => 'System of exercises using special apparatus, designed to improve physical strength, flexibility, and posture',
                'activity_type' => 'sport',
                'body_zone' => 'General',
                'image' => 'ASSETS/activities/Pilates.jpg'
            ],
            [
                'name' => 'Hiking',
                'description' => 'Walking for long distances in countryside or wilderness',
                'activity_type' => 'sport',
                'body_zone' => 'General',
                'image' => 'ASSETS/activities/Hiking.jpg'
            ],
            [
                'name' => 'Jump Rope',
                'description' => 'Cardio exercise involving jumping over a rope swung so that it passes under the feet and over the head',
                'activity_type' => 'sport',
                'body_zone' => 'General',
                'image' => 'ASSETS/activities/Jump Rope.jpg'
            ],
            [
                'name' => 'Rowing Machine',
                'description' => 'Using a rowing machine for a full-body workout',
                'activity_type' => 'sport',
                'body_zone' => 'General',
                'image' => 'ASSETS/activities/Rowing.jpg'
            ],
            [
                'name' => 'Bodyweight Exercises',
                'description' => 'Strength training exercises that use the individual\'s own weight to provide resistance',
                'activity_type' => 'sport',
                'body_zone' => 'General',
                'image' => 'ASSETS/activities/Bodyweight Exercises.jpg'
            ],

            // Coder-specific activities
            [
                'name' => 'Wrist Flexor Stretch',
                'description' => 'Stretch to alleviate wrist strain from typing',
                'activity_type' => 'coder',
                'body_zone' => 'Hand & Wrist',
                'image' => 'ASSETS/activities/Wrist Stretch.jpg'
            ],
            [
                'name' => 'Finger Stretches',
                'description' => 'Exercises to prevent finger stiffness from keyboard use',
                'activity_type' => 'coder',
                'body_zone' => 'Hand & Wrist',
                'image' => 'ASSETS/activities/Finger Stretches.jpg'
            ],
            [
                'name' => 'Neck Tilt Stretches',
                'description' => 'Gentle neck stretches to relieve tension from long periods of screen viewing',
                'activity_type' => 'coder',
                'body_zone' => 'Neck & Upper Body',
                'image' => 'ASSETS/activities/Neck Side Stretch.jpg'
            ],
            [
                'name' => 'Shoulder Blade Squeeze',
                'description' => 'Exercise to improve posture and relieve upper back tension',
                'activity_type' => 'coder',
                'body_zone' => 'Neck & Upper Body',
                'image' => 'ASSETS/activities/Shoulder Shrugs.jpg'
            ],
            [
                'name' => 'Seated Spinal Twist',
                'description' => 'Twist to improve spinal mobility for those sitting for long periods',
                'activity_type' => 'coder',
                'body_zone' => 'Posture & Sitting',
                'image' => 'ASSETS/activities/Seated Torso Twist.jpg'
            ],
            [
                'name' => 'Proper Sitting Posture',
                'description' => 'Maintaining correct posture while seated to prevent back strain',
                'activity_type' => 'coder',
                'body_zone' => 'Posture & Sitting',
                'image' => 'ASSETS/activities/Correct Sitting Posture.jpg'
            ],
            [
                'name' => 'Eye Rolling Exercise',
                'description' => 'Eye movement to reduce eye strain from screen use',
                'activity_type' => 'coder',
                'body_zone' => 'Head & Eyes',
                'image' => 'ASSETS/activities/Nick Tit Stretch.jpg'
            ],
            [
                'name' => 'Palming for Eye Relaxation',
                'description' => 'Covering eyes with palms to rest them from screen glare',
                'activity_type' => 'coder',
                'body_zone' => 'Head & Eyes',
                'image' => 'ASSETS/activities/Upper Tap Stretch.jpg'
            ],
            [
                'name' => 'Ankle Rotations',
                'description' => 'Rotating ankles to improve circulation in lower extremities',
                'activity_type' => 'coder',
                'body_zone' => 'Lower Body',
                'image' => 'ASSETS/activities/Desk Push-Ups.jpg'
            ],
            [
                'name' => 'Seated Leg Raises',
                'description' => 'Lifting legs while seated to engage lower body muscles',
                'activity_type' => 'coder',
                'body_zone' => 'Lower Body',
                'image' => 'ASSETS/activities/Seated Cat-Cow Stretch.jpg'
            ],
        ];

        DB::table('activities')->insert($activities);
    }
}