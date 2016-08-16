CREATE TABLE comic_types (
    type_slug VARCHAR(100) UNIQUE,
    type_name VARCHAR(100),
    PRIMARY KEY (type_slug)
);

INSERT INTO comic_types (type_slug, type_name) VALUES ('single', 'Single Issue');
INSERT INTO comic_types (type_slug, type_name) VALUES ('graphic_novel', 'Graphic Novel');
INSERT INTO comic_types (type_slug, type_name) VALUES ('compendium', 'Compendium');
