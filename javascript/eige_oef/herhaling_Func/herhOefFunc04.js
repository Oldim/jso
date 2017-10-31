'use strict';

var toetsenbord = require('readline-sync');

var jaar = parseFloat(toetsenbord.question("Geef een gegeven jaar: "), 10);

function schrikkeljaar(schrikkel) {
    // var schrikkel = "";
    // if (((jaar % 4) == 0) && ((jaar % 100) != 0)) {
    //     console.log("schrik");
    // } else {
    //     console.log("Notschrik");
    // }
    // return schrikkel;



    return schrikkel%4 == 0 && schrikkel%100 != 0 ;

}

var schrikkeljaar = schrikkeljaar(jaar) ? "ja" : "nee";

//var schrikkeljaar = schrikkeljaar();



console.log(" ");
var result = "\tJaar\tSchrikkeljaar?\n\t" + jaar + "\t" + schrikkeljaar;
console.log(result);