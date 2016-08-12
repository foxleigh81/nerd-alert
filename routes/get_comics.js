module.exports = ( function () {
  'use strict';
  var express = require('express'),
      router = express.Router(),
      pg = require('pg'),
      connectionString = require('../connection.js'),
      results = [];

  pg.connect(connectionString, function(err, client, done) {
    //handle errors
    if(err) {
      done();
      console.log(err);
    }

    router.route('/get_comics')
    .get(function(req, res) {
      // SQL Query > Select Data
      var query = client.query('SELECT comics.id, comics.issue_number, comics.series, comic_condition.name as condition, comics.cover_image, comics.barcode, comics.variant, comics.key_issue, publishers.name as publisher, comic_types.name as type FROM comics JOIN publishers ON (publisher = publishers.id) JOIN comic_types ON (type = comic_types.id) JOIN comic_condition ON (condition = comic_condition.id) ORDER BY comics.id ASC;');
      // Stream results back one row at a time
      query.on('row', function(row) {
        results.push(row);
      });
      // After all data is returned, close connection and return results
      query.on('end', function() {
        done();
        return res.json(results);
      });
    })
  });
  return router;
})();
