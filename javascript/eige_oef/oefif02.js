'use strict';

var leeftijd, naam;
var toetsenbord = require('readline-sync');

naam = toetsenbord.question('Geef je naam:  ');
leeftijd = toetsenbord.question('Geef je leeftijd:  ');

if (leeftijd > 14) {
	console.log("Sorry, deze pagina is enkel voor kinderen");
} else {
	console.log("Welkom " + naam);
}