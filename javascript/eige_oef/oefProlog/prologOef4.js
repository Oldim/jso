'use strict';

var toetsenbord = require('readline-sync');
var aantal = parseInt(toetsenbord.question("Geef de aantal sterretjes: "), 10);
var spatie=" ";
var icon= "*";
for (var i = 1; i <= aantal; i++) {
    console.log(icon);
    for (var j = 0; j < i; j++) {
        console.log(spatie);
      }
}