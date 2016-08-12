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
      var query = client.query('SELECT * FROM comics ORDER BY id ASC;');
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
