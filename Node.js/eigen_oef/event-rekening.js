'use strict';

var events = require('events');
var eventEmitter = new events.EventEmitter();

function Rekening(saldo) {
    this.saldo = saldo;
    this.eventEmitter = new events.EventEmitter();
}

Rekening.prototype.stortGeld = function (bedrag) {
    this.saldo = this.saldo + bedrag;
}

Rekening.prototype.haalGeldAf = function (bedrag) {
    if (bedrag < this.saldo) {
        this.saldo = this.saldo - bedrag;
    }else{
        // var src =new Rekening(this.saldo);
        // eventEmitter.emit('saldo_negatief', src); 
        // -------------- of ----
        eventEmitter.emit('saldo_negatief', this); 
     }
}

Rekening.prototype.on = function (event,evenHandler) {
    console.log('connection succesful.'); 
    eventEmitter.on(event,evenHandler);
}

var rekening = new Rekening(100);

rekening.on('saldo_negatief', function (src) {
    console.log("saldo ontoereikend! (Saldo bedraagt ", src.saldo, ")");
});


console.log("saldo na creatie: ", rekening.saldo);
var bedrag = 20;
rekening.stortGeld(bedrag);
console.log("saldo na storting van ", bedrag, ": ", rekening.saldo);
bedrag = 10;
rekening.haalGeldAf(bedrag);
console.log("saldo na opname van ", bedrag, ": ", rekening.saldo);
bedrag = 150;
rekening.haalGeldAf(bedrag);
console.log("saldo na opname van ", bedrag, ": ", rekening.saldo);