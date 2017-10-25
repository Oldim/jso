'use strict';

var toetsenbord = require('readline-sync');
var aantal=0;
var som= 0;

for (var i = 1; i <= 5; i++) {
    var getal = parseInt(toetsenbord.question("Geef geheel getal "+i+" : "), 10);
    if(isNaN(getal)){
        getal = parseInt(toetsenbord.question("Geef geheel getal "+i+" : "), 10);
    }else{
       som += getal; 
    }
    //console.log(getal);
    
}
console.log("De som is %s", som);