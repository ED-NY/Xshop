-- MySQL dump 10.13  Distrib 5.7.41, for Win64 (x86_64)
--
-- Host: localhost    Database: smbms
-- ------------------------------------------------------
-- Server version	5.7.41-log

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
-- Table structure for table `smbms_account`
--

DROP TABLE IF EXISTS `smbms_account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `smbms_account` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(20) NOT NULL,
  `name` varchar(15) NOT NULL,
  `password` varchar(20) NOT NULL,
  `money` float DEFAULT '0',
  `vip` tinyint(1) DEFAULT '0',
  `vipNum` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `smbms_account`
--

LOCK TABLES `smbms_account` WRITE;
/*!40000 ALTER TABLE `smbms_account` DISABLE KEYS */;
INSERT INTO `smbms_account` VALUES (1,'12','12','12',12,12,12);
/*!40000 ALTER TABLE `smbms_account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `smbms_address`
--

DROP TABLE IF EXISTS `smbms_address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `smbms_address` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '涓婚敭ID',
  `contact` varchar(15) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '鑱旂郴浜哄鍚?,
  `addressDesc` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '鏀惰揣鍦板潃鏄庣粏',
  `postCode` varchar(15) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '閭紪',
  `tel` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '鑱旂郴浜虹數璇?,
  `createdBy` bigint(20) DEFAULT NULL COMMENT '鍒涘缓鑰?,
  `creationDate` datetime DEFAULT NULL COMMENT '鍒涘缓鏃堕棿',
  `modifyBy` bigint(20) DEFAULT NULL COMMENT '淇敼鑰?,
  `modifyDate` datetime DEFAULT NULL COMMENT '淇敼鏃堕棿',
  `userId` bigint(20) DEFAULT NULL COMMENT '鐢ㄦ埛ID',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `smbms_address`
--

LOCK TABLES `smbms_address` WRITE;
/*!40000 ALTER TABLE `smbms_address` DISABLE KEYS */;
INSERT INTO `smbms_address` VALUES (1,'鐜嬩附','鍖椾含甯備笢鍩庡尯涓滀氦姘戝贩44鍙?,'100010','13678789999',1,'2016-04-13 00:00:00',NULL,NULL,1),(2,'寮犵孩涓?,'鍖椾含甯傛捣娣€鍖轰腹妫辫3鍙?,'100000','18567672312',1,'2016-04-13 00:00:00',NULL,NULL,1),(3,'浠诲織寮?,'鍖椾含甯備笢鍩庡尯缇庢湳棣嗗悗琛?3鍙?,'100021','13387906742',1,'2016-04-13 00:00:00',NULL,NULL,1),(4,'鏇归','鍖椾含甯傛湞闃冲尯鏈濋槼闂ㄥ崡澶ц14鍙?,'100053','13568902323',1,'2016-04-13 00:00:00',NULL,NULL,2),(5,'鏉庢収','鍖椾含甯傝タ鍩庡尯涓夐噷娌宠矾鍗椾笁宸?鍙?,'100032','18032356666',1,'2016-04-13 00:00:00',NULL,NULL,3),(6,'鐜嬪浗寮?,'鍖椾含甯傞『涔夊尯楂樹附钀ラ晣閲戦┈宸ヤ笟鍖?8鍙?,'100061','13787882222',1,'2016-04-13 00:00:00',NULL,NULL,3);
/*!40000 ALTER TABLE `smbms_address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `smbms_bill`
--

