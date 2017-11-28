'use strict';



var toetsenbord = require('readline-sync');

function Begroting() {
    this.inkomsten = [];
    this.uitgaven = [];
}

Begroting.prototype.voegInkomstToe= function (inkomstBedrag) {
    var totaalInkomst;
    for (var i = 0; i < this.inkomsten.length; i++) {
        totaalInkomst += this.inkomsten[i];
    }
    this.inkomsten[i] = inkomstBedrag;
    return totaalInkomst;
};


Begroting.prototype.voegUitgaveToe = function (uitgaven) {
    var totaalUitgave;
    for (var i = 0; i < this.uitgaven.length; i++) {
        totaalUitgave += this.uitgaven[i];
    }
    this.uitgaven[i] = uitgaafBedrag;
};


Begroting.prototype.presenteerBegroting = function () {
    console.log("\tUitgaven: " + this.uitgaven + "\n\tInkomsten: " + this.inkomsten);
};

var begroting = new Begroting();
for (var i = 1; i <= 3; i++) {
    var inkomstBedrag = parseFloat(toetsenbord.question('Geef inkomsten in :'));
    var uitgaafBedrag = parseFloat(toetsenbord.question('Geef uitgave in :'));
    begroting.voegInkomstToe(inkomstBedrag);
}



//delete auto2.snelheid;
console.log("inkomsten: " + begroting.voegInkomstToe());
