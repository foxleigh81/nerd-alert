CREATE TABLE comics (
    id INTEGER UNIQUE,
    publisher INTEGER REFERENCES publishers(id),
    issue_number INTEGER NOT NULL,
    series VARCHAR (255) NOT NULL,
    type INTEGER REFERENCES comic_types(id),
    cover_image VARCHAR(255) NULL, -- Set default later
    barcode VARCHAR(255) NULL,
    variant VARCHAR (255) NULL,
    key_issue BOOL DEFAULT false,
    contains_issues INTEGER ARRAY,
    PRIMARY KEY(id)
);

INSERT INTO comics (id, publisher, issue_number, series, type, cover_image, barcode, variant, key_issue) VALUES (1, 1, 17, 'Crossed + One Hundred', 1, 'http://placekitten.com/200/300', '2002300799', NULL, false);
