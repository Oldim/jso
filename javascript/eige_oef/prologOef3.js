'use strict';

var rente = 0.4;
var bedragT = 0;
var toetsenbord = require('readline-sync');
var maxKaupthing= 20000;

var naamB = toetsenbord.question("Geef naam vd bank: ");
var bedrag = parseFloat(toetsenbord.question("Geef de bedrag: "), 10);
bedragT =bedrag + rente;
if(naamB.toLowerCase()=="kaupthing" && bedrag>=maxKaupthing){
    console.log("%s geeft maar %d EUR terug ",naamB, maxKaupthing);
}else{
    console.log("%s geeft %d EUR terug.", naamB, bedrag);
}
