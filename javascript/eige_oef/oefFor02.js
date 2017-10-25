'use strict';

var tafel = 0;
var product = null;
var oneven = 1;
while (tafel++ < 5) {
    if (oneven % 2 == 0 || (oneven % 2 != 0 && tafel % 2 != 0)) {
        for (var i = 1; i <= 10; i++) {
            product = i * tafel;
            console.log(i + " x " + tafel + " = " + product);
        }
        console.log();
    }
}

