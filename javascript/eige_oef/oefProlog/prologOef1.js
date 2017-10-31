'use strict';

var rente = 0.4;
var bedragT = 0;
var toetsenbord = require('readline-sync');

var naamB = toetsenbord.question("Geef naam vd bank: ");
var bedrag = parseFloat(toetsenbord.question("Geef de bedrag: "), 10);
bedragT = bedrag + rente;
console.log("Bij %s bedraagt het rentebedrag %s EUR. Het totaalbedrag is %d EUR.", naamB, rente, bedragT);