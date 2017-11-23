'use strict';

var toetsenbord = require('readline-sync');

function TV2() {
    this.post = post;
    this.uur = uur;
}

TV2.prototype.getProgramma = function () {
    if (this.post == 0) {
        switch (true) {
            case this.uur < 18:
                return " Tik Tak";
                break;
            case this.uur > 19:
                return "K3 in het Sportpaleis";
                break;
            default:
                return "Samson en Gert ";
        };

    } else if (this.post == 1) {
        switch (true) {
            case this.uur < 19:
                return " sport";
                break;
            case this.uur > 20:
                return " sport";
                break;
            default:
                return "voetbal";
        };

    };
};

var tv = new TV2();
tv.post = 1;
tv.uur = 21;
var programma = tv.getProgramma();
console.log("Op post %d spelen ze '%s'", tv.post, programma);
var post = parseInt(toetsenbord.question("Geef post 0/1: "));
var uur = parseInt(toetsenbord.question("Geef uur: "));
tv.post = post;
tv.uur = uur;
programma = tv.getProgramma();
console.log("Op post %d spelen ze '%s'", tv.post, programma);
