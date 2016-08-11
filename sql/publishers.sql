CREATE TABLE publishers (
    id INTEGER UNIQUE,
    name VARCHAR(100),
    url VARCHAR(255),
    logo VARCHAR(255),
    PRIMARY KEY (id)
);

INSERT INTO publishers (id, name, url, logo) VALUES (1, 'Image', 'http://image.com', 'http://placekitten.com/200/200');
INSERT INTO publishers (id, name, url, logo) VALUES (2, 'Marvel', 'http://marvel.com', 'http://placekitten.com/200/200');
