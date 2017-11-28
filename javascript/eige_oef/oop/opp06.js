'use strict';

var toetsenbord = require('readline-sync');

function Begroting() {
    this.inkomsten = [];
    this.uitgaven = [];
}

Begroting.prototype.voegInkomstToe= function (inkomstBedrag) {
    this.inkomsten.push(inkomstBedrag);
};

Begroting.prototype.voegUitgaveToe = function (uitgaafBedrag) {
    this.uitgaven.push(uitgaafBedrag);
};

Begroting.prototype.presenteerBegroting = function () {
    var tekst = "Uitgaven:\n";
    for (var i = 0; i < this.uitgaven.length; i++) {
        tekst += "-" + this.uitgaven[i] + "\n";
    }
    tekst += "Inkomsten:\n";
    for (var i = 0; i < this.inkomsten.length; i++) {
        tekst += this.inkomsten[i] + "\n";
    }
    var verschil = this.berekenVerschil();
    if (verschil < 0) {
        tekst +=  -verschil + "\n";
    }
    tekst += "De begroting is in evenwicht.\n";
    return tekst;
};

Begroting.prototype.berekenVerschil = function () {
    var totaalInkomsten = 0;
    for (var i = 0; i < this.inkomsten.length; i++) {
        totaalInkomsten += this.inkomsten[i];
    }
    var totaalUitgaven = 0;
    for (var i = 0; i < this.uitgaven.length; i++) {
        totaalUitgaven += this.uitgaven[i];
    }
    return totaalInkomsten - totaalUitgaven;
};

var begroting = new Begroting();
for (var i = 1; i <= 3; i++) {
    var inkomstBedrag = parseFloat(toetsenbord.question('Geef inkomsten in :'));
    var uitgaafBedrag = parseFloat(toetsenbord.question('Geef uitgave in :'));
    begroting.voegInkomstToe(inkomstBedrag);
    begroting.voegUitgaveToe(uitgaafBedrag);
};

console.log("inkomsten: " + begroting.presenteerBegroting());
