CREATE TABLE publishers (
    publisher_name VARCHAR(100),
    publisher_slug VARCHAR(100) UNIQUE,
    publisher_url VARCHAR(255),
    publisher_logo VARCHAR(255),
    PRIMARY KEY (publisher_slug)
);

INSERT INTO publishers (publisher_name, publisher_slug, publisher_url, publisher_logo) VALUES ('Image', 'image', 'http://image.com', 'http://placekitten.com/200/200');
INSERT INTO publishers (publisher_slug, publisher_name, publisher_url, publisher_logo) VALUES ('Marvel Comics', 'marvel', 'http://marvel.com', 'http://placekitten.com/200/200');
