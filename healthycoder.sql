-- MariaDB dump 10.19  Distrib 10.4.28-MariaDB, for osx10.10 (x86_64)
--
-- Host: localhost    Database: final_project
-- ------------------------------------------------------
-- Server version	10.4.28-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `activities`
--

DROP TABLE IF EXISTS `activities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `activities` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `activity_type` enum('sport','coder') NOT NULL,
  `body_zone` enum('Posture & Sitting','Neck & Upper Body','Hand & Wrist','Head & Eyes','Lower Body','General') NOT NULL DEFAULT 'General',
  `image` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=83 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `activities`
--

LOCK TABLES `activities` WRITE;
/*!40000 ALTER TABLE `activities` DISABLE KEYS */;
INSERT INTO `activities` VALUES (1,'Jogging','Running at a steady pace for exercise','sport','General','ASSETS/activities/Jogging.jpg',NULL,NULL),(2,'Swimming','Moving through water using limbs','sport','General','ASSETS/activities/Swimming.jpg',NULL,NULL),(3,'Cycling','Riding a bicycle for exercise','sport','General','ASSETS/activities/Cycling.jpg',NULL,NULL),(4,'Yoga','Physical, mental, and spiritual practices','sport','General','ASSETS/activities/Yoga.jpg',NULL,NULL),(5,'Weightlifting','Lifting weights for strength training','sport','General','ASSETS/activities/Weightlifting.jpg',NULL,NULL),(6,'Pilates','System of exercises using special apparatus, designed to improve physical strength, flexibility, and posture','sport','General','ASSETS/activities/Pilates.jpg',NULL,NULL),(7,'Hiking','Walking for long distances in countryside or wilderness','sport','General','ASSETS/activities/Hiking.jpg',NULL,NULL),(8,'Jump Rope','Cardio exercise involving jumping over a rope swung so that it passes under the feet and over the head','sport','General','ASSETS/activities/Jump Rope.jpg',NULL,NULL),(9,'Rowing Machine','Using a rowing machine for a full-body workout','sport','General','ASSETS/activities/Rowing.jpg',NULL,NULL),(10,'Bodyweight Exercises','Strength training exercises that use the individual\'s own weight to provide resistance','sport','General','ASSETS/activities/Bodyweight Exercises.jpg',NULL,NULL),(11,'Wrist Flexor Stretch','Stretch to alleviate wrist strain from typing','coder','Hand & Wrist','ASSETS/activities/Wrist Stretch.jpg',NULL,NULL),(12,'Finger Stretches','Exercises to prevent finger stiffness from keyboard use','coder','Hand & Wrist','ASSETS/activities/Finger Stretches.jpg',NULL,NULL),(13,'Neck Tilt Stretches','Gentle neck stretches to relieve tension from long periods of screen viewing','coder','Neck & Upper Body','ASSETS/activities/Neck Side Stretch.jpg',NULL,NULL),(15,'Seated Spinal Twist','Twist to improve spinal mobility for those sitting for long periods','coder','Posture & Sitting','ASSETS/activities/Seated Torso Twist.jpg',NULL,NULL),(16,'Proper Sitting Posture','Maintaining correct posture while seated to prevent back strain','coder','Posture & Sitting','ASSETS/activities/Correct Sitting Posture.jpg',NULL,NULL),(17,'Eye Rolling Exercise','Eye movement to reduce eye strain from screen use','coder','Head & Eyes','ASSETS/activities/Nick Tit Stretch.jpg',NULL,NULL),(19,'Ankle Rotations','Rotating ankles to improve circulation in lower extremities','coder','Lower Body','ASSETS/activities/Desk Push-Ups.jpg',NULL,NULL),(20,'Seated Leg Raises','Lifting legs while seated to engage lower body muscles','coder','Lower Body','ASSETS/activities/Seated Cat-Cow Stretch.jpg',NULL,NULL),(61,'Tennis','Racket sport for 1-4 players, improves cardiovascular fitness, agility, and coordination','sport','General','ASSETS/activities/Tennis.jpg',NULL,NULL),(62,'Basketball','Team sport with 5 players per side, enhances cardiovascular fitness and teamwork','sport','General','ASSETS/activities/Basketball.jpg',NULL,NULL),(63,'Rock Climbing','Climbing natural or artificial walls, enhances strength, flexibility, and problem-solving','sport','General','ASSETS/activities/Rock Climbing.jpg',NULL,NULL),(64,'Soccer','Team sport with 11 players per side, improves cardiovascular health and agility','sport','General','ASSETS/activities/Soccer.jpg',NULL,NULL),(65,'Volleyball','Team sport with 6 players per side, improves hand-eye coordination and agility','sport','General','ASSETS/activities/Volleyball.jpg',NULL,NULL),(66,'Wrist Flexor Stretch Plus','Extended wrist flexor stretch to alleviate strain from prolonged typing','coder','Hand & Wrist','ASSETS/activities/Wrist Flexor Stretch Plus.jpg',NULL,NULL),(67,'Neck Tension Reliever','Gentle neck stretches and rotations to relieve tension from prolonged screen viewing','coder','Neck & Upper Body','ASSETS/activities/Neck Tension Reliever.jpg',NULL,NULL),(68,'Seated Spinal Decompression','Leaning back exercise to decompress spine after long sitting periods','coder','Posture & Sitting','ASSETS/activities/Seated Spinal Decompression.jpg',NULL,NULL),(69,'Digital Eye Strain Relief','Eye exercise following the 20-20-20 rule to reduce screen-induced eye strain','coder','Head & Eyes','ASSETS/activities/Digital Eye Strain Relief.jpg',NULL,NULL),(70,'Desk Leg Lifts','Leg lifting exercise to improve circulation during long sitting periods','coder','Lower Body','ASSETS/activities/Desk Leg Lifts.jpg',NULL,NULL),(71,'Keyboard Hand Stretch','Hand and finger stretches to prevent stiffness from repetitive typing motions','coder','Hand & Wrist','ASSETS/activities/Keyboard Hand Stretch.jpg',NULL,NULL),(72,'Upper Back Posture Corrector','Shoulder blade squeeze to counteract forward shoulder roll from computer use','coder','Neck & Upper Body','ASSETS/activities/Upper Back Posture Corrector.jpg',NULL,NULL),(73,'Mindful Sitting Reset','Brief posture reset exercise to improve awareness and reduce slouching','coder','Posture & Sitting','ASSETS/activities/Mindful Sitting Reset.jpg',NULL,NULL),(74,'Focus Shift Exercise','Eye focusing exercise to reduce strain and improve focus flexibility for screen workers','coder','Head & Eyes','ASSETS/activities/Focus Shift Exercise.jpg',NULL,NULL),(75,'Seated Ankle Rotations','Ankle rotation exercise to improve circulation in lower legs during long sitting periods','coder','Lower Body','ASSETS/activities/Seated Ankle Rotations.jpg',NULL,NULL),(76,'Finger Tapping Drill','Rapid finger tapping exercise to improve dexterity and prevent repetitive strain','coder','Hand & Wrist','ASSETS/activities/Finger Tapping Drill.jpg',NULL,NULL),(77,'Shoulder Blade Squeeze','Exercise to improve posture and relieve upper back tension from prolonged sitting','coder','Neck & Upper Body','ASSETS/activities/Shoulder Blade Squeeze.jpg',NULL,NULL),(78,'Chair Swivel Stretch','Seated twisting exercise to engage core and improve spinal mobility','coder','Posture & Sitting','ASSETS/activities/Chair Swivel Stretch.jpg',NULL,NULL),(79,'Palming for Eye Relaxation','Covering eyes with palms to rest them from screen glare and reduce eye strain','coder','Head & Eyes','ASSETS/activities/Palming for Eye Relaxation.jpg',NULL,NULL),(80,'Seated Leg Extensions','Leg extension exercise to engage quadriceps and improve blood flow while seated','coder','Lower Body','ASSETS/activities/Seated Leg Extensions.jpg',NULL,NULL),(82,'Martin','ereere','coder','General','ASSETS/activities/martin.jpg','2024-07-16 05:12:17','2024-07-16 05:12:17');
/*!40000 ALTER TABLE `activities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `alternative_activities`
--

