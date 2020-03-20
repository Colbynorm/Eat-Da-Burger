CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers_db
(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);