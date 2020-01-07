-- There are also seeders and migrations for sequelize-cli, but the homework said to have a seeds.sql file, so I created it just in case.

USE hamberders_database;
-- Creates new rows containing data in all named columns --
-- https://www.mysqltutorial.org/mysql-datetime/ --
INSERT INTO hamberders (hamberder_name, devoured, createdAt, updatedAt)
VALUES ("Refried Bean", false, now(), now());

INSERT INTO hamberders (hamberder_name, devoured, createdAt, updatedAt)
VALUES ("Chili Cheese and Peanut Butter", false, now(), now());

INSERT INTO hamberders (hamberder_name, devoured, createdAt, updatedAt)
VALUES ("Good Berder", true, now(), now());