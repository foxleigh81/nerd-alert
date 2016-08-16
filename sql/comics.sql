CREATE TABLE comics (
    comic_id INTEGER UNIQUE,
    publisher VARCHAR(100) REFERENCES publishers(publisher_slug),
    issue_number INTEGER NOT NULL,
    series VARCHAR(100) references comic_series(series_slug),
    type VARCHAR(100) REFERENCES comic_types(type_slug),
    cover_image VARCHAR(255) NULL, -- Set default later
    barcode VARCHAR(255) NULL,
    variant VARCHAR (255) NULL,
    key_issue BOOL DEFAULT false,
    PRIMARY KEY(comic_id)
);

INSERT INTO comics (comic_id, publisher, issue_number, series, type, cover_image, barcode, variant, key_issue) VALUES (1, 'image', 17, 'crossed100', 'single', 'http://placekitten.com/200/300', '82002300799817031', NULL, false);
