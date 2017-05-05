create database beer;


use beer;



CREATE TABLE beerInfo (
  ID INT NOT NULL,
  name text not null,
  description text NULL,
  foodPairings text NULL,
  originalGravity  int,
  abv decimal NULL,
  ibu integer NULL,
  glasswareId text NULL,
  glass text NULL,
  styleId integer Null,
  style text  not null,
  isOrganic boolean,
  labels text,
  servingTemperature integer,
  servingTemperatureDisplay text,
  status INTEGER,
  statusdisplay text,
  availableId integer null,
  available boolean,
  beerVariationId integer,
  beerVariation text,
  year integer,
  PRIMARY KEY (ID)
);