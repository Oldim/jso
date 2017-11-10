'use strict';

var rij1 = [16, 3, 2, 13];
var rij2 = [5, 10, 11, 8]
var rij3 = [9, 6, 7, 12]
var rij4 = [4, 15, 14, 1]
var rechthoek = [rij1, rij2, rij3, rij4];
// if(controleVierkant(rechthoek)){
//     console.log("Het is vierkant");
// }else{
//     console.log('Het is geen vierkant');
// }



var toetsenbord = require('readline-sync');
function controleVierkant(tabel,hoofding) {
    var rij, kol;
    // for(var i=0 ; i< speelbord.length; i++){
    //     speelbord[i] = new Array(rechthoek[0].length);
    // }
    if (rechthoek.length == rechthoek[0].length) {
        for (rij = 0; rij < tabel.length; rij++) {
            for (kol = 0; kol < tabel[rij].length; kol++) {
              tabel[rij][kol] = parseInt(toetsenbord.question(hoofding + (rij + 1) + "(" + (kol + 1) + ") "));
            }
          }
    }
}

function toonVierkant(tabel, hoofding) {
    var rij, kol, result = hoofding;
    for (rij = 0; rij < tabel.length; rij++) {
      result += "\n";
      for (kol = 0; kol < tabel[rij].length; kol++) {
        result += "\t" + tabel[rij][kol];
      }
    }
    console.log(result);
  }
  
  function somVierkant(tabel) {
    //console.log(arguments);
    var som = tabel[0][0];
    for (var rij = 0; rij < tabel.length; rij++) {
        som+=tabel[rij];
    }
    return som;
    console.log(som);    
}

controleVierkant(rechthoek,"Geef getallen van het vierkant");
toonVierkant(rechthoek, "Magische vierkant");
console.log(somVierkant(rechthoek));





// var toetsenbord = require('readline-sync');

// var aantalRij = 2, vak;
// var puntenTabel = new Array(aantalRij);

// function maakDimTabel(tabel, hoofding) {
//   var rij, kol;
//   for (rij = 0; rij < tabel.length; rij++) {
//     for (kol = 0; kol < tabel[rij].length; kol++) {
//       tabel[rij][kol] = parseInt(toetsenbord.question(hoofding + (rij + 1) + "(" + (kol + 1) + ") "));
//     }
//   }
// }

// function toonTweeDimTabel(tabel) {
//   var rij, kol, result="";
//   for (rij = 0; rij < tabel.length; rij++) {
//     result += "\n";
//     for (kol = 0; kol < tabel[rij].length; kol++) {
//       result += "\t" + tabel[rij][kol];
//     }
//   }
//   console.log(result);
// }


// /****** HOOFDPROGRAMMA ******/
// // allocatie van kolommen van tabel
// for (vak = 0; vak < aantalRij; vak++) {
//   puntenTabel[vak] = new Array(2);
// }

// maakDimTabel(puntenTabel, "Geef getallen van het vierkant ");
// toonTweeDimTabel(puntenTabel);
// // function maakVierkant(tabel){
// //     var vierkant = new Array(4);
// //     for(var rij=0; rij < tabel; rij++){
// //         vierkant.splice(rij, 0, new Array());
// //         for(var j=0; j < tabel; j++){
// //             vierkant[rij].splice(i, 0, 0);
// //         }
// //     }
// //     return vierkant;
// // }


// // function toonVierkant(tabel) {
// //     var rij, kol, result;
// //     for (rij = 0; rij < tabel.length; rij++) {
// //       result += "\n";
// //       for (kol = 0; kol < tabel[rij].length; kol++) {
// //         result += "\t" + tabel[rij][kol];
// //       }
// //     }
// //     console.log(result);
// //   }


// // console.log(toonVierkant());


