'use strict';


function oppCirkel(r) {
    var straal = Math.PI * Math.pow(r, 2);
    return straal;
}

function omtrekCirkel(r) {
    var straal = 2 * Math.PI * r;
    return straal;
}

var opp = oppCirkel(10);
console.log("opp= " + opp);
var omt = omtrekCirkel(10);
console.log("omt= " + omt);