'use strict';

var toetsenbord = require('readline-sync');

var a = parseFloat(toetsenbord.question("Geef de getal a: "), 10);
var b = parseFloat(toetsenbord.question("Geef de getal b: "), 10);
var c = parseFloat(toetsenbord.question("Geef de getal c: "), 10);


function discriminant(a, b, c) {
    var tweedegraadsver = Math.pow(b, 2) - 4 * a * c;
    return tweedegraadsver;
}

var discriminant = discriminant(a, b, c);;
// console.log("discriminant= " + discriminant);
function aantalNulpunten() {
    var aantalNulpunten = "";
    switch (true) {
        case discriminant < 0:
            aantalNulpunten = "0";
            break;
        case discriminant == 0:
            aantalNulpunten = "1";
            break;
        default:
            aantalNulpunten = "2";
    }
    return aantalNulpunten;
}
var nulp = aantalNulpunten();;

console.log(" ");
var result = "\ta\tb\tc\tdiscriminant\taantalNulpunten\n\t" + a + "\t" + b + "\t" + c + "\t" + discriminant + "\t \t" + nulp;
console.log(result);