DROP TABLE IF EXISTS `alternative_activities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `alternative_activities` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `alternative_activity` varchar(255) NOT NULL,
  `link_to_photo` varchar(255) NOT NULL,
  `external_info` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `alternative_activities_alternative_activity_index` (`alternative_activity`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alternative_activities`
--

LOCK TABLES `alternative_activities` WRITE;
/*!40000 ALTER TABLE `alternative_activities` DISABLE KEYS */;
INSERT INTO `alternative_activities` VALUES (1,'Kombucha Kick','Kombucha Kick.jpg','https://www.google.com/search?q=kombucha+health+benefits+and+brewing','2024-07-13 10:11:27','2024-07-13 10:11:27'),(2,'Cryo Blast','Cryo Blast.jpg','https://www.google.com/search?q=cryotherapy+benefits+and+risks','2024-07-13 10:11:27','2024-07-13 10:11:27'),(3,'Sensory Float','Sensory Float.jpg','https://www.google.com/search?q=sensory+deprivation+tank+therapy','2024-07-13 10:11:27','2024-07-13 10:11:27'),(4,'Goat Zen','Goat Zen.jpg','https://www.google.com/search?q=goat+yoga+benefits+and+classes','2024-07-13 10:11:27','2024-07-13 10:11:27'),(5,'Bug Bites','Bug Bites.jpg','https://www.google.com/search?q=edible+insects+nutrition+and+recipes','2024-07-13 10:11:27','2024-07-13 10:11:27'),(6,'Natto Madness','Natto Madness.jpg','https://www.google.com/search?q=natto+health+benefits+and+recipes','2024-07-13 10:11:27','2024-07-13 10:11:27'),(7,'Face Suction','Face Suction.jpg','https://www.google.com/search?q=facial+cupping+benefits+and+technique','2024-07-13 10:11:27','2024-07-13 10:11:27'),(8,'Kava Chill','Kava Chill.jpg','https://www.google.com/search?q=kava+tea+effects+and+preparation','2024-07-13 10:11:27','2024-07-13 10:11:27'),(9,'Tree Hug Therapy','Tree Hug Therapy.jpg','https://www.google.com/search?q=forest+bathing+shinrin+yoku+benefits','2024-07-13 10:11:27','2024-07-13 10:11:27'),(10,'Laugh It Off','Laugh It Off.jpg','https://www.google.com/search?q=laughter+yoga+benefits+and+classes','2024-07-13 10:11:27','2024-07-13 10:11:27'),(11,'Barefoot Buzz','Barefoot Buzz.jpg','https://www.google.com/search?q=earthing+grounding+health+benefits','2024-07-13 10:11:27','2024-07-13 10:11:27'),(12,'Bone Juice','Bone Juice.jpg','https://www.google.com/search?q=bone+broth+benefits+and+recipe','2024-07-13 10:11:27','2024-07-13 10:11:27'),(13,'Sound Soak','Sound Soak.jpg','https://www.google.com/search?q=sound+bath+meditation+benefits','2024-07-13 10:11:27','2024-07-13 10:11:27'),(14,'Seaweed Crunch','Seaweed Crunch.jpg','https://www.google.com/search?q=seaweed+snacks+nutrition+benefits','2024-07-13 10:11:27','2024-07-13 10:11:27'),(15,'Needle Nudge','Needle Nudge.jpg','https://www.google.com/search?q=acupuncture+benefits+and+treatment','2024-07-13 10:11:27','2024-07-13 10:11:27'),(16,'Switchel Swig','Switchel Swig.jpg','https://www.google.com/search?q=switchel+recipe+and+benefits','2024-07-13 10:11:27','2024-07-13 10:11:27'),(17,'Oil Swish','Oil Swish.jpg','https://www.google.com/search?q=oil+pulling+benefits+and+technique','2024-07-13 10:11:27','2024-07-13 10:11:27'),(18,'Black Garlic Zing','Black Garlic Zing.jpg','https://www.google.com/search?q=black+garlic+health+benefits+uses','2024-07-13 10:11:27','2024-07-13 10:11:27'),(19,'Gua Sha Glow','Gua Sha Glow.jpg','https://www.google.com/search?q=gua+sha+facial+massage+benefits','2024-07-13 10:11:27','2024-07-13 10:11:27'),(20,'Spirulina Splash','Spirulina Splash.jpg','https://www.google.com/search?q=spirulina+health+benefits+smoothie+recipes','2024-07-13 10:11:27','2024-07-13 10:11:27'),(21,'Float Zone','Float Zone.jpg','https://www.google.com/search?q=flotation+therapy+benefits+and+experience','2024-07-13 10:11:27','2024-07-13 10:11:27'),(22,'Durian Dare','Durian Dare.jpg','https://www.google.com/search?q=durian+fruit+nutrition+and+taste','2024-07-13 10:11:27','2024-07-13 10:11:27'),(23,'Breath Buzz','Breath Buzz.jpg','https://www.google.com/search?q=breathwork+techniques+and+benefits','2024-07-13 10:11:27','2024-07-13 10:11:27'),(24,'Jun Jolt','Jun Jolt.jpg','https://www.google.com/search?q=jun+tea+benefits+and+brewing','2024-07-13 10:11:27','2024-07-13 10:11:27'),(25,'Frog Feast','Frog Feast.jpg','https://www.google.com/search?q=frog+legs+cuisine+nutrition','2024-07-13 10:11:27','2024-07-13 10:11:27'),(26,'Silent Sweat','Silent Sweat.jpg','https://www.google.com/search?q=silent+disco+workout+classes','2024-07-13 10:11:27','2024-07-13 10:11:27'),(27,'Nooch Sprinkle','Nooch Sprinkle.jpg','https://www.google.com/search?q=nutritional+yeast+benefits+and+uses','2024-07-13 10:11:27','2024-07-13 10:11:27'),(28,'Buteyko Boost','Buteyko Boost.jpg','https://www.google.com/search?q=buteyko+breathing+technique+benefits','2024-07-13 10:11:27','2024-07-13 10:11:27'),(29,'Salt Cave Chill','Salt Cave Chill.jpg','https://www.google.com/search?q=halotherapy+salt+cave+benefits','2024-07-13 10:11:27','2024-07-13 10:11:27'),(30,'Jackfruit Jack','Jackfruit Jack.jpg','https://www.google.com/search?q=jackfruit+meat+substitute+recipes','2024-07-13 10:11:27','2024-07-13 10:11:27'),(31,'Ecstatic Groove','Ecstatic Groove.jpg','https://www.google.com/search?q=ecstatic+dance+benefits+and+classes','2024-07-13 10:11:27','2024-07-13 10:11:27'),(32,'Color Cure','Color Cure.jpg','https://www.google.com/search?q=color+therapy+benefits+and+techniques','2024-07-13 10:11:27','2024-07-13 10:11:27'),(33,'Noni Knockout','Noni Knockout.jpg','https://www.google.com/search?q=noni+fruit+health+benefits+and+uses','2024-07-13 10:11:27','2024-07-13 10:11:27'),(34,'Sky Yoga','Sky Yoga.jpg','https://www.google.com/search?q=aerial+yoga+benefits+and+classes','2024-07-13 10:11:27','2024-07-13 10:11:27'),(35,'Chaga Charge','Chaga Charge.jpg','https://www.google.com/search?q=chaga+mushroom+tea+benefits','2024-07-13 10:11:27','2024-07-13 10:11:27'),(36,'Earth Touch','Earth Touch.jpg','https://www.google.com/search?q=grounding+therapy+earthing+benefits','2024-07-13 10:11:27','2024-07-13 10:11:27'),(37,'Bitter Bite','Bitter Bite.jpg','https://www.google.com/search?q=bitter+melon+health+benefits+recipes','2024-07-13 10:11:27','2024-07-13 10:11:27'),(38,'Infrared Infusion','Infrared Infusion.jpg','https://www.google.com/search?q=infrared+sauna+benefits+and+risks','2024-07-13 10:11:27','2024-07-13 10:11:27'),(39,'Rice Glow','Rice Glow.jpg','https://www.google.com/search?q=rice+bran+face+mask+benefits','2024-07-13 10:11:27','2024-07-13 10:11:27'),(40,'Body Reboot','Body Reboot.jpg','https://www.google.com/search?q=feldenkrais+method+benefits+and+exercises','2024-07-13 10:11:27','2024-07-13 10:11:27');
/*!40000 ALTER TABLE `alternative_activities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cache`
--

DROP TABLE IF EXISTS `cache`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cache`
--

LOCK TABLES `cache` WRITE;
/*!40000 ALTER TABLE `cache` DISABLE KEYS */;
INSERT INTO `cache` VALUES ('adc2f794f330432d6455da775db0bc5c','i:1;',1721131627),('adc2f794f330432d6455da775db0bc5c:timer','i:1721131627;',1721131627),('dfb33ab0c3cd9308adbd963be95d4d65','i:1;',1721148558),('dfb33ab0c3cd9308adbd963be95d4d65:timer','i:1721148558;',1721148558);
/*!40000 ALTER TABLE `cache` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cache_locks`
--

DROP TABLE IF EXISTS `cache_locks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cache_locks`
--

LOCK TABLES `cache_locks` WRITE;
/*!40000 ALTER TABLE `cache_locks` DISABLE KEYS */;
/*!40000 ALTER TABLE `cache_locks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ingredients`
--

DROP TABLE IF EXISTS `ingredients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ingredients` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ingredients`
--

LOCK TABLES `ingredients` WRITE;
/*!40000 ALTER TABLE `ingredients` DISABLE KEYS */;
INSERT INTO `ingredients` VALUES (1,'Quinoa'),(2,'Black Beans'),(3,'Olive Oil'),(4,'Lemon'),(5,'Dill'),(6,'Salmon'),(7,'Lentils'),(8,'Spinach'),(9,'Feta Cheese'),(10,'Chicken Breast'),(11,'Avocado'),(12,'Bread'),(13,'Sweet Potato'),(14,'Greek Yogurt'),(15,'Berries'),(16,'Cauliflower'),(17,'Carrots'),(18,'Curry Powder'),(19,'Tomatoes'),(20,'Olives'),(21,'Garlic'),(22,'Onion'),(23,'Salt'),(24,'Black Pepper'),(25,'Paprika'),(26,'Cumin'),(27,'Cinnamon'),(28,'Honey'),(29,'Coconut Oil'),(30,'Bell Peppers'),(31,'Chickpeas'),(32,'Coconut Milk'),(33,'Ginger'),(34,'Cod'),(35,'Red Pepper Flakes'),(36,'trtrr'),(37,'trtr'),(38,'ewew');
/*!40000 ALTER TABLE `ingredients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `job_batches`
--

DROP TABLE IF EXISTS `job_batches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job_batches`
--

LOCK TABLES `job_batches` WRITE;
/*!40000 ALTER TABLE `job_batches` DISABLE KEYS */;
/*!40000 ALTER TABLE `job_batches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jobs`
--

DROP TABLE IF EXISTS `jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) unsigned NOT NULL,
  `reserved_at` int(10) unsigned DEFAULT NULL,
  `available_at` int(10) unsigned NOT NULL,
  `created_at` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `jobs_queue_index` (`queue`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jobs`
--

LOCK TABLES `jobs` WRITE;
/*!40000 ALTER TABLE `jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'0001_01_01_000000_create_users_table',1),(2,'0001_01_01_000001_create_cache_table',1),(3,'0001_01_01_000002_create_jobs_table',1),(4,'2024_07_09_100247_update_users_table',1),(5,'2024_07_09_100421_create_activities_table',1),(6,'2024_07_09_100505_create_recipes_table',1),(7,'2024_07_09_100548_create_ingredients_table',1),(8,'2024_07_09_100617_create_recipe_ingredients_table',1),(9,'2024_07_09_100641_create_recipe_steps_table',1),(10,'2024_07_09_100701_create_user_activities_table',1),(11,'2024_07_09_100740_create_user_recipes_table',1),(12,'2024_07_09_132425_rename_activitie_id_to_activity_id_in_user_activities_table',1),(13,'2024_07_09_132729_split_lower_body_and_general_in_activities_table',1),(14,'2024_07_11_071428_create_personal_access_tokens_table',1),(15,'2024_07_12_135607_make_is_vegeterian_column_default_zero_in_recipes_table',1),(16,'2024_07_12_141503_add_two_factor_columns_to_users_table',1),(17,'2024_07_12_192705_modify_is_vegetarian_column_in_recipes_table',1),(18,'2024_07_13_114416_create_alternative_activities_table',2),(19,'2024_07_14_111040_update_body_zone_in_activities_table',3),(20,'2024_07_15_092830_update_users_table',4);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_reset_tokens`
--

DROP TABLE IF EXISTS `password_reset_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_reset_tokens`
--

LOCK TABLES `password_reset_tokens` WRITE;
/*!40000 ALTER TABLE `password_reset_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_reset_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) unsigned NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_access_tokens`
--

LOCK TABLES `personal_access_tokens` WRITE;
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `personal_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recipe_ingredients`
--

DROP TABLE IF EXISTS `recipe_ingredients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `recipe_ingredients` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `recipe_id` bigint(20) unsigned NOT NULL,
  `ingredient_id` bigint(20) unsigned NOT NULL,
  `quantity` varchar(255) NOT NULL,
  `unit` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `recipe_ingredients_recipe_id_foreign` (`recipe_id`),
  KEY `recipe_ingredients_ingredient_id_foreign` (`ingredient_id`),
  CONSTRAINT `recipe_ingredients_ingredient_id_foreign` FOREIGN KEY (`ingredient_id`) REFERENCES `ingredients` (`id`) ON DELETE CASCADE,
  CONSTRAINT `recipe_ingredients_recipe_id_foreign` FOREIGN KEY (`recipe_id`) REFERENCES `recipes` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=185 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recipe_ingredients`
--

LOCK TABLES `recipe_ingredients` WRITE;
/*!40000 ALTER TABLE `recipe_ingredients` DISABLE KEYS */;
INSERT INTO `recipe_ingredients` VALUES (15,3,7,'1','cup'),(16,3,17,'2',''),(17,3,22,'1',''),(18,3,19,'1','can'),(19,3,18,'1','tbsp'),(20,3,3,'2','tbsp'),(21,3,21,'2','cloves'),(22,4,10,'4','breasts'),(23,4,8,'2','cups'),(24,4,9,'1/2','cup'),(25,4,3,'2','tbsp'),(26,4,21,'2','cloves'),(27,4,23,'1','tsp'),(28,4,24,'1/2','tsp'),(44,8,16,'1','head'),(45,8,30,'1',''),(46,8,17,'1',''),(47,8,29,'2','tbsp'),(48,8,21,'2','cloves'),(49,8,33,'1','tbsp'),(50,8,23,'1/2','tsp'),(51,8,24,'1/4','tsp'),(52,9,31,'1','can'),(53,9,18,'2','tbsp'),(54,9,32,'1','can'),(55,9,30,'1',''),(56,9,17,'1',''),(57,9,21,'2','cloves'),(58,9,33,'1','tbsp'),(59,9,26,'1','tsp'),(60,10,34,'4','fillets'),(61,10,19,'1','cup'),(62,10,20,'1/2','cup'),(63,10,3,'2','tbsp'),(64,10,21,'2','cloves'),(65,10,4,'1',''),(66,10,23,'1/2','tsp'),(67,10,24,'1/4','tsp'),(93,2,6,'5','fillets'),(94,2,4,'1','piece'),(95,2,5,'2','tbsp'),(96,2,3,'2','tbsp'),(97,2,21,'2','cloves'),(98,2,23,'1/2','tsp'),(99,2,24,'1/4','tsp'),(163,7,14,'1','cup'),(164,7,15,'1/2','cup'),(165,7,28,'1','tbsp'),(166,7,27,'1/4','tsp'),(174,1,1,'1','cup'),(175,1,2,'1','can'),(176,1,3,'2','tbsp'),(177,1,4,'1','tee'),(178,1,19,'2','cup'),(179,1,21,'3','cloves'),(180,1,26,'1','tsp'),(183,28,37,'5','trtr'),(184,29,38,'4','wew');
/*!40000 ALTER TABLE `recipe_ingredients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recipe_steps`
--

DROP TABLE IF EXISTS `recipe_steps`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `recipe_steps` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `recipe_id` bigint(20) unsigned NOT NULL,
  `step_number` int(11) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `recipe_steps_recipe_id_foreign` (`recipe_id`),
  CONSTRAINT `recipe_steps_recipe_id_foreign` FOREIGN KEY (`recipe_id`) REFERENCES `recipes` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=186 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recipe_steps`
--

LOCK TABLES `recipe_steps` WRITE;
/*!40000 ALTER TABLE `recipe_steps` DISABLE KEYS */;
INSERT INTO `recipe_steps` VALUES (16,3,1,'Rinse lentils and set aside.'),(17,3,2,'In a large pot, heat olive oil over medium heat. Add diced onions and carrots. Sauté for 5 minutes.'),(18,3,3,'Add minced garlic and curry powder. Cook for another minute until fragrant.'),(19,3,4,'Add lentils, diced tomatoes, and 4 cups of water or vegetable broth. Bring to a boil.'),(20,3,5,'Reduce heat and simmer for 25-30 minutes, or until lentils are tender.'),(21,3,6,'Season with salt and pepper to taste.'),(22,3,7,'Serve hot, garnished with fresh herbs if desired.'),(23,4,1,'Preheat oven to 375°F (190°C).'),(24,4,2,'In a bowl, mix chopped spinach, crumbled feta, minced garlic, and a drizzle of olive oil.'),(25,4,3,'Cut a pocket into each chicken breast.'),(26,4,4,'Stuff each chicken breast with the spinach and feta mixture.'),(27,4,5,'Season the outside of the chicken with salt, pepper, and paprika.'),(28,4,6,'Heat olive oil in an oven-safe skillet over medium-high heat.'),(29,4,7,'Sear the chicken breasts for 3-4 minutes on each side until golden.'),(30,4,8,'Transfer the skillet to the preheated oven and bake for 15-20 minutes, until chicken is cooked through.'),(47,8,1,'Cut cauliflower into florets and pulse in a food processor until it resembles rice.'),(48,8,2,'Heat coconut oil in a large skillet over medium heat.'),(49,8,3,'Add minced garlic and grated ginger, sauté for 1 minute.'),(50,8,4,'Add diced bell peppers and carrots, cook for 3-4 minutes until slightly tender.'),(51,8,5,'Add the cauliflower rice to the skillet and stir fry for 5-7 minutes.'),(52,8,6,'Season with salt and pepper to taste.'),(53,8,7,'Serve hot, garnished with chopped green onions if desired.'),(54,9,1,'In a large pot, heat oil over medium heat. Add diced onions and sauté until translucent.'),(55,9,2,'Add minced garlic and grated ginger, cook for another minute.'),(56,9,3,'Stir in curry powder and cook until fragrant.'),(57,9,4,'Add diced carrots and bell peppers, cook for 5 minutes.'),(58,9,5,'Add chickpeas and coconut milk. Simmer for 15-20 minutes.'),(59,9,6,'Season with salt and pepper to taste.'),(60,9,7,'Serve hot over rice or with naan bread.'),(61,10,1,'Preheat oven to 400°F (200°C).'),(62,10,2,'In a baking dish, combine diced tomatoes, sliced olives, minced garlic, and olive oil.'),(63,10,3,'Season cod fillets with salt and pepper, then place them on top of the tomato mixture.'),(64,10,4,'Drizzle lemon juice over the fish.'),(65,10,5,'Bake for 15-20 minutes, until the fish flakes easily with a fork.'),(66,10,6,'Serve hot, spooning the tomato and olive mixture over the fish.'),(83,2,1,'Preheat grill to medium-high heat.'),(84,2,2,'In a small bowl, mix chopped dill, minced garlic, lemon zest, salt, and pepper.'),(85,2,3,'Brush salmon fillets with olive oil and rub the dill mixture all over.'),(86,2,4,'Place salmon on the grill, skin-side down. Cook for 3-5 minutes.'),(87,2,5,'Carefully flip the salmon and cook for another 3-4 minutes, or until it flakes easily with a fork.'),(88,2,6,'Remove from grill and let rest for 2 minutes.'),(89,2,7,'Squeeze fresh lemon juice over the salmon before serving.'),(162,7,1,'In a glass or bowl, start with a layer of Greek yogurt.'),(163,7,2,'Add a layer of mixed berries on top of the yogurt.'),(164,7,3,'Drizzle honey over the berries.'),(165,7,4,'Repeat the layers until the glass is full.'),(166,7,5,'Top with a sprinkle of cinnamon and serve immediately.'),(175,1,1,'Rinse quinoa thoroughly under cold water.'),(176,1,2,'Cook quinoa according to package instructions. Let it cool.'),(177,1,3,'Drain and rinse black beans.'),(178,1,4,'Chop tomatoes & mince garlic.'),(179,1,5,'In large bowl, combine cooled quinoa, black beans, and chopped tomatoes.'),(180,1,6,'In a small bowl, whisk together olive oil, lemon juice, minced garlic, and cumin.'),(181,1,7,'Pour the dressing over the quinoa mixture and toss to combine.'),(182,1,8,'Season with salt and pepper to taste. Serve chilled or at room temperature.'),(184,28,1,'trtr rtrrtr r trtrtr'),(185,29,1,'ewew');
/*!40000 ALTER TABLE `recipe_steps` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recipes`
--

DROP TABLE IF EXISTS `recipes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `recipes` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `is_vegetarian` tinyint(1) NOT NULL DEFAULT 0,
  `photo` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recipes`
--

LOCK TABLES `recipes` WRITE;
/*!40000 ALTER TABLE `recipes` DISABLE KEYS */;
INSERT INTO `recipes` VALUES (1,'Quinoa Black Bean Salad',1,'Quinoa Black Bean Salad.jpg',NULL,NULL),(2,'Grilled Salmon with Lemon and Dill',0,'Grilled Salmon with Lemon and Dill.jpg',NULL,NULL),(3,'Vegetarian Lentil Soup',1,'Vegetarian Lentil Soup.jpg',NULL,NULL),(4,'Spinach and Feta Stuffed Chicken',0,'Spinach and Feta Stuffed Chicken Breast.jpg',NULL,NULL),(7,'Greek Yogurt Parfait',1,'Greek Yogurt Parfait with Berries and Granola.jpg',NULL,NULL),(8,'Cauliflower Rice Stir Fry',1,'Cauliflower Rice Stir Fry.jpg',NULL,NULL),(9,'Chickpea Veggie Curry',1,'Chickpea and Vegetable Curry.jpg',NULL,NULL),(10,'Baked Cod with Tomatoes and Olives',0,'Baked Cod with Tomatoes and Olives.jpg',NULL,NULL),(28,'trtr',1,'trtr.jpg','2024-07-16 09:36:17','2024-07-16 09:36:17'),(29,'sdsds',0,'sdsds.ss','2024-07-16 18:40:13','2024-07-16 18:40:13');
/*!40000 ALTER TABLE `recipes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) unsigned DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sessions_user_id_index` (`user_id`),
  KEY `sessions_last_activity_index` (`last_activity`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` VALUES ('2Y6dCpHS0Lk3woK2p6SZPxmpjZveZnoeQiMQbPWF',NULL,'127.0.0.1','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36','YTozOntzOjY6Il90b2tlbiI7czo0MDoiM2NUdHJ4NlBEUGE4d1JGUDdaWGV1c1NFcWxHMG1qcFdhajFiSExMRCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NjA6Imh0dHA6Ly93d3cudGhlaGVhbHRoeWNvZGVyLnRlc3QvQVNTRVRTL2FjdGl2aXRpZXMvbWFydGluLmpwZyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=',1721206469),('5qFxHq0HiLmr33OOEhx1KOhsGnCP6m0yOS3h2oRp',NULL,'127.0.0.1','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36','YTozOntzOjY6Il90b2tlbiI7czo0MDoicjR6VVFDaERJWElnZUtzNlhDS3k0WmxLSlowdzNpWjIxVU9XVWU3WiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NjA6Imh0dHA6Ly93d3cudGhlaGVhbHRoeWNvZGVyLnRlc3QvQVNTRVRTL2FjdGl2aXRpZXMvbWFydGluLmpwZyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=',1721196022),('L64Y7jL6XZC02RrkP47KUkJkpSfwVKy6AghSa14v',NULL,'127.0.0.1','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36','YTozOntzOjY6Il90b2tlbiI7czo0MDoiQzhEVHNCTXl2Rk5Ud0xyZ0x1R3ZjVzVXUllHUHRvMmtYMXZWc1lWeCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=',1721195075);
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_activities`
--

DROP TABLE IF EXISTS `user_activities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_activities` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) unsigned NOT NULL,
  `activity_id` bigint(20) unsigned NOT NULL,
  `is_fav` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_activities_user_id_foreign` (`user_id`),
  KEY `user_activities_activitie_id_foreign` (`activity_id`),
  CONSTRAINT `user_activities_activitie_id_foreign` FOREIGN KEY (`activity_id`) REFERENCES `activities` (`id`) ON DELETE CASCADE,
  CONSTRAINT `user_activities_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_activities`
--

LOCK TABLES `user_activities` WRITE;
/*!40000 ALTER TABLE `user_activities` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_activities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_recipes`
--

DROP TABLE IF EXISTS `user_recipes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_recipes` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) unsigned NOT NULL,
  `recipe_id` bigint(20) unsigned NOT NULL,
  `is_fav` tinyint(1) NOT NULL,
  `user_rank` double NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_recipes_user_id_foreign` (`user_id`),
  KEY `user_recipes_recipe_id_foreign` (`recipe_id`),
  CONSTRAINT `user_recipes_recipe_id_foreign` FOREIGN KEY (`recipe_id`) REFERENCES `recipes` (`id`) ON DELETE CASCADE,
  CONSTRAINT `user_recipes_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_recipes`
--

LOCK TABLES `user_recipes` WRITE;
/*!40000 ALTER TABLE `user_recipes` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_recipes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `two_factor_secret` text DEFAULT NULL,
  `two_factor_recovery_codes` text DEFAULT NULL,
  `two_factor_confirmed_at` timestamp NULL DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Martin brabenec','mbrab@brab.cz',NULL,'$2y$12$H6GJv1SQnODpS2CyCOFki.OVsNxhOg8Hb3VAqmblZOsFgXi0kjgOm',NULL,NULL,NULL,NULL,'2024-07-15 07:43:39','2024-07-15 07:43:39'),(2,'Martin','mbrab11@brab.cz',NULL,'$2y$12$RFqKiX.PQ0DHXfo3IuZmCeCI5ZDk4ebRkqfA2GXgyYM0ANGdf6InS',NULL,NULL,NULL,NULL,'2024-07-15 09:42:35','2024-07-15 09:42:35');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-17 11:24:16
