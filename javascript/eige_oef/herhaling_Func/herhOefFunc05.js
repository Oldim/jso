'use strict';

var toetsenbord = require('readline-sync');
var trap = parseFloat(toetsenbord.question("Geef huidige bonus-malus: "), 10);
var ongeval = parseFloat(toetsenbord.question("Geef aantal ongevallen: "), 10);

function malustrap(trap) {
    switch (true) {
        case ongeval == 0:
            trap-=1;
            break;
        case ongeval == 1:
            trap +=2;
            break;
        default:
            trap+=3*ongeval-1;
    }
    return trap;
}

console.log(" ");
var result ="bonus-malustrap: "+ malustrap(trap);
if(malustrap(trap)>=18){
    console.log(result);
    console.log("Je moet andere verzekeringsmaatschappij zoeken")
}else{
    console.log(result);
}




