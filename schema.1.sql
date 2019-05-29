products-- Drops the animals_db if it exists currently --
DROP DATABASE IF EXISTS bamazon;
-- Creates the "animals_db" database --
CREATE DATABASE bamazon;

-- Makes it so all of the following code will affect animals_db --
USE bamazon;

-- Creates the table "people" within animals_db --
CREATE TABLE products (
item_id INTEGER auto_increment NOT NULL,
product_name VARCHAR(30) NOT NULL,
department_name VARCHAR(30) NOT NULL,
product_price DECIMAL(10,2) NOT NULL,
stock_quantity INTEGER(10) NOT NULL,
primary key (item_id)
);

-- Creates new rows containing data in all named columns --
INSERT INTO products (product_name, department_name, product_price, stock_quantity)
VALUES ("Fridge", "Appliances", 900.00, 10);

INSERT INTO products (product_name, department_name, product_price, stock_quantity)
VALUES ("Stove", "Appliances", 500.00, 5);

INSERT INTO products (product_name, department_name, product_price, stock_quantity)
VALUES ("Toaster", "Appliances", 45.00, 11);

INSERT INTO products (product_name, department_name, product_price, stock_quantity)
VALUES ("Dish Washer", "Appliances", 500.00, 10);


