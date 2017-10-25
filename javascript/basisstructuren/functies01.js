'use strict';

var toetsenbord = require('readline-sync');
var getal = toetsenbord.question('Tik een getal in: ');

// berekenen van faculteit van getal
var resultaat = 1;
for (var i = 2; i <= getal; i++) {
    resultaat *= i;
}

console.log(resultaat);

//functiedeclaratie

function faculteit(x) {
    var result = 1;
    for (var j = 2; j <= x; j++) {
        result *= j;
    }
    return result;
}


//functie oproepen:

resultaat = faculteit(getal);
console.log(resultaat)