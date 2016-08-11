CREATE TABLE site_users (
    user_name VARCHAR(50) UNIQUE NOT NULL,
    joined_on TIMESTAMP,
    comic_list INTEGER ARRAY,
    PRIMARY KEY (user_name)
);

INSERT INTO site_users (user_name, joined_on, comic_list) VALUES ('alexward1981', TIMESTAMP '2011-05-16 15:36:38', '{}');
