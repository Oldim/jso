/*
Breid het Number object uit met een functie pad(num, size, char) die een 
doorgegeven getal num vooraan aanvult met het doorgegeven karakter kar tot het doorgegeven lengte size heeft. 
Het volgende statement moet waarde ‘0012’ aan s toekennen. 
var s = Number.pad(12,4,’0’);
*/


function Number(num, size, char) {
	var geboorteJaar = this.getYear();
	var geboorteMaand = this.getMonth();
	var geboorteDag = this.getDate();
	var vandaagJaar = datum.getYear();
	var vandaagMaand = datum.getMonth();
	var vandaagDag = datum.getDate();
	var leeftijd = vandaagJaar - geboorteJaar;
	if (geboorteMaand > vandaagMaand) {
		leeftijd--;
	} else if (geboorteMaand == vandaagMaand) {
		if (geboorteDag > vandaagDag) {
			leeftijd--;
		}
	}
	return leeftijd;
}

Date.prototype.geefLeeftijd = geefLeeftijd;
var geboorteDatum = new Date(2000, 11, 11);  // 11 december 2000
var refDatum = new Date(2017, 11, 10);  // 10 december 2017
console.log("op ", refDatum.toLocaleDateString("nl-BE"), " is deze persoon ",
	geboorteDatum.geefLeeftijd(refDatum), " jaar oud");