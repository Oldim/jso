'use strict';

var toetsenbord = require('readline-sync');

var lijst = new Array();
var zin = toetsenbord.question("Geef een zin: ");
zin= zin.replace(/[.,';:!?"]/g,"");
var result = "";
if (zin.charAt(i) != "," && zin.charAt(i) != " ") {
    // result = zin.charAt(i);
     result = zin.split(" ");
 }
 console.log(result);

for (var i = 0; i < result.length; i++) {    
    if (lijst[result[i]] == null) lijst[result[i]] = 0;
    lijst[result[i]]++;
}

console.log("Aantal woorden in de zin: %d", result.length);
console.log("Aantal karakters in de zin: %d", zin.length);

for (result in lijst) {  // overloop alle indexen
    console.log("\t%s  \tkomt %d keer voor.", result, lijst[result]);
}