CREATE TABLE site_users (
    user_name VARCHAR(50) UNIQUE NOT NULL,
    joined_on TIMESTAMP,
    comic_list INTEGER,
    PRIMARY KEY (user_name)
)
