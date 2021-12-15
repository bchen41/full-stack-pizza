-- keep only this part
DROP DATABASE IF EXISTS pizza_db;
CREATE DATABASE pizza_db;
USE pizza_db;

-- reference for model/sequelize(GET/POST)
DROP DATABASE IF EXISTS pizza_db;
CREATE DATABASE pizza_db;
USE pizza_db;

CREATE TABLE users (
id INT NOT NULL auto_increment primary key,
email VARCHAR(100) NOT NULL,
password VARCHAR(100) NOT NULL
);

CREATE TABLE orders (
id INT NOT NULL auto_increment primary key,
created_at DATETIME NOT NULL,
user_id INT NOT NULL,
FOREIGN KEY (user_id) REFERENCES users(id)
ON DELETE CASCADE
);

CREATE TABLE reviews (
id INT NOT NULL auto_increment primary key,
review TEXT NOT NULL,
user_id INT NOT NULL,
FOREIGN KEY (user_id) REFERENCES users(id)
ON DELETE CASCADE
);

CREATE TABLE pizzas (
id INT NOT NULL auto_increment primary key,
order_id INT NOT NULL,
addons_ids JSON NOT NULL 
);

CREATE TABLE addons (
id INT NOT NULL auto_increment primary key,
addon_name varchar(100) NOT NULL,
addon_type VARCHAR(100) NOT NULL,
price decimal(18,2) NOT NULL,
calories INT NOT NULL
);

