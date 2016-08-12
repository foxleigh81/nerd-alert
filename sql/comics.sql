CREATE TABLE comics (
    id INTEGER UNIQUE,
    added_on TIMESTAMP NOT NULL,
    publisher INTEGER REFERENCES publishers(id),
    issue_number INTEGER NOT NULL,
    series VARCHAR (255) NOT NULL,
    type INTEGER REFERENCES comic_types(id),
    cover_image VARCHAR(255) NULL, -- Set default later
    barcode VARCHAR(255) NULL,
    variant VARCHAR (255) NULL,
    key_issue BOOL DEFAULT false,
    condition INTEGER REFERENCES comic_condition(id),
    price_on_purchase NUMERIC(10,2) NULL,
    contains_issues INTEGER ARRAY,
    PRIMARY KEY(id)
);

INSERT INTO comics (id, added_on, publisher, issue_number, series, type, cover_image, barcode, variant, key_issue, condition, price_on_purchase) VALUES (1, TIMESTAMP '2011-05-16 15:36:38', 1, 17, 'Crossed + One Hundred', 1, 'http://placekitten.com/200/300', '2002300799', NULL, false, 1, £3.50);
