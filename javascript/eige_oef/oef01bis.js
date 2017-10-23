'use strict';
var loon, loonvr, nwloon;
var toetsenbord = require('readline-sync');

loon = toetsenbord.question('Geef loon in:  ');
loonvr = toetsenbord.question('Geef loonverhoging in:  ');

loon= parseFloat(loon);
loonvr=parseFloat(loonvr);
nwloon=loon +loonvr;
console.log('oude loon: ' + loon + ' en nieuwe loon: ' + nwloon);
console.log('oude loon: %s en nieuwe loon %s', loon, nwloon); //alternatief schrijfwijze