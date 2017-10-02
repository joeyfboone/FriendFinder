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

}

module.exports = showPage;