'use strict';

var toetsenbord = require('readline-sync');
var som = 0;
var i= 0;
var getal = parseFloat(toetsenbord.question("Geef een getal (<0 om te stoppen): "), 10);
while (getal >= 0) {
    som = som + getal;
    i++;
    getal = parseFloat(toetsenbord.question("Geef geheel getal (<0 om te stoppen): "), 10);
}
if(getal <0){
    console.log("U stopt het programma");
}else{
console.log("Het gem is %d",  som/i);
}