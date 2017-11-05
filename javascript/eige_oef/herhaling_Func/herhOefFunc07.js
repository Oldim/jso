'use strict';

var toetsenbord = require('readline-sync');


var wisk = toetsenbord.question("Geef een examenresultaten  wiskunde: ");
var boek = toetsenbord.question("Geef een examenresultaten  boekhouden : ");
var info = toetsenbord.question("Geef een examenresultaten  informatica : ");
var som="";
var melding="";

function wiskPunten(wisk) {    
    while (wisk < 0 || wisk > 10) {
        wisk = toetsenbord.question("Geef een examenresultaten  wiskunde: ");
    }
    return parseInt(wisk);
}

function boekPunten(boek) {
    
    while (boek < 0 || boek > 10) {
        boek = toetsenbord.question("Geef een examenresultaten  boekhouden: ");
    }
    return parseInt(boek);
}

function infoPunten(info) {
    
    while (info < 0 || info > 10) {
        info = toetsenbord.question("Geef een examenresultaten  informatica: ");
    }
    return parseInt(info);
}


if (isNaN(wiskPunten(wisk)) || isNaN(boekPunten(boek)) || isNaN(infoPunten(info))) {
    console.log("Er zijn geen getallen ingevoerd.");
}

function berekenSom(som){
    return boekPunten(boek)+infoPunten(info);
}

function toonMelding(melding) {
	if ((wiskPunten(wisk)>=6) && (berekenSom(som)>=12)) {
		console.log("Geslaagd!");
	}
	else {
		switch (melding) {
			case wiskPunten(wisk)<6: console.log("Onvoldoende voor Wiskunde"); break;
			case berekenSom(som)<12: console.log("Te weinig voor boek en info."); break;
        }
        
	}
}
console.log(toonMelding(melding));

console.log(berekenSom(som));