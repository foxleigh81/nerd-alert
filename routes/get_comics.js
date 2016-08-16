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

    // Get all comics in the database
    router.route('/get_comics').get(function(req, res) {
      let results = [];
      // SQL Query > Select Data
      let query = client.query('SELECT c.*, p.name as publisher, ct.name as type FROM comics c JOIN publishers p ON (publisher = p.id) JOIN comic_types ct ON (type = ct.id) ORDER BY c.id ASC;');
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

  // Get all comics tied to a particular user
  router.route('/get_comics/:username').get(function(req, res) {
    let results = [],
        user = req.params.username;

    // SQL Query > Select Data
    let query = client.query('SELECT c.*, uc.date_added, uc.price_on_purchase, cc.name as condition, uc.signed, uc.comments, p.name as publisher, ct.name as type FROM comics c JOIN user_comics uc ON (c.id = uc.uc_id) JOIN publishers p ON (publisher = p.id) JOIN comic_types ct ON (type = ct.id) JOIN comic_condition cc ON (uc.condition = cc.id) WHERE (uc.user_name = \'alexward1981\') ORDER BY c.id ASC;');

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
