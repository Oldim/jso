'use strict';



var toetsenbord = require('readline-sync');

function Auto(snelheid, aantalUren, aantalMinuten) {
    this.snelheid = snelheid;
    this.aantalUren = aantalUren;
    this.aantalMinuten = aantalMinuten;
}

Auto.prototype.afstand = function () {
    var toMin = this.aantalUren * 60 + this.aantalMinuten;
    var toKmMin = this.snelheid / 60;
    var afstand = toKmMin * toMin;
    return afstand;
};

var auto = new Auto();

auto.snelheid = 60;
auto.aantalUren = 2;
auto.aantalMinuten = 5;

console.log("Na %d:%s auto gereden te hebben tegen %d km/uur heb je %d km afgelegd",
    auto.aantalUren, auto.aantalMinuten < 10 ? "0" + auto.aantalMinuten : auto.aantalMinuten, auto.snelheid, auto.afstand());
var auto2 = new Auto(60, 2, 30);
console.log("Na %d:%s auto2 gereden te hebben tegen %d km/uur heb je %d km afgelegd",
    auto2.aantalUren, auto2.aantalMinuten < 10 ? "0" + auto2.aantalMinuten : auto2.aantalMinuten, auto2.snelheid, auto2.afstand());

delete auto2.snelheid;
console.log(auto2);
