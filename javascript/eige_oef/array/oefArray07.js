'use strict';

var toetsenbord = require('readline-sync');

var getalen = [];
var j;
for(var i=0; i<10;i++){
    var getal  =parseInt(toetsenbord.question("Geef een geheel getal: "),10) ;
    if( getal%2==0){
        getalen.push(getal); 
    }    
}

console.log(getalen);