'use strict';

var toetsenbord = require('readline-sync');

var lijst = ["Jan", "Piet", "Joris","Corneel"];
var omzet = new Array(lijst.length);
var j;
omzet.fill(0); //alle vakjes met '0' invullen
var naam  = toetsenbord.question("Geef een naam of type einde: ");

    while (naam != "einde") { 
        j= lijst.indexOf(naam);
        if(j>-1){
            var  bedrag = parseFloat(toetsenbord.question("Geef een bedrag: "));
            omzet[j]+=bedrag;
        } else{
            console.log("Ongeldige naam");
        }  
        naam = toetsenbord.question("Geef een naam of type einde: ");
    }


