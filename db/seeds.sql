-- used for reference/sample database to GET/POST (to be deleted)
INSERT INTO users (email, password)
VALUES
("b@email.com", "password");

INSERT INTO orders (created_at, user_id)
VALUES
(now(), 1);

INSERT INTO reviews (review, user_id)
VALUES 
("full stack pizza is amazing!", 1);

INSERT INTO pizzas (order_id, addons_ids)
VALUES
(1, "[1, 2, 4, 6, 7]");

INSERT INTO addons (addon_name, addon_type, price, calories)
VALUES 
('standard', 'pizza', 9, 0),
('thin', 'crust', 0.5, 100),
('regular', 'crust', 0, 150),
('marinara', 'sauce', 0, 50),
('white', 'sauce', 0, 80),
('onion', 'topping', 0, 10),
('sausage', 'topping', 1, 60);