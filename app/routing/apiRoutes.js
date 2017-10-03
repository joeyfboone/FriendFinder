const express = require("express");
const path = require("path");

const app = express();

var userAnswers = [];
var your = [];

function apiExport(app, __dirname) {
    var friends = require("./../data/friends.js");
    // Show all matches in the array
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    //  do logic after user submits form to determine best match
    app.post("/api/new", function (req, res) {

        var score = 50;
        var bestMatch = "";
        var bestImg = "";
        var yourFriend = [];

        // take user inputs and shove them into an array
        var formData = req.body;
        userAnswers.push(formData);

        // // run through the friends array
        for (i = 0; i < friends.length; i++) {
            var differenceArray = [];

            for (s = 0; s < friends[i].scores.length; s++) {
                var diff = 0;
                var diffval = Math.abs(formData.scores[s] - friends[i].scores[s]);
                differenceArray.push(diffval);
            }
            for (d = 0; d < differenceArray.length; d++) {
                diff += differenceArray[d];
            }
            // determine if this friend is better than the current lowest score
            if (diff < score) {
                score = diff;
                bestMatch = friends[i].name;
                bestImg = friends[i].photo;
            }
        }
        your.push(bestMatch);
        yourFriend.push(bestImg);
        yourFriend.push(formData.image);
        yourFriend.push(formData.name);
        res.json(yourFriend);
    });
}

module.exports = apiExport;
