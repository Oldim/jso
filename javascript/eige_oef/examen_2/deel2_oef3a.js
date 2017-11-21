'use strict';

var toetsenbord = require('readline-sync');

function pigLatin(tekst) {
    var nieuweTekst = "";
    for (var i = 0; i < tekst.length; i++) {
        if (tekst.search(/p/i) != null) {
            nieuweTekst = tekst.replace(/(^|\s+)/gi, "$1p");
        }
    }
    return nieuweTekst;
}


var tekst = toetsenbord.question("Geef een tekst: ");
var pigLatin = pigLatin(tekst);
console.log(tekst + " wordt: "+ pigLatin);