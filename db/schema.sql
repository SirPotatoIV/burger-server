-- Gets rid of the hamberders_database if it already exists --
DROP DATABASE IF EXISTS hamberders_database;
-- Creates the hamberders_database --
CREATE DATABASE hamberders_database;

-- Causes all following code to use the hamberders_database --
USE hamberders_database;

-- Sequelize creates the table when server.js is ran, but the homework README said to have a schema.sql so I included the table just in case. --
-- Create the hamberders table in the hamberders_database --
CREATE TABLE hamberders (
    id INTEGER NOT NULL AUTO_INCREMENT,
    hamberder_name VARCHAR(30) NOT NULL ,
    devoured BOOLEAN DEFAULT false NOT NULL,
    createdAt DATETIME DEFAULT now() NOT NULL,
    updatedAt DATETIME DEFAULT now() NOT NULL,
    PRIMARY KEY(id)
)
