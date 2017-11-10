'use strict';

var toetsenbord = require('readline-sync');

var getalenEven = [];
var getalenOneven = [];
var j;
for(var i=0; i<10;i++){
    var getal  =parseInt(toetsenbord.question("Geef een geheel getal: "),10) ;
    getalen.push(getal);    
    if( getalen[i]%2==0){
        getalenEven.push(getal); 
    }else{
        getalenOneven.push(getal); 
    }
}

console.log("Even: "+ getalenEven);
console.log("Oneven: "+ getalenOneven);