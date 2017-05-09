CREATE DATABASE `txbeerdb`;

use txbeerdb;

CREATE TABLE `texasbeers` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `abv` decimal(10,4),
  `ibu` decimal(10,4),
  `style` varchar(60),
  `ounces` int(11) DEFAULT NULL,
  `brewery_id` int(11) DEFAULT NULL,
  `image` varchar(120),
   PRIMARY KEY (`id`)
);

CREATE TABLE `texasbreweries` (
  `id` int(11) NOT NULL,
  `brewery_id` int(11) DEFAULT NULL,
  `name` varchar(100) NOT NULL,
  `city` varchar(100) NOT NULL,
  `state` varchar(2),
   PRIMARY KEY (`id`)
);
