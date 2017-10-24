'use strict';

var toetsenbord = require('readline-sync');
var mj = 0;
var mo = 0;
var vj = 0;
var vo = 0;

var geslacht = toetsenbord.question("Geef een geslacht, 'm' of 'v' : ");

while (geslacht == 'm' || geslacht == 'v') {
    var leeftijd = parseInt(toetsenbord.question("Geef je leeftijd : "), 10);

    if (geslacht == 'm' && leeftijd < 25) {
        mj++;
    } else if (geslacht == 'm' && leeftijd >= 25) {
        mo++;
    }
    if (geslacht == 'v' && leeftijd < 25) {
        vj++;
    } else if (geslacht == 'v' && leeftijd >= 25) {
        vo++;
    }
    geslacht = toetsenbord.question("Geef een geslacht, 'm' of 'v' : ");

}
console.log("leeftijd " + "<25 >= 25");
console.log("mannen " + mj + ' ' + mo);
console.log("vrouwen " + vj + ' ' + vo);




