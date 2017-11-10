'use strict';

var toetsenbord = require('readline-sync');

var gordijnMaat = [60, 90, 120, 150, 200 ];
var breedte  =parseInt(toetsenbord.question("Geef een geheel breedte v/eRaam: "),10) ;

function breedteRaam(gordijnMaat) { 
    return gordijnMaat >= breedte;
}

console.log("Uw raam is %d cm, dus ik heb gordijnen van %d cm nodig",breedte, gordijnMaat.find(breedteRaam)); 

