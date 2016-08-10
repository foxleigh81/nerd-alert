CREATE TABLE comics (
    id INTEGER UNIQUE,
    added_on TIMESTAMP NOT NULL,
    publisher VARCHAR (255) NOT NULL REFERENCES publishers(id),
    issue_number INTEGER NOT NULL,
    series VARCHAR (255) NOT NULL,
    type INTEGER NOT NULL REFERENCES comic_tyoes(id),
    cover_image VARCHAR(255) NULL, -- Set default later
    barcode VARCHAR(255) NULL,
    variant VARCHAR (255) NULL,
    key_issue BOOL DEFAULT false,
    condition INTEGER REFERENCES comic_condition(id),
    price_on_purchase MONEY NULL,
    contains_issues INTEGER NULL,
    PRIMARY KEY(id)
);
