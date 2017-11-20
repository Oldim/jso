'use strict';

var toetsenbord = require('readline-sync');

var result = "";
var zin = toetsenbord.question("Geef een zin: ");


function kommaToevoegen(){
    result = zin.replace(/[,]/g, ", ");
    return result;
}

console.log(kommaToevoegen());