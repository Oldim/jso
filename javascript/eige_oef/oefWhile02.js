'use strict';

var toetsenbord = require('readline-sync');

var a = parseInt(toetsenbord.question("Geef een getal1 : "), 10);
var b = parseInt(toetsenbord.question("Geef een getal2 : "), 10);

while (a != b) {
    if (a > b) {
        a -= b
      //  console.log("%s, is de ggd van a en b ", a)
    } else {
        b -= a
      //  console.log("%s, is de ggd van a en b ", b)
    }
    /*
    a = parseInt(toetsenbord.question("Geef een getal1 : "), 10);
    b = parseInt(toetsenbord.question("Geef een getal2 : "), 10);*/
}
console.log("%s, is de ggd van a en b ", b) // of a 't maakt niet uit
console.log("U stopt het programma");
