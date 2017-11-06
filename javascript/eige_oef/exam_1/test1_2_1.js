'use strict';

var toetsenbord = require('readline-sync');

 function maakString(lengte, karakter=" "){
    var karakter="";
    var lengte="";
 }

 maakString(5, "* ")


function tekenGetallenPiramide(hoogte) {
    var str = "";
    for(var i=1; i<=hoogte; i++) {
      for(var j=1; j<=hoogte-i; j++) {
        str += "   ";
      }
      for(var k=hoogte-i+1; k<hoogte+i; k++) {
        str += "1  ";
      }
      for(var m=hoogte+i; m<=2*hoogte-1; m++) {
        str += "   ";
      }
      str += "\n";
    }
    console.log(str);
  }
  
  tekenGetallenPiramide(5);