DROP TABLE IF EXISTS `smbms_bill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `smbms_bill` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '涓婚敭ID',
  `billCode` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '璐﹀崟缂栫爜',
  `productName` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '鍟嗗搧鍚嶇О',
  `productDesc` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '鍟嗗搧鎻忚堪',
  `productUnit` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '鍟嗗搧鍗曚綅',
  `productCount` decimal(20,2) DEFAULT NULL COMMENT '鍟嗗搧鏁伴噺',
  `totalPrice` decimal(20,2) DEFAULT NULL COMMENT '鍟嗗搧鎬婚',
  `isPayment` int(10) DEFAULT NULL COMMENT '鏄惁鏀粯锛?锛氭湭鏀粯 2锛氬凡鏀粯锛?,
  `createdBy` bigint(20) DEFAULT NULL COMMENT '鍒涘缓鑰咃紙userId锛?,
  `creationDate` datetime DEFAULT NULL COMMENT '鍒涘缓鏃堕棿',
  `modifyBy` bigint(20) DEFAULT NULL COMMENT '鏇存柊鑰咃紙userId锛?,
  `modifyDate` datetime DEFAULT NULL COMMENT '鏇存柊鏃堕棿',
  `providerId` bigint(20) DEFAULT NULL COMMENT '渚涘簲鍟咺D',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `smbms_bill`
--

LOCK TABLES `smbms_bill` WRITE;
/*!40000 ALTER TABLE `smbms_bill` DISABLE KEYS */;
INSERT INTO `smbms_bill` VALUES (1,'BILL2016_001','娲楀彂姘淬€佹姢鍙戠礌','鏃ョ敤鍝?娲楀彂銆佹姢鍙?,'鐡?,500.00,25000.00,2,1,'2014-12-14 13:02:03',NULL,NULL,13),(2,'BILL2016_002','棣欑殏銆佽偉鐨傘€佽嵂鐨?,'鏃ョ敤鍝?鐨傜被','鍧?,1000.00,10000.00,2,1,'2016-03-23 04:20:40',NULL,NULL,13),(3,'BILL2016_003','澶ц眴娌?,'椋熷搧-椋熺敤娌?,'鏂?,300.00,5890.00,2,1,'2014-12-14 13:02:03',NULL,NULL,6),(4,'BILL2016_004','姗勬娌?,'椋熷搧-杩涘彛椋熺敤娌?,'鏂?,200.00,9800.00,2,1,'2013-10-10 03:12:13',NULL,NULL,7),(5,'BILL2016_005','娲楁磥绮?,'鏃ョ敤鍝?鍘ㄦ埧娓呮磥','鐡?,500.00,7000.00,2,1,'2014-12-14 13:02:03',NULL,NULL,9),(6,'BILL2016_006','缇庡浗澶ф潖浠?,'椋熷搧-鍧氭灉','琚?,300.00,5000.00,2,1,'2016-04-14 06:08:09',NULL,NULL,4),(7,'BILL2016_007','娌愭荡娑层€佺簿娌?,'鏃ョ敤鍝?娌愭荡绫?,'鐡?,500.00,23000.00,1,1,'2016-07-22 10:10:22',NULL,NULL,14),(8,'BILL2016_008','涓嶉攬閽㈢洏纰?,'鏃ョ敤鍝?鍘ㄦ埧鐢ㄥ叿','涓?,600.00,6000.00,2,1,'2016-04-14 05:12:13',NULL,NULL,14),(9,'BILL2016_009','濉戞枡鏉?,'鏃ョ敤鍝?鏉瓙','涓?,350.00,1750.00,2,1,'2016-02-04 11:40:20',NULL,NULL,14),(10,'BILL2016_010','璞嗙摚閰?,'椋熷搧-璋冩枡','鐡?,200.00,2000.00,2,1,'2013-10-29 05:07:03',NULL,NULL,8),(11,'BILL2016_011','娴蜂箣钃?,'楗枡-鍥介厭','鐡?,50.00,10000.00,1,1,'2016-04-14 16:16:00',NULL,NULL,1),(12,'BILL2016_012','鑺濆崕澹?,'楗枡-娲嬮厭','鐡?,20.00,6000.00,1,1,'2016-09-09 17:00:00',NULL,NULL,1),(13,'BILL2016_013','闀垮煄绾㈣憽钀勯厭','楗枡-绾㈤厭','鐡?,60.00,800.00,2,1,'2016-11-14 15:23:00',NULL,NULL,1),(14,'BILL2016_014','娉板浗棣欑背','椋熷搧-澶х背','鏂?,400.00,5000.00,2,1,'2016-10-09 15:20:00',NULL,NULL,3),(15,'BILL2016_015','涓滃寳澶х背','椋熷搧-澶х背','鏂?,600.00,4000.00,2,1,'2016-11-14 14:00:00',NULL,NULL,3),(16,'BILL2016_016','鍙彛鍙箰','楗枡','鐡?,2000.00,6000.00,2,1,'2012-03-27 13:03:01',NULL,NULL,2),(17,'BILL2016_017','鑴夊姩','楗枡','鐡?,1500.00,4500.00,2,1,'2016-05-10 12:00:00',NULL,NULL,2),(18,'BILL2016_018','鍝囧搱鍝?,'楗枡','鐡?,2000.00,4000.00,2,1,'2015-11-24 15:12:03',NULL,NULL,2),(19,'BILL2016_019','鐐繄','鍙ｉ绯?,'鐩?,100.00,1000.00,1,1,'2022-05-02 16:30:00',NULL,NULL,1),(20,'BILL2016_019','鐐繄','鍙ｉ绯?,'鐩?,100.00,1000.00,1,1,'2022-05-02 16:30:00',NULL,NULL,1),(22,'test','杩涜淇敼淇℃伅娴嬭瘯',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `smbms_bill` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `smbms_gender`
--

DROP TABLE IF EXISTS `smbms_gender`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `smbms_gender` (
  `id` int(11) DEFAULT NULL,
  `gender` varchar(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `smbms_gender`
--

LOCK TABLES `smbms_gender` WRITE;
/*!40000 ALTER TABLE `smbms_gender` DISABLE KEYS */;
INSERT INTO `smbms_gender` VALUES (1,'濂?),(2,'鐢?);
/*!40000 ALTER TABLE `smbms_gender` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `smbms_goods`
--

DROP TABLE IF EXISTS `smbms_goods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `smbms_goods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `onLine` tinyint(1) DEFAULT '0',
  `billCode` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `smbms_goods`
--

LOCK TABLES `smbms_goods` WRITE;
/*!40000 ALTER TABLE `smbms_goods` DISABLE KEYS */;
/*!40000 ALTER TABLE `smbms_goods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `smbms_map`
--

