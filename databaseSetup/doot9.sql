-- MySQL dump 10.13  Distrib 8.0.22, for Linux (x86_64)
--
-- Host: localhost    Database: attendance
-- ------------------------------------------------------
-- Server version	8.0.22-0ubuntu0.20.04.3

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Temporary view structure for view `attendance_summary`
--

DROP TABLE IF EXISTS `attendance_summary`;
/*!50001 DROP VIEW IF EXISTS `attendance_summary`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `attendance_summary` AS SELECT 
 1 AS `usn`,
 1 AS `section`,
 1 AS `ATCI`,
 1 AS `ME`,
 1 AS `CNS`,
 1 AS `ADP`,
 1 AS `UNIX`,
 1 AS `EVS`,
 1 AS `DBMS`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `attendancelog`
--

DROP TABLE IF EXISTS `attendancelog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `attendancelog` (
  `USN` varchar(10) DEFAULT NULL,
  `TIMESTAMP` datetime NOT NULL,
  `SUBJECT` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `attendancelog`
--

LOCK TABLES `attendancelog` WRITE;
/*!40000 ALTER TABLE `attendancelog` DISABLE KEYS */;
INSERT INTO `attendancelog` VALUES ('1bi18cs1','2020-12-19 20:23:19','ATCI'),('1bi18cs1','2020-12-19 20:23:19','ADP'),('1bi18cs1','2020-12-19 20:23:20','CNS'),('1bi18cs1','2020-12-19 20:23:20','DBMS'),('1bi18cs1','2020-12-19 20:23:20','ME'),('1bi18cs2','2020-12-19 20:23:20','ATCI'),('1bi18cs2','2020-12-19 20:23:20','ADP'),('1bi18cs2','2020-12-19 20:23:20','CNS'),('1bi18cs2','2020-12-19 20:23:21','DBMS'),('1bi18cs2','2020-12-19 20:23:21','ME'),('1bi18cs3','2020-12-19 20:23:21','ATCI'),('1bi18cs3','2020-12-19 20:23:21','ADP'),('1bi18cs3','2020-12-19 20:23:21','CNS'),('1bi18cs3','2020-12-19 20:23:22','DBMS'),('1bi18cs3','2020-12-19 20:23:22','ME'),('1bi18cs1','2020-12-19 22:46:38','ATCI'),('1bi18cs1','2020-12-19 22:46:39','ADP'),('1bi18cs1','2020-12-19 22:46:39','CNS'),('1bi18cs1','2020-12-19 22:46:39','DBMS'),('1bi18cs1','2020-12-19 22:46:39','ME'),('1bi18cs2','2020-12-19 22:46:39','ATCI'),('1bi18cs2','2020-12-19 22:46:39','ADP'),('1bi18cs2','2020-12-19 22:46:39','CNS'),('1bi18cs2','2020-12-19 22:46:39','DBMS'),('1bi18cs2','2020-12-19 22:46:40','ME'),('1bi18cs3','2020-12-19 22:46:40','ATCI'),('1bi18cs3','2020-12-19 22:46:40','ADP'),('1bi18cs3','2020-12-19 22:46:40','CNS'),('1bi18cs1','2020-12-19 23:00:19','ATCI'),('1bi18cs1','2020-12-19 23:00:19','ADP'),('1bi18cs1','2020-12-19 23:00:19','CNS'),('1bi18cs1','2020-12-19 23:00:19','DBMS'),('1bi18cs1','2020-12-19 23:00:19','ME'),('1bi18cs2','2020-12-19 23:00:19','ATCI'),('1bi18cs2','2020-12-19 23:00:19','ADP'),('1bi18cs2','2020-12-19 23:00:19','CNS'),('1bi18cs2','2020-12-19 23:00:19','DBMS'),('1bi18cs2','2020-12-19 23:00:20','ME'),('1bi18cs3','2020-12-19 23:00:20','ATCI'),('1bi18cs3','2020-12-19 23:00:20','ADP'),('1bi18cs3','2020-12-19 23:00:20','CNS'),('1bi18cs3','2020-12-19 23:00:20','DBMS'),('1bi18cs3','2020-12-19 23:00:20','ME'),('1bi18cs4','2020-12-19 23:00:20','ATCI'),('1bi18cs4','2020-12-19 23:00:20','ADP'),('1bi18cs4','2020-12-19 23:00:21','CNS'),('1bi18cs4','2020-12-19 23:00:21','DBMS'),('1bi18cs4','2020-12-19 23:00:21','ME'),('1bi18cs5','2020-12-19 23:00:21','ATCI'),('1bi18cs5','2020-12-19 23:00:21','ADP'),('1bi18cs5','2020-12-19 23:00:21','CNS'),('1bi18cs5','2020-12-19 23:00:21','DBMS'),('1bi18cs5','2020-12-19 23:00:21','ME'),('1bi18cs6','2020-12-19 23:00:21','ATCI'),('1bi18cs6','2020-12-19 23:00:21','ADP'),('1bi18cs6','2020-12-19 23:00:22','CNS'),('1bi18cs6','2020-12-19 23:00:22','DBMS'),('1bi18cs6','2020-12-19 23:00:22','ME'),('1bi18cs7','2020-12-19 23:00:22','ATCI'),('1bi18cs7','2020-12-19 23:00:22','ADP'),('1bi18cs7','2020-12-19 23:00:22','CNS'),('1bi18cs7','2020-12-19 23:00:22','DBMS'),('1bi18cs7','2020-12-19 23:00:22','ME'),('1bi18cs8','2020-12-19 23:00:22','ATCI'),('1bi18cs8','2020-12-19 23:00:23','ADP'),('1bi18cs8','2020-12-19 23:00:23','CNS'),('1bi18cs8','2020-12-19 23:00:23','DBMS'),('1bi18cs8','2020-12-19 23:00:23','ME'),('1bi18cs9','2020-12-19 23:00:23','ATCI'),('1bi18cs9','2020-12-19 23:00:23','ADP'),('1bi18cs9','2020-12-19 23:00:23','CNS'),('1bi18cs9','2020-12-19 23:00:23','DBMS'),('1bi18cs9','2020-12-19 23:00:23','ME'),('1bi18cs10','2020-12-19 23:00:23','ATCI'),('1bi18cs10','2020-12-19 23:00:24','ADP'),('1bi18cs10','2020-12-19 23:00:24','CNS'),('1bi18cs10','2020-12-19 23:00:24','DBMS'),('1bi18cs10','2020-12-19 23:00:24','ME'),('1bi18cs11','2020-12-19 23:00:24','ATCI'),('1bi18cs11','2020-12-19 23:00:24','ADP'),('1bi18cs11','2020-12-19 23:00:24','CNS'),('1bi18cs11','2020-12-19 23:00:24','DBMS'),('1bi18cs11','2020-12-19 23:00:24','ME'),('1bi18cs12','2020-12-19 23:00:24','ATCI'),('1bi18cs12','2020-12-19 23:00:25','ADP'),('1bi18cs12','2020-12-19 23:00:25','CNS'),('1bi18cs12','2020-12-19 23:00:25','DBMS'),('1bi18cs12','2020-12-19 23:00:25','ME'),('1bi18cs13','2020-12-19 23:00:25','ATCI'),('1bi18cs13','2020-12-19 23:00:25','ADP'),('1bi18cs13','2020-12-19 23:00:25','CNS'),('1bi18cs13','2020-12-19 23:00:25','DBMS'),('1bi18cs13','2020-12-19 23:00:25','ME'),('1bi18cs14','2020-12-19 23:00:26','ATCI'),('1bi18cs14','2020-12-19 23:00:26','ADP'),('1bi18cs14','2020-12-19 23:00:26','CNS'),('1bi18cs14','2020-12-19 23:00:26','DBMS'),('1bi18cs14','2020-12-19 23:00:26','ME'),('1bi18cs15','2020-12-19 23:00:26','ATCI'),('1bi18cs15','2020-12-19 23:00:26','ADP'),('1bi18cs15','2020-12-19 23:00:26','CNS'),('1bi18cs15','2020-12-19 23:00:26','DBMS'),('1bi18cs15','2020-12-19 23:00:27','ME'),('1bi18cs16','2020-12-19 23:00:27','ATCI'),('1bi18cs16','2020-12-19 23:00:27','ADP'),('1bi18cs16','2020-12-19 23:00:27','CNS'),('1bi18cs16','2020-12-19 23:00:27','DBMS'),('1bi18cs16','2020-12-19 23:00:27','ME'),('1bi18cs17','2020-12-19 23:00:27','ATCI'),('1bi18cs17','2020-12-19 23:00:27','ADP'),('1bi18cs17','2020-12-19 23:00:27','CNS'),('1bi18cs17','2020-12-19 23:00:27','DBMS'),('1bi18cs17','2020-12-19 23:00:28','ME'),('1bi18cs18','2020-12-19 23:00:28','ATCI'),('1bi18cs18','2020-12-19 23:00:28','ADP'),('1bi18cs18','2020-12-19 23:00:28','CNS'),('1bi18cs18','2020-12-19 23:00:28','DBMS'),('1bi18cs18','2020-12-19 23:00:28','ME'),('1bi18cs19','2020-12-19 23:00:28','ATCI'),('1bi18cs19','2020-12-19 23:00:28','ADP'),('1bi18cs19','2020-12-19 23:00:28','CNS'),('1bi18cs19','2020-12-19 23:00:28','DBMS'),('1bi18cs19','2020-12-19 23:00:29','ME'),('1bi18cs20','2020-12-19 23:00:29','ATCI'),('1bi18cs20','2020-12-19 23:00:29','ADP'),('1bi18cs20','2020-12-19 23:00:29','CNS'),('1bi18cs20','2020-12-19 23:00:29','DBMS'),('1bi18cs20','2020-12-19 23:00:29','ME'),('1bi18cs21','2020-12-19 23:00:29','ATCI'),('1bi18cs21','2020-12-19 23:00:29','ADP'),('1bi18cs21','2020-12-19 23:00:29','CNS'),('1bi18cs21','2020-12-19 23:00:29','DBMS'),('1bi18cs21','2020-12-19 23:00:30','ME'),('1bi18cs22','2020-12-19 23:00:30','ATCI'),('1bi18cs22','2020-12-19 23:00:30','ADP'),('1bi18cs22','2020-12-19 23:00:30','CNS'),('1bi18cs22','2020-12-19 23:00:30','DBMS'),('1bi18cs22','2020-12-19 23:00:30','ME'),('1bi18cs23','2020-12-19 23:00:30','ATCI'),('1bi18cs23','2020-12-19 23:00:31','ADP'),('1bi18cs23','2020-12-19 23:00:31','CNS'),('1bi18cs23','2020-12-19 23:00:31','DBMS'),('1bi18cs23','2020-12-19 23:00:31','ME'),('1bi18cs24','2020-12-19 23:00:31','ATCI'),('1bi18cs24','2020-12-19 23:00:31','ADP'),('1bi18cs24','2020-12-19 23:00:31','CNS'),('1bi18cs24','2020-12-19 23:00:31','DBMS'),('1bi18cs24','2020-12-19 23:00:31','ME'),('1bi18cs25','2020-12-19 23:00:31','ATCI'),('1bi18cs25','2020-12-19 23:00:31','ADP'),('1bi18cs25','2020-12-19 23:00:31','CNS'),('1bi18cs25','2020-12-19 23:00:32','DBMS'),('1bi18cs25','2020-12-19 23:00:32','ME'),('1bi18cs26','2020-12-19 23:00:32','ATCI'),('1bi18cs26','2020-12-19 23:00:32','ADP'),('1bi18cs26','2020-12-19 23:00:32','CNS'),('1bi18cs26','2020-12-19 23:00:32','DBMS'),('1bi18cs26','2020-12-19 23:00:32','ME'),('1bi18cs27','2020-12-19 23:00:32','ATCI'),('1bi18cs27','2020-12-19 23:00:32','ADP'),('1bi18cs27','2020-12-19 23:00:33','CNS'),('1bi18cs27','2020-12-19 23:00:33','DBMS'),('1bi18cs27','2020-12-19 23:00:33','ME'),('1bi18cs28','2020-12-19 23:00:33','ATCI'),('1bi18cs28','2020-12-19 23:00:33','ADP'),('1bi18cs28','2020-12-19 23:00:33','CNS'),('1bi18cs28','2020-12-19 23:00:33','DBMS'),('1bi18cs28','2020-12-19 23:00:33','ME'),('1bi18cs29','2020-12-19 23:00:33','ATCI'),('1bi18cs29','2020-12-19 23:00:33','ADP'),('1bi18cs29','2020-12-19 23:00:33','CNS'),('1bi18cs29','2020-12-19 23:00:34','DBMS'),('1bi18cs29','2020-12-19 23:00:34','ME'),('1bi18cs30','2020-12-19 23:00:34','ATCI'),('1bi18cs30','2020-12-19 23:00:34','ADP'),('1bi18cs30','2020-12-19 23:00:34','CNS'),('1bi18cs30','2020-12-19 23:00:34','DBMS'),('1bi18cs30','2020-12-19 23:00:34','ME'),('1bi18cs31','2020-12-19 23:00:34','ATCI'),('1bi18cs31','2020-12-19 23:00:34','ADP'),('1bi18cs31','2020-12-19 23:00:34','CNS'),('1bi18cs31','2020-12-19 23:00:34','DBMS'),('1bi18cs31','2020-12-19 23:00:35','ME'),('1bi18cs32','2020-12-19 23:00:35','ATCI'),('1bi18cs32','2020-12-19 23:00:35','ADP'),('1bi18cs32','2020-12-19 23:00:35','CNS'),('1bi18cs32','2020-12-19 23:00:35','DBMS'),('1bi18cs32','2020-12-19 23:00:35','ME'),('1bi18cs33','2020-12-19 23:00:35','ATCI'),('1bi18cs33','2020-12-19 23:00:35','ADP'),('1bi18cs33','2020-12-19 23:00:35','CNS'),('1bi18cs33','2020-12-19 23:00:36','DBMS'),('1bi18cs33','2020-12-19 23:00:36','ME'),('1bi18cs34','2020-12-19 23:00:36','ATCI'),('1bi18cs34','2020-12-19 23:00:36','ADP'),('1bi18cs34','2020-12-19 23:00:36','CNS'),('1bi18cs34','2020-12-19 23:00:36','DBMS'),('1bi18cs34','2020-12-19 23:00:36','ME'),('1bi18cs35','2020-12-19 23:00:36','ATCI'),('1bi18cs35','2020-12-19 23:00:36','ADP'),('1bi18cs35','2020-12-19 23:00:36','CNS'),('1bi18cs35','2020-12-19 23:00:36','DBMS'),('1bi18cs35','2020-12-19 23:00:36','ME'),('1bi18cs36','2020-12-19 23:00:37','ATCI'),('1bi18cs36','2020-12-19 23:00:37','ADP'),('1bi18cs36','2020-12-19 23:00:37','CNS'),('1bi18cs36','2020-12-19 23:00:37','DBMS'),('1bi18cs36','2020-12-19 23:00:37','ME'),('1bi18cs37','2020-12-19 23:00:37','ATCI'),('1bi18cs37','2020-12-19 23:00:37','ADP'),('1bi18cs37','2020-12-19 23:00:37','CNS'),('1bi18cs37','2020-12-19 23:00:37','DBMS'),('1bi18cs37','2020-12-19 23:00:37','ME'),('1bi18cs38','2020-12-19 23:00:38','ATCI'),('1bi18cs38','2020-12-19 23:00:38','ADP'),('1bi18cs38','2020-12-19 23:00:38','CNS'),('1bi18cs38','2020-12-19 23:00:38','DBMS'),('1bi18cs38','2020-12-19 23:00:38','ME'),('1bi18cs39','2020-12-19 23:00:38','ATCI'),('1bi18cs39','2020-12-19 23:00:38','ADP'),('1bi18cs39','2020-12-19 23:00:38','CNS'),('1bi18cs39','2020-12-19 23:00:38','DBMS'),('1bi18cs39','2020-12-19 23:00:38','ME'),('1bi18cs40','2020-12-19 23:00:38','ATCI'),('1bi18cs40','2020-12-19 23:00:38','ADP'),('1bi18cs40','2020-12-19 23:00:39','CNS'),('1bi18cs40','2020-12-19 23:00:39','DBMS'),('1bi18cs40','2020-12-19 23:00:39','ME'),('1bi18cs41','2020-12-19 23:00:39','ATCI'),('1bi18cs41','2020-12-19 23:00:39','ADP'),('1bi18cs41','2020-12-19 23:00:39','CNS'),('1bi18cs41','2020-12-19 23:00:39','DBMS'),('1bi18cs41','2020-12-19 23:00:39','ME'),('1bi18cs42','2020-12-19 23:00:39','ATCI'),('1bi18cs42','2020-12-19 23:00:39','ADP'),('1bi18cs42','2020-12-19 23:00:40','CNS'),('1bi18cs42','2020-12-19 23:00:40','DBMS'),('1bi18cs42','2020-12-19 23:00:40','ME'),('1bi18cs43','2020-12-19 23:00:40','ATCI'),('1bi18cs43','2020-12-19 23:00:40','ADP'),('1bi18cs43','2020-12-19 23:00:40','CNS'),('1bi18cs43','2020-12-19 23:00:40','DBMS'),('1bi18cs43','2020-12-19 23:00:40','ME'),('1bi18cs44','2020-12-19 23:00:40','ATCI'),('1bi18cs44','2020-12-19 23:00:40','ADP'),('1bi18cs44','2020-12-19 23:00:40','CNS'),('1bi18cs44','2020-12-19 23:00:41','DBMS'),('1bi18cs44','2020-12-19 23:00:41','ME'),('1bi18cs45','2020-12-19 23:00:41','ATCI'),('1bi18cs45','2020-12-19 23:00:41','ADP'),('1bi18cs45','2020-12-19 23:00:41','CNS'),('1bi18cs45','2020-12-19 23:00:41','DBMS'),('1bi18cs45','2020-12-19 23:00:41','ME'),('1bi18cs46','2020-12-19 23:00:41','ATCI'),('1bi18cs46','2020-12-19 23:00:41','ADP');
/*!40000 ALTER TABLE `attendancelog` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = cp850 */ ;
/*!50003 SET character_set_results = cp850 */ ;
/*!50003 SET collation_connection  = cp850_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `summarise` AFTER INSERT ON `attendancelog` FOR EACH ROW begin 
set @subjectTest = new.subject;
IF (@subjectTest='ATCI') THEN
    UPDATE  totalstudentattendance set totalstudentattendance.ATCI=totalstudentattendance.ATCI+1 where totalstudentattendance.usn= new.`USN`;
 ELSEIF (@subjectTest='ME') THEN
    UPDATE  totalstudentattendance set totalstudentattendance.ME=totalstudentattendance.ME+1 where totalstudentattendance.usn= new.`USN`;
 ELSEIF (@subjectTest='CNS') THEN
     UPDATE  totalstudentattendance set totalstudentattendance.CNS=totalstudentattendance.CNS+1 where totalstudentattendance.usn= new.`USN`;
ELSEIF (@subjectTest='ADP') THEN
    UPDATE  totalstudentattendance set totalstudentattendance.ADP=totalstudentattendance.ADP+1 where totalstudentattendance.usn= new.`USN`;
ELSEIF (@subjectTest='UNIX') THEN
    UPDATE  totalstudentattendance set totalstudentattendance.UNIX=totalstudentattendance.UNIX+1 where totalstudentattendance.usn= new.`USN`;
ELSEIF (@subjectTest='DBMS') THEN
    UPDATE  totalstudentattendance set totalstudentattendance.DBMS=totalstudentattendance.DBMS+1 where totalstudentattendance.usn= new.`USN`;
ELSEIF (@subjectTest='EVS') THEN
    UPDATE  totalstudentattendance set totalstudentattendance.EVS=totalstudentattendance.EVS+1 where totalstudentattendance.usn= new.`USN`;
end IF; 
end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `classLog`
--

DROP TABLE IF EXISTS `classLog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `classLog` (
  `ID` varchar(10) DEFAULT NULL,
  `log` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `classLog`
--

LOCK TABLES `classLog` WRITE;
/*!40000 ALTER TABLE `classLog` DISABLE KEYS */;
INSERT INTO `classLog` VALUES ('BITstaff3','testRun here nothing more'),('BITstaff3','testRun here nothing more'),('BITstaff3','testRun here nothing more'),('BITstaff3','testRun here nothing more'),('BITstaff3','testRun here nothing more'),('BITstaff3','testRun here nothing more'),('BITstaff3','1 class(es) of ATCI were conducted on 5-5-2021 for section A'),('BITstaff3','1 class(es) of ATCI were conducted on 5-5-2021 for section A'),('BITstaff3','1 class(es) of ATCI were conducted on 5-5-2021 for section A'),('BITstaff3','1 class(es) of ATCI were conducted on 5-5-2021 for section A'),('BITstaff3','1 class(es) of ATCI were conducted on 5-5-2021 for section A'),('BITstaff3','1 class(es) of ATCI were conducted on 5-5-2021 for section A'),('BITstaff3','1 class(es) of ATCI were conducted on 5-6-2021 for section A'),('BITstaff3','1 class(es) of ADP were conducted on 5-6-2021 for section A'),('BITstaff3','1 class(es) of ADP were conducted on 5-6-2021 for section A'),('BITstaff3','1 class(es) of ADP were conducted on 5-6-2021 for section A'),('BITstaff3','1 class(es) of ADP were conducted on 5-6-2021 for section A'),('BITstaff3','1 class(es) of ADP were conducted on 5-6-2021 for section A'),('BITstaff3','1 class(es) of ADP were conducted on 5-6-2021 for section A'),('BITstaff3','1 class(es) of ADP were conducted on 5-6-2021 for section A'),('BITstaff3','1 class(es) of ADP were conducted on 5-6-2021 for section A'),('BITstaff3','1 class(es) of ADP were conducted on 5-6-2021 for section A'),('BITstaff3','1 class(es) of ADP were conducted on 5-6-2021 for section A'),('BITstaff3','1 class(es) of ADP were conducted on 5-6-2021 for section A'),('BITstaff3','1 class(es) of ADP were conducted on 5-6-2021 for section A'),('BITstaff3','1 class(es) of ADP were conducted on 5-6-2021 for section A'),('BITstaff3','1 class(es) of ADP were conducted on 5-6-2021 for section A'),('BITstaff3','1 class(es) of ADP were conducted on 5-6-2021 for section A'),('BITstaff3','1 class(es) of ADP were conducted on 5-6-2021 for section A'),('BITstaff3','1 class(es) of ADP were conducted on 5-6-2021 for section A'),('BITstaff3','1 class(es) of ADP were conducted on 5-6-2021 for section A'),('BITstaff3','1 class(es) of ADP were conducted on 5-6-2021 for section A'),('BITstaff3','1 class(es) of ATCI were conducted on 5-6-2020 for section A'),('BITstaff3','3 class(es) of CNS were conducted on 10-11-2021 for section C'),('BITstaff3','3 class(es) of CNS were conducted on 10-11-2021 for section C'),('BITstaff3','3 class(es) of CNS were conducted on 10-11-2021 for section C'),('BITstaff3','3 class(es) of CNS were conducted on 10-11-2021 for section C'),('BITstaff3','3 class(es) of CNS were conducted on 10-11-2021 for section C'),('BITstaff3','3 class(es) of CNS were conducted on 10-11-2021 for section C'),('BITstaff3','3 class(es) of CNS were conducted on 10-11-2021 for section C'),('BITstaff3','3 class(es) of CNS were conducted on 10-11-2021 for section C'),('BITstaff3','3 class(es) of CNS were conducted on 10-11-2021 for section C'),('BITstaff3','3 class(es) of CNS were conducted on 10-11-2021 for section C'),('BITstaff3','3 class(es) of CNS were conducted on 10-11-2021 for section C'),('BITstaff3','2 class(es) of ATCI were conducted on 9-11-2020 for section A'),('BITstaff3','2 class(es) of ATCI were conducted on 9-11-2020 for section A'),('BITstaff3','2 class(es) of ATCI were conducted on 9-11-2020 for section A'),('BITstaff3','1 class(es) of ATCI were conducted on 8-11-2020 for section A'),('BITstaff3','testRun here nothing more'),('BITstaff3','testRun here nothing more'),('BITstaff3','testRun here nothing more'),('BITstaff3','1 class(es) of ATCI were conducted on 8-11-2020 for section A'),('BITstaff3','1 class(es) of ATCI were conducted on 8-11-2020 for section A'),('BITstaff3','1 class(es) of ATCI were conducted on 8-11-2020 for section A'),('BITstaff3','1 class(es) of ATCI were conducted on 8-11-2020 for section A'),('BITstaff3','1 class(es) of ATCI were conducted on 8-11-2020 for section A'),('BITstaff3','1 class(es) of ATCI were conducted on 8-11-2020 for section A'),('BITstaff3','2 class(es) of ADP were conducted on 10-3-2021 for section C');
/*!40000 ALTER TABLE `classLog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `classlog`
--

DROP TABLE IF EXISTS `classlog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `classlog` (
  `ID` varchar(10) DEFAULT NULL,
  `log` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `classlog`
--

LOCK TABLES `classlog` WRITE;
/*!40000 ALTER TABLE `classlog` DISABLE KEYS */;
INSERT INTO `classlog` VALUES ('BITstaff3','testRun here nothing more'),('BITstaff3','testRun here nothing more'),('BITstaff3','testRun here nothing more'),('BITstaff3','testRun here nothing more'),('BITstaff3','testRun here nothing more'),('BITstaff3','testRun here nothing more'),('BITstaff3','1 class(es) of ATCI were conducted on 5-5-2021 for section A'),('BITstaff3','1 class(es) of ATCI were conducted on 5-5-2021 for section A'),('BITstaff3','1 class(es) of ATCI were conducted on 5-5-2021 for section A'),('BITstaff3','1 class(es) of ATCI were conducted on 5-5-2021 for section A'),('BITstaff3','1 class(es) of ATCI were conducted on 5-5-2021 for section A'),('BITstaff3','1 class(es) of ATCI were conducted on 5-5-2021 for section A'),('BITstaff3','1 class(es) of ATCI were conducted on 5-6-2021 for section A'),('BITstaff3','1 class(es) of ADP were conducted on 5-6-2021 for section A'),('BITstaff3','1 class(es) of ADP were conducted on 5-6-2021 for section A'),('BITstaff3','1 class(es) of ADP were conducted on 5-6-2021 for section A'),('BITstaff3','1 class(es) of ADP were conducted on 5-6-2021 for section A'),('BITstaff3','1 class(es) of ADP were conducted on 5-6-2021 for section A'),('BITstaff3','1 class(es) of ADP were conducted on 5-6-2021 for section A'),('BITstaff3','1 class(es) of ADP were conducted on 5-6-2021 for section A'),('BITstaff3','1 class(es) of ADP were conducted on 5-6-2021 for section A'),('BITstaff3','1 class(es) of ADP were conducted on 5-6-2021 for section A'),('BITstaff3','1 class(es) of ADP were conducted on 5-6-2021 for section A'),('BITstaff3','1 class(es) of ADP were conducted on 5-6-2021 for section A'),('BITstaff3','1 class(es) of ADP were conducted on 5-6-2021 for section A'),('BITstaff3','1 class(es) of ADP were conducted on 5-6-2021 for section A'),('BITstaff3','1 class(es) of ADP were conducted on 5-6-2021 for section A'),('BITstaff3','1 class(es) of ADP were conducted on 5-6-2021 for section A'),('BITstaff3','1 class(es) of ADP were conducted on 5-6-2021 for section A'),('BITstaff3','1 class(es) of ADP were conducted on 5-6-2021 for section A'),('BITstaff3','1 class(es) of ADP were conducted on 5-6-2021 for section A'),('BITstaff3','1 class(es) of ADP were conducted on 5-6-2021 for section A'),('BITstaff3','1 class(es) of ATCI were conducted on 5-6-2020 for section A'),('BITstaff3','3 class(es) of CNS were conducted on 10-11-2021 for section C'),('BITstaff3','3 class(es) of CNS were conducted on 10-11-2021 for section C'),('BITstaff3','3 class(es) of CNS were conducted on 10-11-2021 for section C'),('BITstaff3','3 class(es) of CNS were conducted on 10-11-2021 for section C'),('BITstaff3','3 class(es) of CNS were conducted on 10-11-2021 for section C'),('BITstaff3','3 class(es) of CNS were conducted on 10-11-2021 for section C'),('BITstaff3','3 class(es) of CNS were conducted on 10-11-2021 for section C'),('BITstaff3','3 class(es) of CNS were conducted on 10-11-2021 for section C'),('BITstaff3','3 class(es) of CNS were conducted on 10-11-2021 for section C'),('BITstaff3','3 class(es) of CNS were conducted on 10-11-2021 for section C'),('BITstaff3','3 class(es) of CNS were conducted on 10-11-2021 for section C'),('BITstaff3','2 class(es) of ATCI were conducted on 9-11-2020 for section A'),('BITstaff3','2 class(es) of ATCI were conducted on 9-11-2020 for section A'),('BITstaff3','2 class(es) of ATCI were conducted on 9-11-2020 for section A'),('BITstaff3','1 class(es) of ATCI were conducted on 8-11-2020 for section A'),('BITstaff3','testRun here nothing more'),('BITstaff3','testRun here nothing more'),('BITstaff3','testRun here nothing more'),('BITstaff3','1 class(es) of ATCI were conducted on 8-11-2020 for section A'),('BITstaff3','1 class(es) of ATCI were conducted on 8-11-2020 for section A'),('BITstaff3','1 class(es) of ATCI were conducted on 8-11-2020 for section A'),('BITstaff3','1 class(es) of ATCI were conducted on 8-11-2020 for section A'),('BITstaff3','1 class(es) of ATCI were conducted on 8-11-2020 for section A'),('BITstaff3','1 class(es) of ATCI were conducted on 8-11-2020 for section A'),('BITstaff3','3 class(es) of CNS were conducted on 5-4-2022 for section C');
/*!40000 ALTER TABLE `classlog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dupcheck`
--

DROP TABLE IF EXISTS `dupcheck`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dupcheck` (
  `USN` varchar(10) NOT NULL,
  PRIMARY KEY (`USN`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dupcheck`
--

LOCK TABLES `dupcheck` WRITE;
/*!40000 ALTER TABLE `dupcheck` DISABLE KEYS */;
INSERT INTO `dupcheck` VALUES ('1BI18CS003'),('1BI18CS032'),('1BI18CS034');
/*!40000 ALTER TABLE `dupcheck` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `staff`
--

DROP TABLE IF EXISTS `staff`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `staff` (
  `ID` varchar(10) NOT NULL,
  `NAME` varchar(20) DEFAULT NULL,
  `PASSWORDHASH` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `staff`
--

LOCK TABLES `staff` WRITE;
/*!40000 ALTER TABLE `staff` DISABLE KEYS */;
INSERT INTO `staff` VALUES ('BITstaff1','TeacherA','386ca7afc1a16950d7e5f35b978229fdaa64c8590da7f450c205ff258e67cf38'),('BITstaff2','TeacherB','850c9d0e67792279c862039422ac25d3091acb135cb1a04084e88927ddc0f367'),('BITstaff3','TeacherC','b32eacc14aadfd4a45af200fde66fd3749b419dd37342ff269e5edc218d312f6'),('BITstaff4','TeacherD','2c816454f88a495a756e54fe2660a6b7eff8ce0f972ee36ec8e311dce0266d71');
/*!40000 ALTER TABLE `staff` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student` (
  `USN` varchar(10) NOT NULL,
  `SECTION` varchar(1) DEFAULT NULL,
  `NAME` varchar(20) DEFAULT NULL,
  `passwordhash` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`USN`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` VALUES ('1bi18cs1','A','doot','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs10','A','doot','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs11','A','doot','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs12','C','konichiwa','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs13','B','bruv','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs14','A','doot','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs15','B','bruv','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs16','C','konichiwa','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs17','A','doot','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs18','B','bruv','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs19','A','doot','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs2','C','konichiwa','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs20','C','konichiwa','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs21','B','bruv','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs22','A','doot','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs23','A','doot','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs24','B','bruv','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs25','C','konichiwa','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs26','C','konichiwa','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs27','C','konichiwa','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs28','B','bruv','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs29','A','doot','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs3','C','konichiwa','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs30','A','doot','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs31','A','doot','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs32','A','doot','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs33','B','bruv','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs34','B','bruv','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs35','C','konichiwa','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs36','B','bruv','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs37','A','doot','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs38','A','doot','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs39','A','doot','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs4','A','doot','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs40','A','doot','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs41','A','doot','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs42','B','bruv','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs43','A','doot','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs44','A','doot','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs45','C','konichiwa','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs46','B','bruv','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs47','A','doot','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs48','B','bruv','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs49','A','doot','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs5','A','doot','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs50','B','bruv','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs51','A','doot','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs52','C','konichiwa','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs53','A','doot','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs54','B','bruv','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs55','A','doot','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs56','A','doot','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs57','A','doot','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs58','C','konichiwa','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs59','C','konichiwa','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs6','A','doot','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs60','C','konichiwa','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs61','B','bruv','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs62','B','bruv','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs63','A','doot','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs64','A','doot','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs65','A','doot','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs66','B','bruv','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs67','A','doot','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs68','B','bruv','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs69','B','bruv','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs7','B','bruv','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs70','B','bruv','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs71','B','bruv','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs72','B','bruv','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs73','A','doot','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs74','A','doot','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs75','B','bruv','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs76','B','bruv','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs77','B','bruv','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs78','C','konichiwa','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs79','C','konichiwa','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs8','B','bruv','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs80','B','bruv','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs81','A','doot','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs82','B','bruv','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs83','C','konichiwa','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs84','C','konichiwa','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs85','C','konichiwa','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs86','A','doot','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs87','A','doot','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs88','C','konichiwa','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs89','A','doot','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs9','C','konichiwa','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs90','A','doot','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs91','C','konichiwa','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs92','C','konichiwa','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs93','C','konichiwa','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs94','A','doot','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs95','A','doot','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs96','B','bruv','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs97','A','doot','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs98','B','bruv','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9');
/*!40000 ALTER TABLE `student` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `addStudent` AFTER INSERT ON `student` FOR EACH ROW begin
insert into totalstudentattendance values (new.USN,new.section,0,0,0,0,0,0,0);
end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `subjects`
--

DROP TABLE IF EXISTS `subjects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subjects` (
  `ID` varchar(10) DEFAULT NULL,
  `subject` varchar(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subjects`
--

LOCK TABLES `subjects` WRITE;
/*!40000 ALTER TABLE `subjects` DISABLE KEYS */;
INSERT INTO `subjects` VALUES ('BITstaff1','ADP'),('BITstaff1','DBMS'),('BITstaff3','ATCI'),('BITstaff3','ADP'),('BITstaff2','UNIX'),('BITstaff3','CNS'),('BITstaff2','DBMS'),('BITstaff3','ADP');
/*!40000 ALTER TABLE `subjects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `timetable`
--

DROP TABLE IF EXISTS `timetable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `timetable` (
  `DAY` varchar(10) NOT NULL,
  `8_00` varchar(5) DEFAULT NULL,
  `9_00` varchar(5) DEFAULT NULL,
  `10_00` varchar(5) DEFAULT NULL,
  `11_30` varchar(5) DEFAULT NULL,
  `12_30` varchar(5) DEFAULT NULL,
  `2_00` varchar(5) DEFAULT NULL,
  `3_00` varchar(5) DEFAULT NULL,
  `4_00` varchar(5) DEFAULT NULL,
  `section` varchar(1) NOT NULL,
  PRIMARY KEY (`DAY`,`section`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `timetable`
--

LOCK TABLES `timetable` WRITE;
/*!40000 ALTER TABLE `timetable` DISABLE KEYS */;
INSERT INTO `timetable` VALUES ('FRIDAY','ATCI','DBMS','ME','_','_','_','_','_','A'),('MONDAY','_','_','_','ADP','CNS','ME','ATCI','UNIX','A'),('SATURDAY','UNIX','ME','DBMS','ADP','_','_','_','_','A'),('THURSDAY','_','_','_','CNS','ME','CNS','DBMS','','A'),('TUESDAY','CNS','CNS','DBMS','_','_','_','_','_','A'),('WEDNESDAY','ADP','UNIX','ATCI','CNS','DBMS','_','_','EVS','A');
/*!40000 ALTER TABLE `timetable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `totalclasses`
--

DROP TABLE IF EXISTS `totalclasses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `totalclasses` (
  `SECTION` varchar(1) DEFAULT NULL,
  `ATCI` int DEFAULT NULL,
  `ME` int DEFAULT NULL,
  `CNS` int DEFAULT NULL,
  `ADP` int DEFAULT NULL,
  `UNIX` int DEFAULT NULL,
  `EVS` int DEFAULT NULL,
  `DBMS` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `totalclasses`
--

LOCK TABLES `totalclasses` WRITE;
/*!40000 ALTER TABLE `totalclasses` DISABLE KEYS */;
INSERT INTO `totalclasses` VALUES ('A',10,10,10,10,10,10,10);
/*!40000 ALTER TABLE `totalclasses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `totalstudentattendance`
--

DROP TABLE IF EXISTS `totalstudentattendance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `totalstudentattendance` (
  `USN` varchar(10) NOT NULL,
  `SECTION` varchar(1) DEFAULT 'A',
  `ATCI` tinyint DEFAULT '0',
  `ME` tinyint DEFAULT '0',
  `CNS` tinyint DEFAULT '0',
  `ADP` tinyint DEFAULT '0',
  `UNIX` tinyint DEFAULT '0',
  `EVS` tinyint DEFAULT '0',
  `DBMS` tinyint DEFAULT '0',
  PRIMARY KEY (`USN`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `totalstudentattendance`
--

LOCK TABLES `totalstudentattendance` WRITE;
/*!40000 ALTER TABLE `totalstudentattendance` DISABLE KEYS */;
INSERT INTO `totalstudentattendance` VALUES ('1bi18cs1','A',1,1,1,1,0,0,1),('1bi18cs10','A',1,1,1,1,0,0,1),('1bi18cs11','A',1,1,1,1,0,0,1),('1bi18cs12','C',1,1,1,1,0,0,1),('1bi18cs13','B',1,1,1,1,0,0,1),('1bi18cs14','A',1,1,1,1,0,0,1),('1bi18cs15','B',1,1,1,1,0,0,1),('1bi18cs16','C',1,1,1,1,0,0,1),('1bi18cs17','A',1,1,1,1,0,0,1),('1bi18cs18','B',1,1,1,1,0,0,1),('1bi18cs19','A',1,1,1,1,0,0,1),('1bi18cs2','C',1,1,1,1,0,0,1),('1bi18cs20','C',1,1,1,1,0,0,1),('1bi18cs21','B',1,1,1,1,0,0,1),('1bi18cs22','A',1,1,1,1,0,0,1),('1bi18cs23','A',1,1,1,1,0,0,1),('1bi18cs24','B',1,1,1,1,0,0,1),('1bi18cs25','C',1,1,1,1,0,0,1),('1bi18cs26','C',1,1,1,1,0,0,1),('1bi18cs27','C',1,1,1,1,0,0,1),('1bi18cs28','B',1,1,1,1,0,0,1),('1bi18cs29','A',1,1,1,1,0,0,1),('1bi18cs3','C',1,1,1,1,0,0,1),('1bi18cs30','A',1,1,1,1,0,0,1),('1bi18cs31','A',1,1,1,1,0,0,1),('1bi18cs32','A',1,1,1,1,0,0,1),('1bi18cs33','B',1,1,1,1,0,0,1),('1bi18cs34','B',1,1,1,1,0,0,1),('1bi18cs35','C',1,1,1,1,0,0,1),('1bi18cs36','B',1,1,1,1,0,0,1),('1bi18cs37','A',1,1,1,1,0,0,1),('1bi18cs38','A',1,1,1,1,0,0,1),('1bi18cs39','A',1,1,1,1,0,0,1),('1bi18cs4','A',1,1,1,1,0,0,1),('1bi18cs40','A',1,1,1,1,0,0,1),('1bi18cs41','A',1,1,1,1,0,0,1),('1bi18cs42','B',1,1,1,1,0,0,1),('1bi18cs43','A',1,1,1,1,0,0,1),('1bi18cs44','A',1,1,1,1,0,0,1),('1bi18cs45','C',1,1,1,1,0,0,1),('1bi18cs46','B',1,0,0,1,0,0,0),('1bi18cs47','A',0,0,0,0,0,0,0),('1bi18cs48','B',0,0,0,0,0,0,0),('1bi18cs49','A',0,0,0,0,0,0,0),('1bi18cs5','A',1,1,1,1,0,0,1),('1bi18cs50','B',0,0,0,0,0,0,0),('1bi18cs51','A',0,0,0,0,0,0,0),('1bi18cs52','C',0,0,0,0,0,0,0),('1bi18cs53','A',0,0,0,0,0,0,0),('1bi18cs54','B',0,0,0,0,0,0,0),('1bi18cs55','A',0,0,0,0,0,0,0),('1bi18cs56','A',0,0,0,0,0,0,0),('1bi18cs57','A',0,0,0,0,0,0,0),('1bi18cs58','C',0,0,0,0,0,0,0),('1bi18cs59','C',0,0,0,0,0,0,0),('1bi18cs6','A',1,1,1,1,0,0,1),('1bi18cs60','C',0,0,0,0,0,0,0),('1bi18cs61','B',0,0,0,0,0,0,0),('1bi18cs62','B',0,0,0,0,0,0,0),('1bi18cs63','A',0,0,0,0,0,0,0),('1bi18cs64','A',0,0,0,0,0,0,0),('1bi18cs65','A',0,0,0,0,0,0,0),('1bi18cs66','B',0,0,0,0,0,0,0),('1bi18cs67','A',0,0,0,0,0,0,0),('1bi18cs68','B',0,0,0,0,0,0,0),('1bi18cs69','B',0,0,0,0,0,0,0),('1bi18cs7','B',1,1,1,1,0,0,1),('1bi18cs70','B',0,0,0,0,0,0,0),('1bi18cs71','B',0,0,0,0,0,0,0),('1bi18cs72','B',0,0,0,0,0,0,0),('1bi18cs73','A',0,0,0,0,0,0,0),('1bi18cs74','A',0,0,0,0,0,0,0),('1bi18cs75','B',0,0,0,0,0,0,0),('1bi18cs76','B',0,0,0,0,0,0,0),('1bi18cs77','B',0,0,0,0,0,0,0),('1bi18cs78','C',0,0,0,0,0,0,0),('1bi18cs79','C',0,0,0,0,0,0,0),('1bi18cs8','B',1,1,1,1,0,0,1),('1bi18cs80','B',0,0,0,0,0,0,0),('1bi18cs81','A',0,0,0,0,0,0,0),('1bi18cs82','B',0,0,0,0,0,0,0),('1bi18cs83','C',0,0,0,0,0,0,0),('1bi18cs84','C',0,0,0,0,0,0,0),('1bi18cs85','C',0,0,0,0,0,0,0),('1bi18cs86','A',0,0,0,0,0,0,0),('1bi18cs87','A',0,0,0,0,0,0,0),('1bi18cs88','C',0,0,0,0,0,0,0),('1bi18cs89','A',0,0,0,0,0,0,0),('1bi18cs9','C',1,1,1,1,0,0,1),('1bi18cs90','A',0,0,0,0,0,0,0),('1bi18cs91','C',0,0,0,0,0,0,0),('1bi18cs92','C',0,0,0,0,0,0,0),('1bi18cs93','C',0,0,0,0,0,0,0),('1bi18cs94','A',0,0,0,0,0,0,0),('1bi18cs95','A',0,0,0,0,0,0,0),('1bi18cs96','B',0,0,0,0,0,0,0),('1bi18cs97','A',0,0,0,0,0,0,0),('1bi18cs98','B',0,0,0,0,0,0,0);
/*!40000 ALTER TABLE `totalstudentattendance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `updates`
--

DROP TABLE IF EXISTS `updates`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `updates` (
  `id` varchar(10) DEFAULT NULL,
  `section` varchar(10) DEFAULT NULL,
  KEY `id` (`id`),
  CONSTRAINT `updates_ibfk_1` FOREIGN KEY (`id`) REFERENCES `staff` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `updates`
--

LOCK TABLES `updates` WRITE;
/*!40000 ALTER TABLE `updates` DISABLE KEYS */;
/*!40000 ALTER TABLE `updates` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'attendance'
--

--
-- Dumping routines for database 'attendance'
--

--
-- Final view structure for view `attendance_summary`
--

/*!50001 DROP VIEW IF EXISTS `attendance_summary`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `attendance_summary` AS select `t`.`USN` AS `usn`,`t`.`SECTION` AS `section`,concat(`t`.`ATCI`,'/',`c`.`ATCI`) AS `ATCI`,concat(`t`.`ME`,'/',`c`.`ME`) AS `ME`,concat(`t`.`CNS`,'/',`c`.`CNS`) AS `CNS`,concat(`t`.`ADP`,'/',`c`.`ADP`) AS `ADP`,concat(`t`.`UNIX`,'/',`c`.`UNIX`) AS `UNIX`,concat(`t`.`EVS`,'/',`c`.`EVS`) AS `EVS`,concat(`t`.`DBMS`,'/',`c`.`DBMS`) AS `DBMS` from (`totalstudentattendance` `t` join `totalclasses` `c`) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-19 23:28:38
