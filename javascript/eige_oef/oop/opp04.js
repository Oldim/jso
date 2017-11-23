'use strict';



var toetsenbord = require('readline-sync');

function Rekening(beginjaar, eindjaar, rente, startbedrag) {
    this.beginjaar = beginjaar;
    this.eindjaar = eindjaar;
    this.rente = rente;
    this.startbedrag = startbedrag;

}

Rekening.prototype.renteBedrag = function () {
    var jaarVersch = this.jaarVersch();
    var renteBedrag = this.startbedrag;
    for (var i = 1; i <= jaarVersch; i++) {
        renteBedrag += (renteBedrag * this.rente) / 100;
    }
    return renteBedrag;
};

Rekening.prototype.jaarVersch = function () {
    return this.eindjaar - this.beginjaar;
};

Rekening.prototype.eindbedrag = function () {
    var eindbedrag = this.renteBedrag();
    return eindbedrag;
};

var rekening = new Rekening(2000, 2010, 4, 1000);
console.log("%d EUR belegd tegen %d%% in %d geeft in het jaar %d als eindbedrag %d",
    rekening.startbedrag, rekening.rente, rekening.beginjaar, rekening.eindjaar, rekening.eindbedrag());

console.log(rekening.renteBedrag());
