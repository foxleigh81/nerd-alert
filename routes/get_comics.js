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

    //TODO: Refactor 'end' into a DRY format

    // Get all comics in the database
    router.route('/get_comics').get(function(req, res) {
      let results = [];
      // SQL Query > Select Data
      let query = client.query('SELECT c.*, p.publiser_name as publisher, ct.type_name as type FROM comics c JOIN publishers p ON (publisher = p.publisher_slug) JOIN comic_types ct ON (type = ct.type_slug) ORDER BY c.comic_id ASC;');
      // Stream results back one row at a time
      query.on('row', function(row) {
        results.push(row);
      });
      // After all data is returned, close connection and return results
      query.on('end', function() {
        done();
        if (results.length) {
          return res.json(results);
        } else {
          return res.json({
            message: 'No results found'
          });
        }
      });
    })

  // Get all comics tied to a particular user
  router.route('/get_comics/:username').get(function(req, res) {
    let results = [],
        user = req.params.username;

    // SQL Query > Select Data
    let query = client.query('SELECT c.*, cs.series_name as series, uc.date_added, uc.price_on_purchase, cc.condition_name as condition, uc.signed, uc.comments, p.publisher_name as publisher, ct.type_name as type FROM comics c JOIN user_comics uc ON (c.comic_id = uc.uc_id) JOIN publishers p ON (publisher = p.publisher_slug) JOIN comic_types ct ON (type = ct.type_slug) JOIN comic_series cs ON (series = cs.series_slug) JOIN comic_condition cc ON (uc.condition = cc.condition_slug) WHERE (uc.user_name = \''+ user +'\') ORDER BY c.comic_id ASC;');

    // Stream results back one row at a time
    query.on('row', function(row) {
      results.push(row);
    });
    // After all data is returned, close connection and return results
    query.on('end', function() {
      done();
      if (results.length) {
        return res.json(results);
      } else {
        return res.json({
          message: 'No results found'
        });
      }

    });
  })
  });

  return router;
})();
