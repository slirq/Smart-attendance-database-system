-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: localhost    Database: SA
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
 1 AS `USN`,
 1 AS `SECTION`,
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
  `TIMESTAMP` datetime DEFAULT NULL,
  `SECTION` varchar(1) DEFAULT NULL,
  `SUBJECT_NAME` varchar(6) DEFAULT NULL,
  KEY `USN` (`USN`),
  KEY `SECTION` (`SECTION`),
  CONSTRAINT `attendancelog_ibfk_1` FOREIGN KEY (`USN`) REFERENCES `student` (`USN`) ON DELETE CASCADE,
  CONSTRAINT `attendancelog_ibfk_2` FOREIGN KEY (`SECTION`) REFERENCES `schedule` (`SECTION`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `attendancelog`
--

LOCK TABLES `attendancelog` WRITE;
/*!40000 ALTER TABLE `attendancelog` DISABLE KEYS */;
INSERT INTO `attendancelog` VALUES ('1bi18cs01','2020-12-20 17:49:17','B','ME'),('1bi18cs02','2020-12-20 17:49:18','C','CNS'),('1bi18cs03','2020-12-20 17:49:19','B','CNS'),('1bi18cs04','2020-12-20 17:49:20','C','UNIX'),('1bi18cs05','2020-12-20 17:49:21','B','UNIX'),('1bi18cs06','2020-12-20 17:49:22','B','UNIX'),('1bi18cs07','2020-12-20 17:49:23','B','ADP'),('1bi18cs08','2020-12-20 17:49:24','C','CNS'),('1bi18cs09','2020-12-20 17:49:25','B','ADP'),('1bi18cs010','2020-12-20 17:49:26','B','EVS'),('1bi18cs011','2020-12-20 17:49:27','C','EVS'),('1bi18cs012','2020-12-20 17:49:28','A','ME'),('1bi18cs013','2020-12-20 17:49:29','B','ATCI'),('1bi18cs014','2020-12-20 17:49:30','C','EVS'),('1bi18cs015','2020-12-20 17:49:31','A','CNS'),('1bi18cs016','2020-12-20 17:49:32','A','EVS'),('1bi18cs017','2020-12-20 17:49:33','A','ME'),('1bi18cs018','2020-12-20 17:49:34','B','UNIX'),('1bi18cs019','2020-12-20 17:49:35','A','DBMS'),('1bi18cs020','2020-12-20 17:49:36','A','DBMS'),('1bi18cs01','2020-12-20 17:52:08','C','UNIX'),('1bi18cs02','2020-12-20 17:52:08','B','ME'),('1bi18cs03','2020-12-20 17:52:10','A','CNS'),('1bi18cs04','2020-12-20 17:52:11','A','ADP'),('1bi18cs05','2020-12-20 17:52:13','A','EVS'),('1bi18cs06','2020-12-20 17:52:13','A','EVS'),('1bi18cs07','2020-12-20 17:52:14','C','UNIX'),('1bi18cs08','2020-12-20 17:52:15','B','ATCI'),('1bi18cs09','2020-12-20 17:52:16','B','DBMS'),('1bi18cs010','2020-12-20 17:52:16','C','EVS'),('1bi18cs011','2020-12-20 17:52:18','C','ADP'),('1bi18cs012','2020-12-20 17:52:19','C','CNS'),('1bi18cs013','2020-12-20 17:52:19','B','ME'),('1bi18cs014','2020-12-20 17:52:20','B','DBMS'),('1bi18cs015','2020-12-20 17:52:21','B','UNIX'),('1bi18cs016','2020-12-20 17:52:21','A','DBMS'),('1bi18cs017','2020-12-20 17:52:21','A','UNIX'),('1bi18cs018','2020-12-20 17:52:22','B','CNS'),('1bi18cs019','2020-12-20 17:52:24','C','ATCI'),('1bi18cs020','2020-12-20 17:52:24','B','ME'),('1bi18cs021','2020-12-20 17:52:26','B','DBMS'),('1bi18cs022','2020-12-20 17:52:26','C','CNS'),('1bi18cs023','2020-12-20 17:52:27','B','EVS'),('1bi18cs024','2020-12-20 17:52:28','A','EVS'),('1bi18cs025','2020-12-20 17:52:30','C','DBMS'),('1bi18cs026','2020-12-20 17:52:31','B','UNIX'),('1bi18cs027','2020-12-20 17:52:33','B','CNS'),('1bi18cs028','2020-12-20 17:52:34','B','UNIX'),('1bi18cs029','2020-12-20 17:52:34','A','CNS'),('1bi18cs030','2020-12-20 17:52:37','B','ME'),('1bi18cs031','2020-12-20 17:52:37','A','ADP'),('1bi18cs032','2020-12-20 17:52:39','C','EVS'),('1bi18cs033','2020-12-20 17:52:39','A','ME'),('1bi18cs034','2020-12-20 17:52:39','B','CNS'),('1bi18cs035','2020-12-20 17:52:39','B','ATCI'),('1bi18cs036','2020-12-20 17:52:41','B','ADP'),('1bi18cs037','2020-12-20 17:52:41','B','CNS'),('1bi18cs038','2020-12-20 17:52:41','C','DBMS'),('1bi18cs039','2020-12-20 17:52:43','A','ADP');
/*!40000 ALTER TABLE `attendancelog` ENABLE KEYS */;
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
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `summarise` AFTER INSERT ON `attendancelog` FOR EACH ROW begin 
set @subjectTest = new.subject_name;
IF (@subjectTest='ATCI') THEN
    UPDATE  studentattendance set studentattendance.ATCI=studentattendance.ATCI+1 where studentattendance.usn= new.`USN`;
 ELSEIF (@subjectTest='ME') THEN
    UPDATE  studentattendance set studentattendance.ME=studentattendance.ME+1 where studentattendance.usn= new.`USN`;
 ELSEIF (@subjectTest='CNS') THEN
     UPDATE  studentattendance set studentattendance.CNS=studentattendance.CNS+1 where studentattendance.usn= new.`USN`;
ELSEIF (@subjectTest='ADP') THEN
    UPDATE  studentattendance set studentattendance.ADP=studentattendance.ADP+1 where studentattendance.usn= new.`USN`;
ELSEIF (@subjectTest='UNIX') THEN
    UPDATE  studentattendance set studentattendance.UNIX=studentattendance.UNIX+1 where studentattendance.usn= new.`USN`;
ELSEIF (@subjectTest='DBMS') THEN
    UPDATE  studentattendance set studentattendance.DBMS=studentattendance.DBMS+1 where studentattendance.usn= new.`USN`;
ELSEIF (@subjectTest='EVS') THEN
    UPDATE  studentattendance set studentattendance.EVS=studentattendance.EVS+1 where studentattendance.usn= new.`USN`;
end IF; 
end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `classes`
--

DROP TABLE IF EXISTS `classes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `classes` (
  `ID` varchar(10) DEFAULT NULL,
  `LOG` varchar(80) DEFAULT NULL,
  KEY `ID` (`ID`),
  CONSTRAINT `classes_ibfk_1` FOREIGN KEY (`ID`) REFERENCES `staff` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `classes`
--

LOCK TABLES `classes` WRITE;
/*!40000 ALTER TABLE `classes` DISABLE KEYS */;
INSERT INTO `classes` VALUES ('abc3','1 class(es) of DBMS were conducted on the date 20/4/21  for sec A'),('abc7','2 class(es) of ME were conducted on the date 20/4/21  for sec B'),('abc1','1 class(es) of DBMS were conducted on the date 20/4/21  for sec A'),('abc3','1 class(es) of UNIX were conducted on the date 20/4/21  for sec B'),('abc6','2 class(es) of DBMS were conducted on the date 20/4/21  for sec C'),('abc5','2 class(es) of DBMS were conducted on the date 20/4/21  for sec C'),('abc1','2 class(es) of DBMS were conducted on the date 21/4/21  for sec A'),('abc5','1 class(es) of ATCI were conducted on the date 21/4/21  for sec B'),('abc4','1 class(es) of UNIX were conducted on the date 21/4/21  for sec A'),('abc1','2 class(es) of UNIX were conducted on the date 21/4/21  for sec B'),('abc4','2 class(es) of CNS were conducted on the date 21/4/21  for sec B'),('abc3','1 class(es) of EVS were conducted on the date 21/4/21  for sec A'),('abc6','2 class(es) of UNIX were conducted on the date 21/4/21  for sec A'),('abc2','1 class(es) of CNS were conducted on the date 21/4/21  for sec A'),('abc4','2 class(es) of CNS were conducted on the date 21/4/21  for sec B'),('abc5','1 class(es) of UNIX were conducted on the date 21/4/21  for sec C'),('abc1','1 class(es) of DBMS were conducted on the date 1/5/21  for sec B'),('abc6','1 class(es) of UNIX were conducted on the date 1/5/21  for sec A'),('abc5','1 class(es) of EVS were conducted on the date 1/5/21  for sec A'),('abc5','1 class(es) of ADP were conducted on the date 1/5/21  for sec C'),('abc7','2 class(es) of ATCI were conducted on the date 1/5/21  for sec A'),('abc7','2 class(es) of ADP were conducted on the date 1/5/21  for sec B');
/*!40000 ALTER TABLE `classes` ENABLE KEYS */;
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
/*!40000 ALTER TABLE `dupcheck` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `schedule`
--

DROP TABLE IF EXISTS `schedule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `schedule` (
  `day` varchar(10) NOT NULL,
  `SECTION` varchar(1) NOT NULL,
  `8_00` varchar(5) DEFAULT NULL,
  `9_00` varchar(5) DEFAULT NULL,
  `10_00` varchar(5) DEFAULT NULL,
  `11_30` varchar(5) DEFAULT NULL,
  `12_30` varchar(5) DEFAULT NULL,
  `2_00` varchar(5) DEFAULT NULL,
  `3_00` varchar(5) DEFAULT NULL,
  `4_00` varchar(5) DEFAULT NULL,
  PRIMARY KEY (`SECTION`,`day`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schedule`
--

LOCK TABLES `schedule` WRITE;
/*!40000 ALTER TABLE `schedule` DISABLE KEYS */;
INSERT INTO `schedule` VALUES ('FRIDAY','A','ATCI','DBMS','ME','_','_','_','_','_'),('MONDAY','A','_','_','_','ADP','CNS','ME','ATCI','UNIX'),('SATURDAY','A','UNIX','ME','DBMS','ADP','_','_','_','_'),('THURSDAY','A','_','_','_','CNS','ME','CNS','DBMS',''),('TUESDAY','A','CNS','CNS','DBMS','_','_','_','_','_'),('WEDNESDAY','A','ADP','UNIX','ATCI','CNS','DBMS','_','_','EVS'),('FRIDAY','B','ATCI','DBMS','DBMS','ME','UNIX','_','_','_'),('MONDAY','B','ADP','UNIX','ATCI','CNS','ME','_','_','_'),('SATURDAY','B','ME','DBMS','ADP','_','_','_','_','_'),('THURSDAY','B','ME','ATCI','UNIX','ADP','ADP','_','_','_'),('TUESDAY','B','_','_','_','ADP','UNIX','DBMS','ATCI','EVS'),('WEDNESDAY','B','UNIX','UNIX','ME','ADP','ATCI','_','_','_'),('FRIDAY','C','_','_','_','_','_','UNIX','UNIX','ATCI'),('MONDAY','C','ADP','ADP','UNIX','ME','EVS','_','_','_'),('SATURDAY','C','_','_','_','_','_','_','_','_'),('THURSDAY','C','DBMS','ME','CNS','_','_','_','_','_'),('TUESDAY','C','UNIX','UNIX','ATCI','ADP','ADP','_','_','_'),('WEDNESDAY','C','_','_','_','ADP','DBMS','CNS','CNS','ME');
/*!40000 ALTER TABLE `schedule` ENABLE KEYS */;
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
  `PASSWORD` varchar(64) DEFAULT NULL,
  `SECTION` varchar(1) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `SECTION` (`SECTION`),
  CONSTRAINT `staff_ibfk_1` FOREIGN KEY (`SECTION`) REFERENCES `schedule` (`SECTION`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `staff`
--

LOCK TABLES `staff` WRITE;
/*!40000 ALTER TABLE `staff` DISABLE KEYS */;
INSERT INTO `staff` VALUES ('abc1','Janet Dubinsky','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9','B'),('abc2','Allie Greenidge','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9','A'),('abc3','Donetta Sievert','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9','C'),('abc4','Oma Fraire','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9','B'),('abc5','Marie smith','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9','A'),('abc6','hector smith','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9','B'),('abc7','harry king','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9','C');
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
  `NAME` varchar(20) DEFAULT NULL,
  `SECTION` varchar(1) DEFAULT NULL,
  `PASSWORD` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`USN`),
  KEY `SECTION` (`SECTION`),
  CONSTRAINT `student_ibfk_1` FOREIGN KEY (`SECTION`) REFERENCES `schedule` (`SECTION`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` VALUES ('1bi18cs01','doot','B','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs010','vivek','B','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs011','Buffy Herdt','A','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs012','Delpha Lepe','C','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs013','Antoinette Wolfinger','A','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs014','Mariella Felten','C','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs015','Rosalba Lewis','A','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs016','Deana Water','C','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs017','Robt Monterrosa','C','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs018','Allen Matos','C','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs019','Rutha Steve','C','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs02','arnav','C','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs020','Lanora Rossin','B','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs021','Amelia Ashmore','A','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs022','Rosalinda Korte','C','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs023','Tisha Steuck','B','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs024','Barbar Corral','C','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs025','Charles Adams','C','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs026','Melida Pulsifer','B','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs027','Alvaro Jorgensen','B','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs028','Vernetta Drucker','A','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs029','Ria Erne','A','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs03','rahul','A','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs030','Cyril Berney','C','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs031','Raisa Ammon','B','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs032','Lilian Ronning','C','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs033','Berneice Brockway','A','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs034','Lynelle Formby','C','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs035','Ayesha Tuller','C','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs036','Mika Tocco','B','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs037','Reena Tanguay','C','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs038','Agustin Cochran','B','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs039','Maren Drolet','A','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs04','ajay','B','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs05','devgan','C','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs06','emilia','B','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs07','anna','B','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs08','upasana','C','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9'),('1bi18cs09','raj','C','d3751d33f9cd5049c4af2b462735457e4d3baf130bcbb87f389e349fbaeb20b9');
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
insert into studentattendance values (new.USN,new.section,0,0,0,0,0,0,0);
end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `studentattendance`
--

DROP TABLE IF EXISTS `studentattendance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `studentattendance` (
  `USN` varchar(10) DEFAULT NULL,
  `SECTION` varchar(1) DEFAULT NULL,
  `ME` tinyint DEFAULT NULL,
  `CNS` tinyint DEFAULT NULL,
  `DBMS` tinyint DEFAULT NULL,
  `ATCI` tinyint DEFAULT NULL,
  `ADP` tinyint DEFAULT NULL,
  `UNIX` tinyint DEFAULT NULL,
  `EVS` tinyint DEFAULT NULL,
  KEY `USN` (`USN`),
  KEY `SECTION` (`SECTION`),
  CONSTRAINT `studentattendance_ibfk_1` FOREIGN KEY (`USN`) REFERENCES `student` (`USN`) ON DELETE CASCADE,
  CONSTRAINT `studentattendance_ibfk_2` FOREIGN KEY (`SECTION`) REFERENCES `schedule` (`SECTION`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `studentattendance`
--

LOCK TABLES `studentattendance` WRITE;
/*!40000 ALTER TABLE `studentattendance` DISABLE KEYS */;
INSERT INTO `studentattendance` VALUES ('1bi18cs01','B',16,5,1,24,17,24,25),('1bi18cs02','C',14,15,39,28,3,41,5),('1bi18cs03','A',0,23,4,3,0,36,15),('1bi18cs04','B',12,28,2,6,6,30,9),('1bi18cs05','C',19,3,28,18,28,9,3),('1bi18cs06','B',34,29,3,3,17,32,10),('1bi18cs07','B',14,0,16,23,29,0,40),('1bi18cs08','C',37,8,12,40,19,16,20),('1bi18cs09','C',2,37,4,19,3,7,27),('1bi18cs010','B',8,14,4,19,21,7,21),('1bi18cs011','A',29,4,7,30,0,4,18),('1bi18cs012','C',1,38,14,20,15,35,14),('1bi18cs013','A',25,11,3,33,31,6,22),('1bi18cs014','C',16,40,1,18,3,24,6),('1bi18cs015','A',33,22,38,3,19,10,40),('1bi18cs016','C',39,21,12,12,16,14,41),('1bi18cs017','C',24,36,6,22,0,28,34),('1bi18cs018','C',9,15,14,27,21,36,36),('1bi18cs019','C',38,29,23,26,3,18,21),('1bi18cs020','B',21,4,9,3,41,27,13),('1bi18cs021','A',14,17,26,15,22,16,14),('1bi18cs022','C',35,3,2,33,28,0,34),('1bi18cs023','B',18,24,12,41,36,31,2),('1bi18cs024','C',31,38,5,3,29,2,41),('1bi18cs025','C',5,4,3,39,40,17,4),('1bi18cs026','B',3,4,20,27,33,30,11),('1bi18cs027','B',35,18,14,2,18,15,25),('1bi18cs028','A',7,33,40,39,29,38,0),('1bi18cs029','A',23,2,38,5,13,39,0),('1bi18cs030','C',2,35,22,13,30,4,13),('1bi18cs031','B',7,34,37,6,8,27,35),('1bi18cs032','C',18,3,6,9,25,19,22),('1bi18cs033','A',35,34,11,15,2,31,34),('1bi18cs034','C',33,20,7,6,14,4,13),('1bi18cs035','C',1,16,12,17,37,19,19),('1bi18cs036','B',23,22,25,11,19,25,37),('1bi18cs037','C',17,8,38,15,2,5,30),('1bi18cs038','B',31,38,25,26,23,9,4),('1bi18cs039','A',1,10,37,1,39,14,23);
/*!40000 ALTER TABLE `studentattendance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subject`
--

DROP TABLE IF EXISTS `subject`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subject` (
  `ID` varchar(10) NOT NULL,
  `SUBJECT_NAME` varchar(6) NOT NULL,
  PRIMARY KEY (`ID`,`SUBJECT_NAME`),
  CONSTRAINT `subject_ibfk_1` FOREIGN KEY (`ID`) REFERENCES `staff` (`ID`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subject`
--

LOCK TABLES `subject` WRITE;
/*!40000 ALTER TABLE `subject` DISABLE KEYS */;
INSERT INTO `subject` VALUES ('abc1','CNS'),('abc1','DBMS'),('abc1','ME'),('abc2','ATCI'),('abc2','EVS'),('abc2','UNIX'),('abc3','CNS'),('abc3','EVS'),('abc3','ME'),('abc4','ADP'),('abc4','ATCI'),('abc4','UNIX'),('abc5','DBMS'),('abc5','ME'),('abc5','UNIX'),('abc6','ADP'),('abc6','ATCI'),('abc6','ME'),('abc7','ADP'),('abc7','DBMS'),('abc7','UNIX');
/*!40000 ALTER TABLE `subject` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `totalclasses`
--

DROP TABLE IF EXISTS `totalclasses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `totalclasses` (
  `SECTION` varchar(1) DEFAULT NULL,
  `ME` tinyint DEFAULT NULL,
  `CNS` tinyint DEFAULT NULL,
  `DBMS` tinyint DEFAULT NULL,
  `ATCI` tinyint DEFAULT NULL,
  `ADP` tinyint DEFAULT NULL,
  `UNIX` tinyint DEFAULT NULL,
  `EVS` tinyint DEFAULT NULL,
  KEY `SECTION` (`SECTION`),
  CONSTRAINT `totalclasses_ibfk_1` FOREIGN KEY (`SECTION`) REFERENCES `schedule` (`SECTION`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `totalclasses`
--

LOCK TABLES `totalclasses` WRITE;
/*!40000 ALTER TABLE `totalclasses` DISABLE KEYS */;
INSERT INTO `totalclasses` VALUES ('A',45,45,43,42,41,44,43),('B',44,46,45,43,42,41,43),('C',41,45,46,44,43,42,43);
/*!40000 ALTER TABLE `totalclasses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'SA'
--

--
-- Dumping routines for database 'SA'
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
/*!50001 VIEW `attendance_summary` AS select distinct `t`.`USN` AS `USN`,`t`.`SECTION` AS `SECTION`,concat(`t`.`ATCI`,'/',`c`.`ATCI`) AS `ATCI`,concat(`t`.`ME`,'/',`c`.`ME`) AS `ME`,concat(`t`.`CNS`,'/',`c`.`CNS`) AS `CNS`,concat(`t`.`ADP`,'/',`c`.`ADP`) AS `ADP`,concat(`t`.`UNIX`,'/',`c`.`UNIX`) AS `UNIX`,concat(`t`.`EVS`,'/',`c`.`EVS`) AS `EVS`,concat(`t`.`DBMS`,'/',`c`.`DBMS`) AS `DBMS` from (`studentattendance` `t` join `totalclasses` `c`) where (`t`.`SECTION` = `c`.`SECTION`) */;
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

-- Dump completed on 2020-12-21 14:03:11
