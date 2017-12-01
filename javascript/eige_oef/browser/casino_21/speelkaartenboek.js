'use strict';
var kleur = ["harten ", "schoppen", "klaveren", "ruiten"];
function Speelkaart(kleur, waarde) {
    this.kleur = kleur;
    this.waarde = waarde;
    //this.afbeelding= afbeelding;

};
function Speelkaartenboek() {
    this.speelkaarten = []; //52 kaarten
    this.index = index; // om elke kaart een index geven en als volgende moet komen index verhogen met 1

    for (var j = 0; j < 4; j++) {
        for (var i = 0; i < 13; i++) {
            var waarde = i + 1;
            this.speelkaarten.push(new Speelkaart(kleur[j], waarde));
           // console.log(this.speelkaarten[i].omschrijving());
        }
    }
};

Speelkaart.prototype.omschrijving = function () {
    return this.kleur + ' ' + this.waarde;
};

var klaverenDrie = new Speelkaart("klaveren", "3");
console.log(klaverenDrie.omschrijving());

// schoppen
// harten
// klaveren
// ruiten
// for (var j = 0; j < 3; j++) {

//     for (var i = 0; i < 12; i++) {

//     }
// }


//console.log(new Speelkaartenboek());


Speelkaartenboek.prototype.schud = function (old_index, new_index) {
    if (new_index >= this.length) {
        var k = new_index - this.length;
        while ((k--) + 1) {
            this.push(undefined);
        }
    }
    this.splice(new_index, 0, this.splice(old_index, 1)[0]);
    return this; // for testing purposes
};
;



Speelkaartenboek.prototype.volgendeKaart = function () {
    // return this[++this.current];

    this.index =  this.speelkaarten.indexOf(this.waarde);
    if ( this.speelkaarten >= 0 && this.index <  this.speelkaarten.length - 1)
        var nextItem =  this.speelkaarten[index + 1]
};

Speelkaartenboek.prototype.isLeeg = function () {
    console.log("alle kaarten zijn uigespeeld");

};











var kaartenboek = new Speelkaartenboek();



//console.log(kaartenboek.volgendeKaart());
console.log("boek na creatie:");


for (var i = 0; i < kaartenboek.speelkaarten.length; i++) {
    console.log(kaartenboek.speelkaarten[i].omschrijving());
}
if (kaartenboek.isLeeg()) {
    console.log("*** alle kaarten zijn opgevraagd ***");
}
else {
    console.log("*** er zijn nog niet opgevraagde kaarten ***"); // YEP
}
console.log("kaarten een voor een vragen na creatie:");
for (var i = 0; i < kaartenboek.speelkaarten.length; i++) {
    console.log(kaartenboek.volgendeKaart().omschrijving());
}
// if (kaartenboek.isLeeg()) {
//     console.log("*** alle kaarten zijn opgevraagd ***");  // YEP
// }
// else {
//     console.log("*** er zijn nog niet opgevraagde kaarten ***");
// }
// kaartenboek.schud();  //start terug met volledig boek en schud de kaarten
// if (kaartenboek.isLeeg()) {
//     console.log("*** alle kaarten zijn opgevraagd ***");
// }
// else {
//     console.log("*** na schudden starten we terug met een volledig boek ***"); // YEP
// }
//  console.log("kaarten een voor een vragen na schudden:");
// for (var i = 0; i < kaartenboek.speelkaarten.length; i++) {
//     console.log(kaartenboek.volgendeKaart().omschrijving());
// }