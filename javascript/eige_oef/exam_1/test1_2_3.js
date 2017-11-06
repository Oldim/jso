'use strict';

var toetsenbord = require('readline-sync');

//var gewicht = parseFloat(toetsenbord.question("Geef je gewicht: "), 10);

// function geefGewicht(gewicht) {
// 	return gewicht;
// }
// function geefScore(score) {
// 	return score;
// }

// var score = parseFloat(toetsenbord.question("Geef je score: "), 10);
// for (teller = 1; teller <= 5; teller++) {



// 	geefGewicht(gewicht);
//     geefScore(score)

// 	uitkomst = parseInt(toetsenbord.question("Hoeveel is " + getal1 + " x " + getal2 + "? "));
// 	juist = evalueerProduct(getal1, getal2, uitkomst);
// 	toonMeldingBijUitkomst(juist);
// 	if (juist) {
// 		aantalJuist++;
// 	}
// }function averageCalculator (numvalues) {
    var examens=5;
function geefGewicht() {   
    var result1=null;
    for (var i = 1; i < examens; i++) {
        var gewicht = parseFloat(toetsenbord.question("Geef je gewicht: "), 10); 
             
    }
    return gewicht;
    
}
function geefScore() {    
    for (var i = 1; i < examens; i++) {
        var score = parseFloat(toetsenbord.question("Geef je score: "), 10);        
    }
    return score
}
function berekenGem(){
    var gem= geefGewicht()*geefScore();
    return gem;
}

console.log(" ");
var result = berekenGem();
console.log(result);
