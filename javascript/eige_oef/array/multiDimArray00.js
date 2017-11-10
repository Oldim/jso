'use strict';

const AANTALRIJEN =4, AANTALKOLOMMEN= 3;

var speelbord = new Array(AANTALRIJEN);

for(var i=0; i<speelbord.lenth; i++){
    speelbord[i]= new Array(AANTALKOLOMMEN);
}

for(var rij=0; rij< speelbord.length; rij++){ //rijen overlopen
    for(var kolom= 0;kolom < speelbord[rij].length;kolom++){ // kolommen overlopen
        speelbordspeelbord[rij][kolom]=rij+" "+ kolom;
    }
}

// array op scherm tonen
for(rij=0; rij<speelbord.length;rij++){
    for(kolom=0; kolom < speelbord[rij].length; kolom++){
        result += speelbord[rij][kolom+"\t"]
    }
}
console.log(speelbord);