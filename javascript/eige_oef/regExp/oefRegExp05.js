// terzijde: zie juiste regel voor geboortejaren voor en na 2000 op
// https://nl.wikipedia.org/wiki/Rijksregisternummer
// -> laatste 2 cijfers van rrn vormen controlegetal
// Noem getal bestaande uit eerste 9 cijfers g, dan geldt
// ALS het controlegetal gelijk is aan 97 - (g % 97)
// DAN is de persoon geboren voor 2000
// ANDERS is de persoon geboren in 2000 of later
'use strict';

var toetsenbord = require('readline-sync');


function controleRekening() {
    var laatsteCijf = bankRek.substr(5, 14);
    var controleGetal = parseInt(bankRek.substr(12, 14));
    if (bankRek.match(/^(be|BE)\d{2}\s\d{4}\s\d{4}\s\d{4}$/) != null) {
        console.log("Dit zou een IBANrek kunnen zijn.");
        //var laatsteCijf= bankRek.match(/[0-9]+$/)[0];
        if (controleGetal % 97==controleGetal){
            laatsteCijf += 111400;
            laatsteCijf = laatsteCijf.replace(/\s/g, "");
            laatsteCijf = parseInt(laatsteCijf);
            laatsteCijf = laatsteCijf / 97 - 98;
        }

        console.log(laatsteCijf);
    } else {
        console.log("Dit is geen Iban rek nr.");
    }
}

var bankRek = toetsenbord.question("Belgisch IBAN-nummer: ");

controleRekening(bankRek);