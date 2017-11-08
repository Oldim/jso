'use strict';

var toetsenbord = require('readline-sync');

var namen = [];
var naam  = toetsenbord.question("Geef een naam: ");
var minKeer=0;
var positie="";
var j;
while((naam!= "") || (minKeer<10)){
    namen.push(naam);
    minKeer++;
    naam  = toetsenbord.question("Geef een naam: ")
}
positie  =parseInt(toetsenbord.question("Geef een positie: "));
j = namen.indexOf(positie);
if (j > -1) {
    console.log(namen[positie]);
}
else {
    console.log("foutmelding");
}