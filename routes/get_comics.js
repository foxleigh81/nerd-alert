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
      var query = client.query('SELECT c.*, cc.name as condition, p.name as publisher, ct.name as type FROM comics c JOIN publishers p ON (publisher = p.id) JOIN comic_types ct ON (type = ct.id) JOIN comic_condition cc ON (condition = cc.id) ORDER BY c.id ASC;');
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
