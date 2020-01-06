-- Gets rid of the hamberders_database if it already exists --
DROP DATABASE IF EXISTS hamberders_database;
-- Creates the hamberders_database --
CREATE DATABASE hamberders_database;

-- Causes all following code to use the hamberders_database --
USE hamberders_database;

-- Create the hamberders table in the hamberders_database --
CREATE TABLE hamberders (
    id INTEGER NOT NULL AUTO_INCREMENT,
    hamberder_name VARCHAR(30) NOT NULL ,
    devoured BOOLEAN DEFAULT false NOT NULL,
    PRIMARY KEY(id)
)
