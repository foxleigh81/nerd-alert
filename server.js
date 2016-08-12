var express = require('express'),
    app = express(),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Serve static files from release folder
app.use(express.static(__dirname+'/build/release'));

// Set listen port
var port = process.env.PORT || 8080;

// Routes for our API
var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
  'use strict';
  // do logging
  console.log('Api Accessed at: '+ Date.now());
  next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res, next) {
  'use strict';
  res.json({ message: 'hooray! welcome to our api!' });
  next();
});

// Load external routes
var GetComicsRoute = require('./routes/get_comics');

// Register routes
app.use('/api/v1', router);
app.use('/api/v1', GetComicsRoute);

// As our api has a version prefix, notify the user if the attempt to access the api without versioning
app.get('/api', function (request, response){
  'use strict';
  response.sendFile(path.resolve(__dirname+'/build/release', 'api-notice.html'))
})

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response){
  'use strict';
  response.sendFile(path.resolve(__dirname+'/build/release', 'index.html'))
})

app.listen(port, function () {
  'use strict'
  console.log('App is listening on port ' + port);
});

// Connect to database (postgresql)
