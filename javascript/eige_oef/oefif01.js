'use strict';

var bedrag;
var toetsenbord = require('readline-sync');

bedrag = toetsenbord.question('Hoeveel heb ik op zak:  ');
if (bedrag > 5) {
	console.log("Voor mij een ijsje met 3 bollen en slagroom aub");
} else {
	console.log("Ik zal wel een platte water drinken");
}