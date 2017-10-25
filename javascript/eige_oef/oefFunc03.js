'use strict';

var toetsenbord = require('readline-sync');



function celsius(celsius) {
    var C = 5.0 / 9.0 * (gradenF - 32);
    return C;
}
function fahrenheit(fahrenheit) {
    var F = 9.0 / 5.0 * (gradenC + 32);
    return F;
}
//var C = toetsenbord.question("Geef  graden celsius: ");

var gradenC = toetsenbord.question("Geef  graden celsius: ");
console.log("Graden fahrenheit is " + fahrenheit(fahrenheit));
var gradenF = toetsenbord.question("Geef  graden fahrenheit: ");
console.log("Graden celsius is " + celsius(celsius));