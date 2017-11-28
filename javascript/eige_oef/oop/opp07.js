'use strict';

var toetsenbord = require('readline-sync');
var aantalKoers = 4;
var koers;
var minAantal = 0;
function Fortis() {
    this.koersen = [];
}

Fortis.prototype.voegKoers = function (koers) {
    this.koersen.push(koers);
};

Fortis.prototype.geefMaxCoupon = function () {
    var totaalKoers = 0;
    var aantalKeer = 0;
    for (var i = 0; i < 4; i++) {
        totaalKoers += this.koersen[i];
        aantalKeer++;
    }
    var gem = totaalKoers / aantalKeer;
    var maximumbedrag = 10 - gem;
    return maximumbedrag;
};

var fortis = new Fortis();
// for (var i = 1; i <= aantalKoers; i++) {
//     var koers = parseFloat(toetsenbord.question('Geef koers in :'));
//     fortis.voegKoers(koers);
// };

while ((minAantal < 4) || (koers != "stop")) {
    koers = toetsenbord.question('Geef koers in :');
    if (koers != "stop") {
        fortis.voegKoers(parseFloat(koers));
        minAantal++;
    }
}

console.log("koers: " + fortis.geefMaxCoupon());
