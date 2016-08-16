CREATE TABLE comic_series (
  series_slug VARCHAR(255) UNIQUE,
  series_name VARCHAR(255),
  series_aliases TEXT,
  series_publisher VARCHAR(100) references publishers(publisher_slug)
);

INSERT INTO comic_series (series_slug, series_name, series_aliases, series_publisher) VALUES ('crossed100', 'Crossed + 100', 'Crossed One Hundred, Crossed 100, Crossed Plus 100, Crossed Plus One Hundred', 'image');
