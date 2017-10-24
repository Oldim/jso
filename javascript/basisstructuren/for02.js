'use strict';

var toetsenbord = require('readline-sync');
var tekst = toetsenbord.question("Geef een tekst: ");
var teller = 0;
for (var i = 0; i < tekst.length; i++) {
    if (tekst.charAt(i) == 'i') teller++; // als i=0 dan charAt begin vanaf 0 (1ste character) te tellen, als i=1 dan charAt begin vanaf 1 (2de character)
}
console.log("De letter \"i\" komt " + teller + " maal voor");