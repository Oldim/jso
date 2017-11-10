'use strict';

var toetsenbord = require('readline-sync');

var cursisten = [];

var minKeer=0;
var positie="";
var j;
// while((lengte!= "") || (minKeer<10)){
//     cursisten.push(lengte);
//     minKeer++;
//     lengte  = toetsenbord.question("Geef een lengte: ")
// }

for(var i=0; i<9;i++){
    var lengte  = toetsenbord.question("Geef een lengte: ");
    cursisten.push(lengte);
}
positie  =parseInt(toetsenbord.question("Geef een positie: "));
j = cursisten.indexOf(positie);
if (j > -1) {
    console.log(cursisten[positie]);
}
else {
    console.log("foutmelding");
}