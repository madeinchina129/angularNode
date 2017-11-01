/*
Navicat MySQL Data Transfer

Source Server         : User
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : ctrip

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2017-11-01 17:43:33
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for hcarts
-- ----------------------------
DROP TABLE IF EXISTS `hcarts`;
CREATE TABLE `hcarts` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) DEFAULT NULL,
  `userPhone` varchar(255) DEFAULT NULL,
  `userId` varchar(255) DEFAULT NULL,
  `trainTicketId` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of hcarts
-- ----------------------------
INSERT INTO `hcarts` VALUES ('1', 'wt', '13830452379', '999999', '1');

-- ----------------------------
-- Table structure for pcarts
-- ----------------------------
DROP TABLE IF EXISTS `pcarts`;
CREATE TABLE `pcarts` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) DEFAULT NULL,
  `userPhone` varchar(255) DEFAULT NULL,
  `userId` varchar(255) DEFAULT NULL,
  `ptripsId` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of pcarts
-- ----------------------------
INSERT INTO `pcarts` VALUES ('1', 'wt', '13830452379', '999999', '1');
INSERT INTO `pcarts` VALUES ('2', 'hs', '13830452573', '545646489454', '2');
INSERT INTO `pcarts` VALUES ('3', 'wt', '13830452685', '2365654', '6');

-- ----------------------------
-- Table structure for ptrips
-- ----------------------------
DROP TABLE IF EXISTS `ptrips`;
CREATE TABLE `ptrips` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `startTime` varchar(255) DEFAULT NULL,
  `stopTime` varchar(255) DEFAULT NULL,
  `airportSart` varchar(255) DEFAULT NULL,
  `airportEnd` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `flight` varchar(255) DEFAULT NULL,
  `touristOne` varchar(255) DEFAULT NULL,
  `touristTwo` varchar(255) DEFAULT NULL,
  `priceOne` varchar(255) DEFAULT NULL,
  `priceTwo` varchar(255) DEFAULT NULL,
  `totleTime` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of ptrips
-- ----------------------------
INSERT INTO `ptrips` VALUES ('1', '10', '16', '西安', '上海', '400', 's1', '10', '5', '400', '500', '6');
INSERT INTO `ptrips` VALUES ('2', '9', '22', '南京', '成都', '450', 'G54', '8', '14', '360', '430', '13');

-- ----------------------------
-- Table structure for trainticket
-- ----------------------------
DROP TABLE IF EXISTS `trainticket`;
CREATE TABLE `trainticket` (
  `Id` int(255) NOT NULL,
  `address1` varchar(255) NOT NULL,
  `address2` varchar(255) NOT NULL,
  `trainNum` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `StartTime` varchar(255) NOT NULL,
  `EndTime` varchar(255) NOT NULL,
  `TotalTime` varchar(255) NOT NULL,
  `seat` varchar(255) NOT NULL,
  `comfort` varchar(255) NOT NULL,
  `EndStation` varchar(255) NOT NULL,
  `StartStation` varchar(255) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of trainticket
-- ----------------------------
INSERT INTO `trainticket` VALUES ('0', '西安', '北京', 'Z123', '123', '12:00', '23:00', '11', '有座', '软卧', '西安', '北京');
INSERT INTO `trainticket` VALUES ('1', '西安', '上海', 'G666', '666', '06:00', '12:00', '6', '有座', '二等舱', '西安', '上海');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `userId` int(225) NOT NULL AUTO_INCREMENT,
  `userAccount` varchar(255) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `userAge` int(255) DEFAULT NULL,
  `sex` varchar(255) DEFAULT NULL,
  `passWord` varchar(255) NOT NULL,
  `phone` int(20) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `vip` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('0', null, '张三三', null, null, '123456', '123456', '123456', '123456', null);
INSERT INTO `users` VALUES ('2', null, '王五', null, null, '123456789', null, null, null, null);
INSERT INTO `users` VALUES ('7', null, '张无忌2', null, null, 'e10adc', null, null, null, null);
INSERT INTO `users` VALUES ('8', null, '张无忌3', null, null, 'e10adc3949ba59abbe56e057f20f883e', null, null, null, null);
INSERT INTO `users` VALUES ('9', null, '张无忌4', null, null, 'e10adc3949ba59abbe56e057f20f883e', null, null, null, null);
