"use strict";
var sass = require("node-sass");
var fs = require("fs");
console.log("Ik wacht op wijzingen....");
fs.watch('scss/style.scss', null, function (event, filename) {
    if (event == "change") {
        sass.render(
            {
                file: "scss/style.scss",
                outputStyle: "expanded",
                sourceComments: true
            }, function (error, result) {
                if (!error) {
                    fs.writeFile('css/style.css', result.css, function (error) {
                        if (!error) {
                            console.log("Klaar!");
                        } else {
                            console.log("Fout bij schrijven: " + error);
                        }
                    })
                } else {
                    console.log("Er was een fout bij het lezen van het bestand: " + error);
                }
            });
    }
});

