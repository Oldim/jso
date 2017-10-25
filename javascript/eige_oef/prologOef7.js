'use strict';

var toetsenbord = require('readline-sync');
const BELEGING = 100;
var aandel= 3.75;
var aantal = parseInt(toetsenbord.question(" hoeveel aandelen Fortis wilt u kopen?: "), 10);
//var aanBedrag=aantal*aandel;
//var bedragRest= BELEGING-aanBedrag;
function aanBedrag(bedrag){
    var aanBedrag=aantal*aandel;
    return aanBedrag;
}
function bedragRest(bedrag){
    var bedragRest= BELEGING-aanBedrag(aantal);
    return bedragRest;
}
while(bedragRest(aantal)>=1){
    console.log("U heeft al gekocht voor %s EUR", aanBedrag(aantal));
    console.log("De huidige waarde van uw portefeuille is: %s",bedragRest(aantal));
    aantal = parseInt(toetsenbord.question(" hoeveel aandelen Fortis wilt u kopen?: "), 10);
}
console.log("Uw geld is op");
//console.log(aanBedrag(aantal));
//console.log(bedragRest(aantal));