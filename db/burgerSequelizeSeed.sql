USE burgerSequlize_db;

INSERT INTO burgers (burger_name, devoured, createdAt, updatedAt ) VALUES ('regular', false,0,0);

INSERT INTO customers (customer_name , createdAt, updatedAt) VALUES("CUST1",0,0);

UPDATE burgers
SET CustomerId = 1
WHERE id = 1;

