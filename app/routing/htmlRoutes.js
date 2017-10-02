var express = require("express");
var path = require("path");

var app = express();

function showPage(app, __dirname) {
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "/app/public/home.html"));
    });

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "/app/public/survey.html"));
    });

 // NEED TO create default for 404 error   
//    app.use(function(req, res, next){
//    res.status(404).render('404_error_template', {title: "Sorry, page not found"});
//});
}

module.exports = showPage;