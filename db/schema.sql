-- drops db if already exists --
DROP DATABASE IF EXISTS burgers_db;
-- creates a dabase called burgers_db --
CREATE DATABASE burgers_db;

-- use burgers_db for the following --
USE burgers_db;

CREATE TABLE burgers (
-- gives id a number for each row created --
id INT AUTO_INCREMENT NOT NULL,
-- creates a sring column --
burger_name VARCHAR(100) NOT NULL,
-- creates a boolean for devoured --
devoured BOOLEAN,
-- sets id as the tables primary key --
PRIMARY KEY (id)
);