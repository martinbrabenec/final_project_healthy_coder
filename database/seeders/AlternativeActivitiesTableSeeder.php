<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AlternativeActivitiesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $activities = [
            ['Kombucha Kick', 'kombucha+health+benefits+and+brewing'],
            ['Cryo Blast', 'cryotherapy+benefits+and+risks'],
            ['Sensory Float', 'sensory+deprivation+tank+therapy'],
            ['Goat Zen', 'goat+yoga+benefits+and+classes'],
            ['Bug Bites', 'edible+insects+nutrition+and+recipes'],
            ['Natto Madness', 'natto+health+benefits+and+recipes'],
            ['Face Suction', 'facial+cupping+benefits+and+technique'],
            ['Kava Chill', 'kava+tea+effects+and+preparation'],
            ['Tree Hug Therapy', 'forest+bathing+shinrin+yoku+benefits'],
            ['Laugh It Off', 'laughter+yoga+benefits+and+classes'],
            ['Barefoot Buzz', 'earthing+grounding+health+benefits'],
            ['Bone Juice', 'bone+broth+benefits+and+recipe'],
            ['Sound Soak', 'sound+bath+meditation+benefits'],
            ['Seaweed Crunch', 'seaweed+snacks+nutrition+benefits'],
            ['Needle Nudge', 'acupuncture+benefits+and+treatment'],
            ['Switchel Swig', 'switchel+recipe+and+benefits'],
            ['Oil Swish', 'oil+pulling+benefits+and+technique'],
            ['Black Garlic Zing', 'black+garlic+health+benefits+uses'],
            ['Gua Sha Glow', 'gua+sha+facial+massage+benefits'],
            ['Spirulina Splash', 'spirulina+health+benefits+smoothie+recipes'],
            ['Float Zone', 'flotation+therapy+benefits+and+experience'],
            ['Durian Dare', 'durian+fruit+nutrition+and+taste'],
            ['Breath Buzz', 'breathwork+techniques+and+benefits'],
            ['Jun Jolt', 'jun+tea+benefits+and+brewing'],
            ['Frog Feast', 'frog+legs+cuisine+nutrition'],
            ['Silent Sweat', 'silent+disco+workout+classes'],
            ['Nooch Sprinkle', 'nutritional+yeast+benefits+and+uses'],
            ['Buteyko Boost', 'buteyko+breathing+technique+benefits'],
            ['Salt Cave Chill', 'halotherapy+salt+cave+benefits'],
            ['Jackfruit Jack', 'jackfruit+meat+substitute+recipes'],
            ['Ecstatic Groove', 'ecstatic+dance+benefits+and+classes'],
            ['Color Cure', 'color+therapy+benefits+and+techniques'],
            ['Noni Knockout', 'noni+fruit+health+benefits+and+uses'],
            ['Sky Yoga', 'aerial+yoga+benefits+and+classes'],
            ['Chaga Charge', 'chaga+mushroom+tea+benefits'],
            ['Earth Touch', 'grounding+therapy+earthing+benefits'],
            ['Bitter Bite', 'bitter+melon+health+benefits+recipes'],
            ['Infrared Infusion', 'infrared+sauna+benefits+and+risks'],
            ['Rice Glow', 'rice+bran+face+mask+benefits'],
            ['Body Reboot', 'feldenkrais+method+benefits+and+exercises'],
        ];

        foreach ($activities as $activity) {
            DB::table('alternative_activities')->insert([
                'alternative_activity' => $activity[0],
                'link_to_photo' => $activity[0] . '.jpg',
                'external_info' => 'https://www.google.com/search?q=' . $activity[1],
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
