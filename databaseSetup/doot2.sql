-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: localhost    Database: attendance
-- ------------------------------------------------------
-- Server version	8.0.21

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
-- Table structure for table `attendancelog`
--

DROP TABLE IF EXISTS `attendancelog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `attendancelog` (
  `USN` varchar(10) DEFAULT NULL,
  `TIMESTAMP` datetime DEFAULT NULL,
  `SUBJECT` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `attendancelog`
--

LOCK TABLES `attendancelog` WRITE;
/*!40000 ALTER TABLE `attendancelog` DISABLE KEYS */;
INSERT INTO `attendancelog` VALUES ('1BI18CS003','2020-11-06 23:49:35','ATCI'),('1BI18CS034','2020-11-06 23:50:18','ATCI'),('1BI18CS003','2020-11-06 23:50:20','ATCI'),('1BI18CS003','2020-11-07 12:22:53','UNIX'),('1BI18CS034','2020-11-07 12:23:11','UNIX'),('1BI18CS003','2020-11-07 12:23:13','UNIX'),('1BI18CS003','2020-11-07 12:46:34','_'),('1BI18CS003','2020-11-07 12:46:34','UNIX'),('1BI18CS003','2020-11-07 12:46:34','EVS'),('1BI18CS003','2020-11-07 12:59:56','ME'),('1BI18CS003','2020-11-14 01:03:13','None'),('1BI18CS034','2020-11-14 01:03:20','None'),('1BI18CS003','2020-11-14 01:05:58','_'),('1BI18CS003','2020-11-14 01:05:58','_'),('1BI18CS003','2020-11-14 01:05:58','_'),('1BI18CS003','2020-11-14 01:05:58','_'),('1BI18CS003','2020-11-14 01:05:58','_'),('1BI18CS003','2020-11-14 01:05:58','_'),('1BI18CS003','2020-11-14 01:05:58','_'),('1BI18CS003','2020-11-14 01:05:58','_'),('1BI18CS003','2020-11-14 01:05:58','_'),('1BI18CS003','2020-11-14 01:05:58','_'),('1BI18CS003','2020-11-14 01:05:58','_'),('1BI18CS003','2020-11-14 01:05:58','_'),('1BI18CS003','2020-11-14 01:05:59','_'),('1BI18CS003','2020-11-14 01:05:59','_'),('1BI18CS003','2020-11-14 01:05:59','_'),('1BI18CS003','2020-11-14 01:05:59','_'),('1BI18CS032','2020-11-14 01:06:03','_'),('1BI18CS032','2020-11-14 01:06:04','_'),('1BI18CS032','2020-11-14 01:06:04','_'),('1BI18CS032','2020-11-14 01:06:04','_'),('1BI18CS032','2020-11-14 01:06:04','_'),('1BI18CS032','2020-11-14 01:06:04','_'),('1BI18CS032','2020-11-14 01:06:04','_'),('1BI18CS003','2020-11-14 01:09:45','None'),('1BI18CS034','2020-11-14 01:09:58','None'),('1BI18CS003','2020-11-14 01:45:29','None'),('1BI18CS034','2020-11-14 01:45:36','None'),('1BI18CS032','2020-11-14 01:51:20','None');
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
    UPDATE  totalattendance set totalattendance.ATCI=totalattendance.ATCI+1 where totalattendance.usn= new.usn;
 ELSEIF (@subjectTest='ME') THEN
    UPDATE  totalattendance set totalattendance.ME=totalattendance.ME+1 where totalattendance.usn= new.usn;
 ELSEIF (@subjectTest='CNS') THEN
     UPDATE  totalattendance set totalattendance.CNS=totalattendance.CNS+1 where totalattendance.usn= new.usn;
ELSEIF (@subjectTest='ADP') THEN
    UPDATE  totalattendance set totalattendance.ADP=totalattendance.ADP+1 where totalattendance.usn= new.usn;
ELSEIF (@subjectTest='UNIX') THEN
    UPDATE  totalattendance set totalattendance.UNIX=totalattendance.UNIX+1 where totalattendance.usn= new.usn;
ELSEIF (@subjectTest='DBMS') THEN
    UPDATE  totalattendance set totalattendance.DBMS=totalattendance.DBMS+1 where totalattendance.usn= new.usn;
ELSEIF (@subjectTest='EVS') THEN
    UPDATE  totalattendance set totalattendance.EVS=totalattendance.EVS+1 where totalattendance.usn= new.usn;
end IF; 
end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `dupcheck`
--

DROP TABLE IF EXISTS `dupcheck`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dupcheck` (
  `NAME` varchar(10) NOT NULL,
  PRIMARY KEY (`NAME`)
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
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student` (
  `USN` varchar(10) DEFAULT NULL,
  `NAME` varchar(20) DEFAULT NULL,
  `BRANCH` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
/*!40000 ALTER TABLE `student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teacher`
--

DROP TABLE IF EXISTS `teacher`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teacher` (
  `ID` varchar(10) DEFAULT NULL,
  `NAME` varchar(20) DEFAULT NULL,
  `PASSWORDHASH` varchar(60) DEFAULT NULL,
  `SUBJECT` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teacher`
--

LOCK TABLES `teacher` WRITE;
/*!40000 ALTER TABLE `teacher` DISABLE KEYS */;
/*!40000 ALTER TABLE `teacher` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `timetable`
--

DROP TABLE IF EXISTS `timetable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `timetable` (
  `DAY` varchar(10) DEFAULT NULL,
  `8_00` varchar(5) DEFAULT NULL,
  `9_00` varchar(5) DEFAULT NULL,
  `10_00` varchar(5) DEFAULT NULL,
  `11_30` varchar(5) DEFAULT NULL,
  `12_30` varchar(5) DEFAULT NULL,
  `2_00` varchar(5) DEFAULT NULL,
  `3_00` varchar(5) DEFAULT NULL,
  `4_00` varchar(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `timetable`
--

LOCK TABLES `timetable` WRITE;
/*!40000 ALTER TABLE `timetable` DISABLE KEYS */;
INSERT INTO `timetable` VALUES ('MONDAY','_','_','_','ADP','CNS','ME','ATCI','UNIX'),('TUESDAY','CNS','CNS','DBMS','_','_','_','_','_'),('WEDNESDAY','ADP','UNIX','ATCI','CNS','DBMS','_','_','EVS'),('THURSDAY','_','_','_','CNS','ME','CNS','DBMS',''),('FRIDAY','ATCI','DBMS','ME','_','_','_','_','_'),('SATURDAY','UNIX','ME','DBMS','ADP','_','_','_','_');
/*!40000 ALTER TABLE `timetable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `totalattendance`
--

DROP TABLE IF EXISTS `totalattendance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `totalattendance` (
  `USN` varchar(10) NOT NULL,
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
-- Dumping data for table `totalattendance`
--

LOCK TABLES `totalattendance` WRITE;
/*!40000 ALTER TABLE `totalattendance` DISABLE KEYS */;
INSERT INTO `totalattendance` VALUES ('1bi18cs003',0,1,0,0,2,1,0),('1bi18cs009',0,0,0,0,0,0,0),('1bi18cs32',0,0,0,0,0,0,0);
/*!40000 ALTER TABLE `totalattendance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `totalclasses`
--

DROP TABLE IF EXISTS `totalclasses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `totalclasses` (
  `ATCI` varchar(10) DEFAULT NULL,
  `ME` varchar(10) DEFAULT NULL,
  `CNS` varchar(10) DEFAULT NULL,
  `ADP` varchar(10) DEFAULT NULL,
  `UNIX` varchar(10) DEFAULT NULL,
  `EVS` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `totalclasses`
--

LOCK TABLES `totalclasses` WRITE;
/*!40000 ALTER TABLE `totalclasses` DISABLE KEYS */;
/*!40000 ALTER TABLE `totalclasses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'attendance'
--

--
-- Dumping routines for database 'attendance'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-11-14 19:47:41
