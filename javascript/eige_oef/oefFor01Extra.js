'use strict';

var toetsenbord = require('readline-sync');

var recipient = "bottles";
var counter = null;
var inhoud = "beer";
var result;
var ant = toetsenbord.question("Moet er liedje getoond worden, 'j' of 'J' : ");
while (ant == "j" || ant == "J") {
    var nwCount = toetsenbord.question("Geef nieuwe startgetal : ");
    counter = nwCount;
    for (counter; counter >= 1; counter--) {
        if (counter == 1) {
            recipient = 'bottle';
        }
        result = counter + " " + recipient + " of " + inhoud + " on the wall,";
        console.log("Take one down and pass it around, " + result);
        if (counter < 99) {
            console.log("");
            console.log(result + counter + " " + recipient + " of " + inhoud + ".");
        }
        if (counter == 1) {
            console.log("Take one down and pass it around, no more bottles of " + inhoud);
        }
    }
    console.log("");
    console.log("No more bottles of " + inhoud + " on the wall, no more bottles of " + inhoud + ".")
    console.log("Go to the store and buy some more, 99 " + recipient + "s of " + inhoud + " on the wall.");
    console.log("");
    ant = toetsenbord.question("nogmaals tonen, 'j' of 'J' : ");

}
console.log("Toch bedankt");