DROP TABLE IF EXISTS `smbms_map`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `smbms_map` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=650001 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `smbms_map`
--

LOCK TABLES `smbms_map` WRITE;
/*!40000 ALTER TABLE `smbms_map` DISABLE KEYS */;
INSERT INTO `smbms_map` VALUES (110000,'鍖椾含'),(120000,'澶╂触'),(130000,'娌冲寳'),(140000,'灞辫タ'),(150000,'鍐呰挋鍙?),(210000,'杈藉畞'),(220000,'鍚夋灄'),(230000,'榛戦緳姹?),(310000,'涓婃捣'),(320000,'姹熻嫃'),(330000,'娴欐睙'),(340000,'瀹夊窘'),(350000,'绂忓缓'),(360000,'姹熻タ'),(370000,'灞变笢'),(410000,'娌冲崡'),(420000,'婀栧寳'),(430000,'婀栧崡'),(440000,'骞夸笢'),(450000,'骞胯タ'),(460000,'娴峰崡'),(500000,'閲嶅簡'),(510000,'鍥涘窛'),(520000,'璐靛窞'),(530000,'浜戝崡'),(540000,'瑗胯棌'),(610000,'闄曡タ'),(620000,'鐢樿們'),(630000,'闈掓捣'),(640000,'瀹佸'),(650000,'鏂扮枂');
/*!40000 ALTER TABLE `smbms_map` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `smbms_orders`
--

DROP TABLE IF EXISTS `smbms_orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `smbms_orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) DEFAULT NULL,
  `goodsId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  KEY `goodsId` (`goodsId`),
  CONSTRAINT `smbms_orders_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `smbms_account` (`id`),
  CONSTRAINT `smbms_orders_ibfk_2` FOREIGN KEY (`goodsId`) REFERENCES `smbms_goods` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `smbms_orders`
--

LOCK TABLES `smbms_orders` WRITE;
/*!40000 ALTER TABLE `smbms_orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `smbms_orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `smbms_provider`
--

DROP TABLE IF EXISTS `smbms_provider`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `smbms_provider` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '涓婚敭ID',
  `proCode` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '渚涘簲鍟嗙紪鐮?,
  `proName` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '渚涘簲鍟嗗悕绉?,
  `proDesc` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '渚涘簲鍟嗚缁嗘弿杩?,
  `proContact` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '渚涘簲鍟嗚仈绯讳汉',
  `proPhone` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '鑱旂郴鐢佃瘽',
  `proAddress` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '鍦板潃',
  `proFax` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '浼犵湡',
  `createdBy` bigint(20) DEFAULT NULL COMMENT '鍒涘缓鑰咃紙userId锛?,
  `creationDate` datetime DEFAULT NULL COMMENT '鍒涘缓鏃堕棿',
  `modifyDate` datetime DEFAULT NULL COMMENT '鏇存柊鏃堕棿',
  `modifyBy` bigint(20) DEFAULT NULL COMMENT '鏇存柊鑰咃紙userId锛?,
  `proAddressId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `smbms_provider`
--

LOCK TABLES `smbms_provider` WRITE;
/*!40000 ALTER TABLE `smbms_provider` DISABLE KEYS */;
INSERT INTO `smbms_provider` VALUES (1,'BJ_GYS001','鍖椾含鏌愰厭涓氬叕鍙?,'闀挎湡鍚堜綔浼欎即锛屼富钀ヤ骇鍝?鑼呭彴銆佷簲绮恫銆侀儙閰掋€侀厭楝奸厭銆佹掣宸炶€佺獤銆佽禆鑼呴厭銆佹硶鍥界孩閰掔瓑','寮犲浗寮?,'13566667777','鍖椾含甯備赴鍙板尯鑲茶姵鍥寳璺?,'010-58858787',1,'2013-03-21 16:52:07','2022-05-10 15:54:53',1,110000),(2,'HB_GYS001','鐭冲搴勫竻鐩婇鍝佽锤鏄撴湁闄愬叕鍙?,'闀挎湡鍚堜綔浼欎即锛屼富钀ヤ骇鍝?楗枡銆佹按楗枡銆佹鐗╄泲鐧介ギ鏂欍€佷紤闂查鍝併€佹灉姹侀ギ鏂欍€佸姛鑳介ギ鏂欑瓑','鐜嬪啗','13309094212','娌冲寳鐪佺煶瀹跺簞鏂板崕鍖?,'0311-67738876',1,'2016-04-13 04:20:40',NULL,NULL,130000),(3,'GZ_GYS001','娣卞湷甯傛嘲棣欑背涓氭湁闄愬叕鍙?,'鍒濇鍚堜綔浼欎即锛屼富钀ヤ骇鍝侊細鑹閲戣疆绫?榫欒疆棣欑背绛?,'閮戠▼鐎?,'13402013312','骞夸笢鐪佹繁鍦冲競绂忕敯鍖烘繁鍗楀ぇ閬?006鍗庝赴澶у帵','0755-67776212',1,'2014-03-21 16:56:07',NULL,NULL,440000),(4,'GZ_GYS002','娣卞湷甯傚枩鏉ュ鍟嗚锤鏈夐檺鍏徃','闀挎湡鍚堜綔浼欎即锛屼富钀ヤ骇鍝侊細鍧氭灉鐐掕揣.鏋滆劘铚滈ク.澶╃劧鑺辫尪.钀ュ吇璞嗚眴.鐗硅壊缇庨.杩涘彛椋熷搧.娴峰懗闆堕.鑲夎劘鑲?,'鏋楀Ξ','18599897645','骞夸笢鐪佹繁鍦冲競绂忛緳宸ヤ笟鍖築2鏍?妤艰タ','0755-67772341',1,'2013-03-22 16:52:07',NULL,NULL,440000),(5,'JS_GYS001','鍏村寲浣崇編璋冨懗鍝佸巶','闀挎湡鍚堜綔浼欎即锛屼富钀ヤ骇鍝侊細澶╃劧棣欒緵鏂欍€侀浮绮俱€佸鍚堣皟鍛虫枡','寰愬浗娲?,'13754444221','姹熻嫃鐪佸叴鍖栧競鏋楁箹宸ヤ笟鍖?,'0523-21299098',1,'2015-11-22 16:52:07',NULL,NULL,320000),(6,'BJ_GYS002','鍖椾含绾崇灏旈鐢ㄦ补鏈夐檺鍏徃','闀挎湡鍚堜綔浼欎即锛屼富钀ヤ骇鍝侊細灞辫尪娌广€佸ぇ璞嗘补銆佽姳鐢熸补銆佹﹦姒勬补绛?,'椹幒','13422235678','鍖椾含甯傛湞闃冲尯鐝犳睙甯濇櫙1鍙锋ゼ','010-588634233',1,'2012-03-21 17:52:07',NULL,NULL,110000),(7,'BJ_GYS003','鍖椾含鍥界伯椋熺敤娌规湁闄愬叕鍙?,'鍒濇鍚堜綔浼欎即锛屼富钀ヤ骇鍝侊細鑺辩敓娌广€佸ぇ璞嗘补銆佸皬纾ㄦ补绛?,'鐜嬮┌','13344441135','鍖椾含澶у叴闈掍簯搴楀紑鍙戝尯','010-588134111',1,'2016-04-13 00:00:00',NULL,NULL,110000),(8,'ZJ_GYS001','鎱堟邯甯傚箍鍜岀豢鑹查鍝佸巶','闀挎湡鍚堜綔浼欎即锛屼富钀ヤ骇鍝侊細璞嗙摚閰便€侀粍璞嗛叡銆佺敎闈㈤叡锛岃荆妞掞紝澶ц挏绛夊啘浜у搧','钖涘湥涓?,'18099953223','娴欐睙鐪佸畞娉㈠競鎱堟邯鍛ㄥ贩灏忓畨鏉?,'0574-34449090',1,'2013-11-21 06:02:07',NULL,NULL,330000),(9,'GX_GYS001','浼樼櫨鍟嗚锤鏈夐檺鍏徃','闀挎湡鍚堜綔浼欎即锛屼富钀ヤ骇鍝侊細鏃ュ寲浜у搧','鏉庣珛鍥?,'13323566543','骞胯タ鍗楀畞甯傜鍘㈠ぇ閬?2-1鍙?,'0771-98861134',1,'2013-03-21 19:52:07',NULL,NULL,450000),(10,'JS_GYS002','鍗椾含鐏ご鍐涗俊鎭妧鏈湁闄愬叕鍙?,'闀挎湡鍚堜綔浼欎即锛屼富钀ヤ骇鍝侊細涓嶉攬閽㈠帹鍏风瓑','闄堝コ澹?,'13098992113','姹熻嫃鐪佸崡浜競娴﹀彛鍖烘郸鍙ｅぇ閬?鍙锋柊鍩庢€婚儴澶у帵A搴?03瀹?,'025-86223345',1,'2013-03-25 16:52:07',NULL,NULL,320000),(11,'GZ_GYS003','骞垮窞甯傜櫧浜戝尯缇庢槦浜旈噾鍒跺搧鍘?,'闀挎湡鍚堜綔浼欎即锛屼富钀ヤ骇鍝侊細娴风坏搴婂灚銆佸潗鍨€侀潬鍨€佹捣缁垫灂澶淬€佸ご鏋曠瓑','姊佸ぉ','13562276775','骞垮窞甯傜櫧浜戝尯閽熻惤娼晣绂忛緳璺?0鍙?,'020-85542231',1,'2016-12-21 06:12:17',NULL,NULL,440000),(12,'BJ_GYS004','鍖椾含闅嗙洓鏃ュ寲绉戞妧','闀挎湡鍚堜綔浼欎即锛屼富钀ヤ骇鍝侊細鏃ュ寲鐜繚娓呮礂鍓傦紝瀹跺眳娲楁钉涓撳崠銆佹礂娑ょ敤鍝佺綉銆佸浣撻櫎闇夊墏銆佸闈㈤湁鑿屾竻闄ゅ墏绛?,'瀛欐','13689865678','鍖椾含甯傚ぇ鍏村尯鏃у','010-35576786',1,'2014-11-21 12:51:11',NULL,NULL,110000),(13,'SD_GYS001','灞变笢璞厠鍗庡厜鑱斿悎鍙戝睍鏈夐檺鍏徃','闀挎湡鍚堜綔浼欎即锛屼富钀ヤ骇鍝侊細娲楄。鐨傘€佹礂琛ｇ矇銆佹礂琛ｆ恫銆佹礂娲佺簿銆佹秷鏉€绫汇€侀鐨傜瓑','鍚存椽杞?,'13245468787','灞变笢娴庨槼娴庡寳宸ヤ笟鍖轰粊鍜岃21鍙?,'0531-53362445',1,'2015-01-28 10:52:07',NULL,NULL,370000),(14,'JS_GYS003','鏃犻敗鍠滄簮鍧ゅ晢琛?,'闀挎湡鍚堜綔浼欎即锛屼富钀ヤ骇鍝侊細鏃ュ寲鍝佹壒閿€','鍛ㄤ竴娓?,'18567674532','姹熻嫃鏃犻敗鐩涘哺瑗胯矾','0510-32274422',1,'2016-04-23 11:11:11',NULL,NULL,320000),(15,'ZJ_GYS002','涔愭憜鏃ョ敤鍝佸巶','闀挎湡鍚堜綔浼欎即锛屼富钀ヤ骇鍝侊細鍚勭涓€侀珮妗ｅ鏂欐澂锛屽鏂欎箰鎵ｆ按鏉紙瀵嗗皝鏉級銆佷繚椴滄澂锛堜繚椴滅洅锛夈€佸箍鍛婃澂銆佺ぜ鍝佹澂','鐜嬩笘鏉?,'13212331567','娴欐睙鐪侀噾鍗庡競涔変箤甯備箟涓滆矾','0579-34452321',1,'2016-08-22 10:01:30',NULL,NULL,330000);
/*!40000 ALTER TABLE `smbms_provider` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `smbms_role`
--

DROP TABLE IF EXISTS `smbms_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `smbms_role` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '涓婚敭ID',
  `roleCode` varchar(15) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '瑙掕壊缂栫爜',
  `roleName` varchar(15) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '瑙掕壊鍚嶇О',
  `createdBy` bigint(20) DEFAULT NULL COMMENT '鍒涘缓鑰?,
  `creationDate` datetime DEFAULT NULL COMMENT '鍒涘缓鏃堕棿',
  `modifyBy` bigint(20) DEFAULT NULL COMMENT '淇敼鑰?,
  `modifyDate` datetime DEFAULT NULL COMMENT '淇敼鏃堕棿',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `smbms_role`
--

LOCK TABLES `smbms_role` WRITE;
/*!40000 ALTER TABLE `smbms_role` DISABLE KEYS */;
INSERT INTO `smbms_role` VALUES (1,'SMBMS_ADMIN','绯荤粺绠＄悊鍛?,1,'2016-04-13 00:00:00',NULL,NULL),(2,'SMBMS_MANAGER','缁忕悊',1,'2016-04-13 00:00:00',NULL,NULL),(3,'SMBMS_EMPLOYEE','鏅€氬憳宸?,1,'2016-04-13 00:00:00',NULL,NULL);
/*!40000 ALTER TABLE `smbms_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `smbms_user`
--

DROP TABLE IF EXISTS `smbms_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `smbms_user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '涓婚敭ID',
  `userCode` varchar(15) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '鐢ㄦ埛缂栫爜',
  `userName` varchar(15) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '鐢ㄦ埛鍚嶇О',
  `userPassword` varchar(15) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '鐢ㄦ埛瀵嗙爜',
  `gender` int(10) DEFAULT NULL COMMENT '鎬у埆锛?:濂炽€?2:鐢凤級',
  `birthday` date DEFAULT NULL COMMENT '鍑虹敓鏃ユ湡',
  `phone` varchar(15) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '鎵嬫満',
  `address` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '鍦板潃',
  `userRole` bigint(20) DEFAULT NULL COMMENT '鐢ㄦ埛瑙掕壊锛堝彇鑷鑹茶〃-瑙掕壊id锛?,
  `createdBy` bigint(20) DEFAULT NULL COMMENT '鍒涘缓鑰咃紙userId锛?,
  `creationDate` datetime DEFAULT NULL COMMENT '鍒涘缓鏃堕棿',
  `modifyBy` bigint(20) DEFAULT NULL COMMENT '鏇存柊鑰咃紙userId锛?,
  `modifyDate` datetime DEFAULT NULL COMMENT '鏇存柊鏃堕棿',
  PRIMARY KEY (`id`),
  UNIQUE KEY `smbms_user_id_uindex` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=678 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `smbms_user`
--

LOCK TABLES `smbms_user` WRITE;
/*!40000 ALTER TABLE `smbms_user` DISABLE KEYS */;
INSERT INTO `smbms_user` VALUES (1,'admin','admin','123456',2,'2023-05-31','13674430565','娌冲寳鐪佸粖鍧婂競骞块槼鍖虹埍姘戜笢閬?33鍙?,1,1,'2023-05-31 20:21:32',1,'2023-05-31 20:21:46'),(2,'jingli','TOM','123',2,'2023-05-31','11111111111','鍚夋灄鐪亁xx鍩?,2,1,'2023-05-31 20:23:21',1,'2023-05-31 20:23:29'),(7,'wangyang','鐜嬫磱','0000000',2,'1982-12-21','13444561124','鍖椾含甯傛捣娣€鍖鸿タ浜屾棗杈夌厡鍥介檯16灞?,3,1,'2014-06-11 19:09:07',NULL,NULL),(8,'zhaoyan','璧电嚂','0000000',1,'1986-03-07','18098764545','鍖椾含甯傛捣娣€鍖哄洖榫欒灏忓尯10鍙锋ゼ',3,1,'2016-04-21 13:54:07',NULL,NULL),(10,'sunlei','瀛欐槑','0000000',2,'1981-01-04','13387676765','鍖椾含甯傛湞闃冲尯绠″簞鏂版湀灏忓尯12妤?,3,1,'2015-05-06 10:52:07',NULL,NULL),(11,'6688','鏉庢枃','0000000',2,'1978-03-12','13367890900','鍖椾含甯傛湞闃冲尯寤哄浗闂ㄥ崡澶ц10鍙?,3,1,'2016-11-09 16:51:17',1,'2023-04-20 18:02:20'),(12,'zhangchen','寮犳櫒','0000000',1,'1986-03-28','18098765434','鏈濋槼鍖虹搴勮矾鍙ｅ寳鏌忔灄鐖变箰涓夋湡13鍙锋ゼ',3,1,'2016-08-09 05:52:37',1,'2016-04-14 14:15:36'),(13,'dengchao','閭撹秴','0000000',2,'1981-11-04','13689674534','鍖椾含甯傛捣娣€鍖哄寳鑸灞為櫌10鍙锋ゼ',3,1,'2016-07-11 08:02:47',NULL,NULL),(14,'yangguo','鏉ㄨ繃','0000000',2,'1980-01-01','13388886623','鍖椾含甯傛湞闃冲尯鍖楄嫅瀹跺洯鑼夎帀鍥?0鍙锋ゼ',3,1,'2015-02-01 03:52:07',NULL,NULL),(15,'zhaomin','璧垫晱','123456',1,'1987-12-04','18099897657','鍖椾含甯傛槍骞冲尯澶╅€氳嫅3鍖?2鍙锋ゼ',2,1,'2015-09-12 12:02:12',NULL,NULL),(34,'fwef','34gs','1212121',1,'2023-05-31','32324','3f43',1,1,'2023-05-31 21:11:11',NULL,'2023-05-31 21:11:20'),(45,'wfew','34f','1212121',1,'2023-05-31','343434','f343',1,1,'2023-05-31 21:11:12',NULL,'2023-05-31 21:11:21'),(677,'121','12','123123',2,'2023-06-21','12312121212',NULL,1,1,'2023-06-03 21:02:12',NULL,NULL);
/*!40000 ALTER TABLE `smbms_user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-10 21:48:38
