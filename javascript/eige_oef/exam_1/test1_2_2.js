'use strict';

var toetsenbord = require('readline-sync');
var maxSnelheid = 50;

function mijlenNaarKm(afstand_in_mijlen) {
    var afstand_in_km = afstand_in_mijlen * 0.62137;
    return afstand_in_km;
}
var invoer = toetsenbord.question("Voer 'k','K','m' of 'M' : ");
function leesEenheid(invoer) {
    
    while (invoer != 'k' && invoer != 'K' && invoer != 'm' && invoer != 'M') {
        invoer = toetsenbord.question("Voer 'k','K','m' of 'M' : ");
    }
    return invoer;
}
var snelheid = parseFloat(toetsenbord.question("Geef je snelheid: "), 10);
function boeteBijSnelheidsovertreding(boete) {
    var boete = "";
    
    var overtreding = snelheid - maxSnelheid;
    switch (true) {
        case overtreding < 1:
            boete = 0;
            break;
        case overtreding <= 10:
            boete += 50;
            break;
        case overtreding <= 30:
            boete += 50+ (overtreding - 10)*10;
            break;
        default:
            boete = 'dagvaardig';
    }
    return boete;
   

}
if (leesEenheid(invoer) == 'k' || leesEenheid(invoer) == 'K') {
    console.log("%s km/u rijden, waar een snelheidsbeperking van %s, kost= %s EUR",snelheid, maxSnelheid, boeteBijSnelheidsovertreding());
} else {
    console.log("%s miles/u rijden, waar een snelheidsbeperking van %s, kost= %s EUR",snelheid, maxSnelheid, boeteBijSnelheidsovertreding());
}

// hoofdprogramma
console.log("");

var invoer = toetsenbord.question("Voer 'k','K','m', 'M' : ");
while (invoer != 'k' && invoer != 'K' && invoer != 'm' && invoer != 'M') {
    
    invoer = toetsenbord.question("Voer 'k','K','m' of 'M' : ");
    var maxSnelheid = parseFloat(toetsenbord.question("Geef je maxSnelheid: "), 10);
    var snelheid = parseFloat(toetsenbord.question("Geef je snelheid: "), 10);
    var result= boeteBijSnelheidsovertreding();
}
console.log(result);

if (leesEenheid(invoer) == 'k' || leesEenheid(invoer) == 'K') {
    console.log("%s km/u rijden, waar een snelheidsbeperking van %s, kost= %s EUR",snelheid, maxSnelheid, result);
} else {
    console.log("%s miles/u rijden, waar een snelheidsbeperking van %s, kost= %s EUR",snelheid, maxSnelheid, result);
}