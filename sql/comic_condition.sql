CREATE TABLE comic_condition (
    condition_slug VARCHAR(100) UNIQUE,
    condition_name VARCHAR(100),
    PRIMARY KEY (condition_slug)
);

INSERT INTO comic_condition (condition_slug, condition_name) VALUES ('new', 'NEW');
INSERT INTO comic_condition (condition_slug, condition_name) VALUES ('excellent', 'USED - Excellent');
INSERT INTO comic_condition (condition_slug, condition_name) VALUES ('good', 'USED - Good');
INSERT INTO comic_condition (condition_slug, condition_name) VALUES ('fair', 'USED - Fair');
INSERT INTO comic_condition (condition_slug, condition_name) VALUES ('poor', 'USED - Poor');
