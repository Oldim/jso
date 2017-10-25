'use strict';

var toetsenbord = require('readline-sync');
var som= 0;

for (var i = 1; i <= 5; i++) {
    var getal = toetsenbord.question("Geef geheel getal "+i+" : ");
    while(isNaN(getal)){
        getal = toetsenbord.question("Geef geheel getal "+i+" : ");
    }
    som += parseInt(getal);
    //console.log(getal);
    
}
console.log("De som is %s", som);