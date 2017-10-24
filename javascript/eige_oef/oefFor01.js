'use strict';


//var startgetal = 99;
var recipient = "bottle";
var inhoud = "beer";
var noB = "No more";
for (var i = 9; i >= 1; i--) {
    if (i <= 0) {
        console.log(i+" " + recipient+"s of " + inhoud + " on the wall, " + i+ " " + recipient+"s of " +inhoud+".");
        console.log("Take one down and pass it around, "+ (i-1)+" " + recipient+"s of " + inhoud + " on the wall.");
    }
    else {
        console.log(i+" " + recipient+"s of " + inhoud + " on the wall, " + i+ " " + recipient+"s of " +inhoud+".");
        console.log("Take one down and pass it around, "+noB+" " + recipient+"s of " + inhoud + " on the wall.");
    }
    
}
console.log(noB+" " + recipient+"s of " + inhoud + " on the wall, " +noB+ " " + recipient+"s of " +inhoud+".");
console.log("Take one down and pass it around, "+ noB+" " + recipient+"s of " + inhoud + " on the wall.");
