'use strict';


var toetsenbord = require('readline-sync');
var dagenWeek = 5;


function Werknemer(naam) {
    this.naam = naam;
    this.werkuren = [];
}

Werknemer.prototype.aantalOveruren = function () {
    var totaalUren = 0;
    for (var i = 0; i < this.werkuren.length; i++) {
        totaalUren += this.werkuren[i];
    }

    if (totaalUren < 37) {
        console.log("Minder dan 37 uur gewerkt !")
    }
    var overuren = totaalUren - 37;
    return overuren;

};

Werknemer.prototype.wijzigWerkuren = function (dag,uren) {
    this.werkuren[i - 1] = uren;
   //this.werkuren[dag] = uren;
};

var werkNermer = new Werknemer("John");

for (var i = 1; i <= dagenWeek; i++) {
    var uren = parseFloat(toetsenbord.question('Geef aantal uren in dag '+ i+' :'));
    werkNermer.wijzigWerkuren(i,uren);
}

//werkNermer.wijzigWerkuren();
console.log("aantal overuren: " + werkNermer.aantalOveruren());







