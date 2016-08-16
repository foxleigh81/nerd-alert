CREATE TABLE site_users (
    user_name VARCHAR(50) UNIQUE NOT NULL,
    joined_on TIMESTAMP,
    password VARCHAR(20),
    PRIMARY KEY (user_name)
);

INSERT INTO site_users (user_name, joined_on, password) VALUES ('alexward1981', TIMESTAMP '2011-05-16 15:36:38', '123456');
