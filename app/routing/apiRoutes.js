const express = require("express");
const path = require("path");

const app = express();

var userAnswers = [];

function apiStuff(app, __dirname) {
    const friends = require("./../data/friends.js");
    // Show all matches in the arrary
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    //  do logic after user submits form to determine best match
    app.post("/api/new", function (req, res) {

        var toBeat = 50;
        var bestMatch = "";
        var bestImg = "";
        var yourFriend = [];

        // take user inputs and shove them into an array
        var formData = req.body;
        userAnswers.push(formData);

        // // run through the friends array
        for (i = 0; i < friends.length; i++) {
            var differenceArr = [];

            for (s = 0; s < friends[i].scores.length; s++) {
                var diff = 0;
                diffval = Math.abs(formData.scores[s] - friends[i].scores[s]);
                differenceArr.push(diffval);
            }
            for (d = 0; d < differenceArr.length; d++) {
                diff += differenceArr[d];
            }
            // determine if this friend is better than the current lowest score
            if (diff < toBeat) {
                toBeat = diff;
                bestMatch = friends[i].name;
                bestImg = friends[i].photo;
            }
        }
        your.push(bestMatch);
        yourFriend.push(bestImg);
        yourFriend.push(formData.name);
        yourFriend.push(formData.image);
        res.json(yourFriend);
    });
}

module.exports = apiStuff;
