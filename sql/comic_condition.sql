CREATE TABLE comic_condition (
    id INTEGER UNIQUE,
    name VARCHAR(100),
    PRIMARY KEY (id)
);

INSERT INTO comic_condition (id, name) VALUES (1, 'NEW');
INSERT INTO comic_condition (id, name) VALUES (2, 'USED - Excellent');
INSERT INTO comic_condition (id, name) VALUES (3, 'USED - Good');
INSERT INTO comic_condition (id, name) VALUES (4, 'USED - Fair');
INSERT INTO comic_condition (id, name) VALUES (5, 'USED - Poor');
