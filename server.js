// Dependencies
// =============================================================
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// files where comparison array lives
var friends = require("./app/data/friends.js");


// logic to pull in API's
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

