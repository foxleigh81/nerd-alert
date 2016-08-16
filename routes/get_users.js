module.exports = ( function () {
  'use strict';
  let express = require('express'),
      router = express.Router(),
      pg = require('pg'),
      connectionString = require('../connection.js');

  pg.connect(connectionString, function(err, client, done) {
    //handle errors
    if(err) {
      done();
      console.log(err);
    }

    // Get all users in the database
    router.route('/get_users').get(function(req, res) {
      let results = [];
      // SQL Query > Select Data
      let query = client.query('SELECT * from site_users ORDER BY user_name ASC;');
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
