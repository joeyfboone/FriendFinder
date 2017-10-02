// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// // files where comparison array lives
var friends = require("./app/data/friends.js");


// // logic to pull in API's
var apiRoutes = require("./app/routing/apiRoutes.js");
apiRoutes(app, __dirname);

// logic to determine HTML routes
var htmlRoutes = require("./app/routing/htmlRoutes.js");
htmlRoutes(app, __dirname);


  // Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

