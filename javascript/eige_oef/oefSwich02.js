'use strict';

var punten;
var toetsenbord = require('readline-sync');

punten = toetsenbord.question('Geef punten:  ');

punten = parseInt(punten);
if (punten >= 0 && punten <= 20) {
    switch (punten) {
        case (punten < 10):
            console.log("%s is onvoldoende", punten);
            break;
        case (punten >= 10 && punten <14):
            console.log("%s is voldoende", punten);
            break;
        case (punten >= 14 && punten <16):
            console.log("%s is onderscheiding", punten);
            break;
        case (punten >= 16 && punten <18):
            console.log("%s is grote onderscheiding", punten);
            break;
        default:
            console.log("%s is grootste onderscheiding", punten);
    }
} else {
    console.log("Punten mogen tussen '0' en '20' zijn.")
}