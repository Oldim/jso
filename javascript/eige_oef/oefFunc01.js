'use strict';
/*
var toetsenbord = require('readline-sync');

var getal1, getal2;
getal1 = toetsenbord.question("Geef 1ste getal: ");
getal2 = toetsenbord.question("Geef 2de getal: ");
function max(getal1,getal2){
    var maximum;
    if(getal1>getal2){
        maximum= getal1;
    } else{
        maximum=getal2;
    }
    return maximum;
}
console.log(max(getal1, getal2));
*/
var toetsenbord = require('readline-sync');

var getal1, getal2,getal3, nwMax;
getal1 = toetsenbord.question("Geef 1ste getal: ");
getal2 = toetsenbord.question("Geef 2de getal: ");
getal3 = toetsenbord.question("Geef 3de getal: ");
function max(getal1,getal2){
    var maximum;
    if(getal1>getal2){
        maximum= getal1;
    } else{
        maximum=getal2;
    }
    return maximum;
}
if(getal3>max(getal1,getal2)){
    nwMax= getal3;
}else{
    nwMax= max(getal1,getal2);
}
//result= max(getal1,getal2);
console.log(nwMax);