'use strict';

var toetsenbord = require('readline-sync');

var eur = 1;
var bef = 40.3399;
function BEFNaarEuro(eur) {
    var result;
    result = bedrag / bef;
    return result;
}
function EuroNaarBEF(bef) {
    var result;
    result = bedrag * bef;
    return result;
}
var bedrag = toetsenbord.question("Geef  bedrag in Euro: ");
console.log(EuroNaarBEF(bef)+" BEF");