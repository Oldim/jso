'use strict';

var toetsenbord = require('readline-sync');

var getal1 = toetsenbord.question('Geef getal 1 in:  ');
var getal2 = toetsenbord.question('Geef getal 2 in:  ');

getal1= parseInt(getal1);
getal2=parseInt(getal2);

console.log('Het product van %s en %s' , getal1, getal2, 'is', getal1*getal2);
