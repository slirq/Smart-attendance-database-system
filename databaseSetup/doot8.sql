-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: localhost    Database: sa
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
INSERT INTO `student` VALUES ('1BI18CS003','A','Abdullah ','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1BI18CS032','A','ATHARVA','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1BI18CS546','A','halloISthePassowrd','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1BI18CS696','A','hellothere','1d996e033d612d9af2b44b70061ee0e868bfd14c2dd90b129e1edeb7953e7985');
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
INSERT INTO `totalstudentattendance` VALUES ('1BI18CS003','A',9,9,9,9,9,9,6),('1BI18CS032','A',9,9,9,9,9,9,6),('1BI18CS546','A',9,9,9,9,9,9,6),('1BI18CS696','A',9,9,9,9,9,9,6),('IBI18CS042','B',4,6,7,5,3,1,6);
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
-- Dumping events for database 'sa'
--

--
-- Dumping routines for database 'sa'
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

-- Dump completed on 2020-12-19 18:00:02
