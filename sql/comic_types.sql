CREATE TABLE comic_types (
    id INTEGER UNIQUE,
    name VARCHAR(100),
    PRIMARY KEY (id)
); 

INSERT INTO comic_types (id, name) VALUES (1, 'Single Issue');
INSERT INTO comic_types (id, name) VALUES (2, 'Graphic Novel');
INSERT INTO comic_types (id, name) VALUES (3, 'Compendium');
