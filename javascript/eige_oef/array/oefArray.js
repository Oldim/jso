
'use strict';

//Gevraagt: maak een kopie van 1 array en zet 't in 2de array


var bestemmingen =new Array(3);
 bestemmingen= ["De zee", "Het strand", "De kust"];

var bestemmingen2=new Array(bestemmingen.length);
bestemmingen2= bestemmingen.slice();
// of
var bestemmingen2= bestemmingen.slice(); // .slice methode creert new array
 

bestemmingen[0]='Hoboken';
console.log("besteming 1:"+bestemmingen[0]);
console.log("bestemming 2: "+bestemmingen2[0]);

//poging 2
for(var i=0;i<bestemmingen.length; i++){
   bestemmingen2[i]=bestemmingen[i];
}

// poging 3
bestemmingen=[];
bestemmingen2= bestemmingen2.concat(bestemmingen);
bestemmingen[0]= "new york";
console.log("besteming 1:"+bestemmingen[0]);
console.log("bestemming 2: "+bestemmingen2[0]);
