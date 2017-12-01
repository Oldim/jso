'use strict';

function Speelkaart(kleur,waarde) {
    this.kleur = kleur;
    this.waarde = waarde;
   // this.afbeelding= afbeelding;
};
function SpeelkaartBoek() {
    this.speelkaarten = []; //52 kaarten
    this.index= index; // om elke kaart een index geven en als volgende moet komen index verhogen met 1
};


Speelkaart.prototype.omschrijving = function () {
    return this.kleur+' '+ this.waarde;
};






var klaverenDrie = new Speelkaart("klaveren", "3");
console.log(klaverenDrie.omschrijving());

