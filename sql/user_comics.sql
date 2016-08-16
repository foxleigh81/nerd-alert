  CREATE TABLE user_comics (
    uc_id INTEGER,
    user_name VARCHAR(255) REFERENCES site_users(user_name),
    comic_id INTEGER REFERENCES comics(id),
    date_added TIMESTAMP,
    price_on_purchase NUMERIC(10,2) NULL,
    condition INTEGER REFERENCES comic_condition(id),
    signed BOOLEAN,
    comments TEXT
  );

INSERT INTO user_comics (uc_id, user_name, comic_id, date_added, price_on_purchase, condition, signed, comments) VALUES (1, 'alexward1981', 1, TIMESTAMP '2011-05-16 15:36:38', 3.50, 1, FALSE, '');
