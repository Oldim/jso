'use strict';
var toetsenbord = require('readline-sync');

var eenheden = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
var tientallen = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
var honderdtallen = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
var duizendtallen = ["", "M", "MM"];

/* TODO: 
Vraag aan de gebruiker een jaartal tussen 0 (excl) en 2100 (incl). 
Schrijf een functie om te controleren of het ingevoerde gegeven een getal is 
en tussen 0 (excl) en 2100 (incl) ligt.
Het programma moet een andere foutmelding tonen als het ingetikte gegeven geen getal is
dan wanneer het ingetikte gegeven wel een getal is maar buiten de grenzen ligt. 
Het script mag pas verder gaan als de gebruiker een geldig getal ingetikt heeft. 
(Invoer blijven vragen als dit niet het geval is.) 
*/

/* TODO:
Schrijf een functie die van een gegeven getal de voorstelling in Romeinse cijfers teruggeeft.
Gebruik deze functie om op het einde van het script te tonen 
<jaar> is in Romeinse cijfers <romeins> 
waarbij <jaar> het ingetikte jaar is 
en <romeins> dat jaar in Romeinse cijfers.

*/

function isGeldigJaar(jaar){
    return !isNaN(jaar) && isFinite(jaar) && jaar > 0 && jaar <= 2100;
}

function arabischNaarRomeins(jaar){
    if(isGeldigJaar(jaar)){
        var indexEenheden, indexTientallen, indexHonderdtallen, indexDuizendtallen;
        indexDuizendtallen = Math.floor(jaar / 1000);
        jaar -= indexDuizendtallen * 1000;
        indexHonderdtallen = Math.floor( jaar / 100);
        jaar -= indexHonderdtallen * 100;
        indexTientallen = Math.floor(jaar/10);
        jaar -= indexTientallen * 10;
        indexEenheden = jaar;
        return duizendtallen[indexDuizendtallen]  +
         honderdtallen[indexHonderdtallen] +
         tientallen[indexTientallen] + eenheden[indexEenheden];
    }
    return "";
}

var jaar = toetsenbord.question('Tik een jaar (1-2100) in: ');
while(!isGeldigJaar(jaar)){
    if(isNaN(jaar)){
        jaar = toetsenbord.question('Tik een getal in als jaar aub (1-2100): ');
    }
    else{
        jaar = toetsenbord.question('Tik een getal tussen 1 (incl) en 2100 (incl) in als jaar aub: ');
    }
}
console.log("%d is in Romeinse cijfers %s", jaar, arabischNaarRomeins(jaar));