'use strict';

function grootte(a,b){
    var c = Math.sqrt( Math.pow(a, 2) + Math.pow(b, 2));
    return c;
}

var grootte = grootte(3,4);
console.log("grootte= " + grootte);