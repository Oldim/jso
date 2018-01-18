'use strict';


var events= require('events');
var eventsEmitter = new events.EventEmitter();


// event afvuren =(signaleren dat iets gebeurd is)
eventsEmitter.emit('brand');
// vermits er nog geen eventhandller aan het event 'brand' gekoppeld is, gebeurt er niets.


// event afhandelen (=aangeven wat moet gebueuren als vanaf hier een bepaalde even afgevuurd wordt)
eventsEmitter.on('brand', function(){
console.log("bel de brandweer");
});



for(var i=1; i<6; i++){
   eventsEmitter.emit('brand'); 
}
eventsEmitter.on('brand',function(){
    console.log("sluit de ramen");
});

eventsEmitter.emit('brand');




console.log("lang leve de muizen");
eventsEmitter.emit("muis'"); // geen output; want er is geen eventhandler gekoppeld aan muis.
eventsEmitter.on('muis', watAlsErMuisIs);
eventsEmitter.emit("muis'");

function watAlsErMuisIs(){
    console.log('Spring zsm op de tafel!');
}