//'use strict';

//var getal=0;
var toetsenbord = require('readline-sync');
var bovengrens = parseFloat(toetsenbord.question("Geef de bovengrens: "), 10);

var getal1 = geefGetal();
var getal2 = geefGetal();

function geefGetal() {
    var getal = Math.random();
    getal *= bovengrens;
    getal = Math.floor(1 + getal);
    return getal;
}
console.log("willekeurig getal:  %d", getal1);
console.log("willekeurig getal2:  %d", getal2);


// var product = parseFloat(toetsenbord.question("Geef de product van " + getal1 + " en " + getal2 + ": "), 10);
// var ok= true;
// function evalueerProduct(getal1,getal2,ok) {    
//     while (product != (getal1 * getal2)) {
//         product = parseFloat(toetsenbord.question("Geef de product van " + getal1 + " en " + getal2 + ": "), 10);
//     }
//     return ok;
//     if(ok==true){
//         return ok;
//     }else{
//         return ok;
//     }
// }

// evalueerProduct(getal1,getal2,ok) ;
// console.log(ok);
var product = parseFloat(toetsenbord.question("Geef de product van " + getal1 + " en " + getal2 + ": "), 10);

function evalueerProduct(getal1,getal2,product) {   
    if(product != (getal1 * getal2)){
        return false;
    }else{
        return true;
    }
}


function toonMeldingBijUitkomst(ok) {
    if(evalueerProduct(getal1,getal2,product)==1){
        ok="true"
    }else{
        ok="false"
    }
    return ok;

}

console.log(toonMeldingBijUitkomst());




function toonMeldingBijTotaal(){
    
}