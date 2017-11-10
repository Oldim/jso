'use strict';

var toetsenbord = require('readline-sync');

var cursisten = [];
var positie;
var j;
var sum=0;
for(var i=0; i<9;i++){
    var lengte  =parseInt(toetsenbord.question("Geef een lengte: "),10) ;
    cursisten.push(lengte);
    sum +=  cursisten[i];
}
j = cursisten.indexOf(Math.min.apply(null, cursisten));
console.log("Gemiddelde lengte"+ (sum/cursisten.length));
console.log("Lengte: "+Math.min.apply(null, cursisten)+" positie: "+(j+1)+" van de kleinste cursist.");
