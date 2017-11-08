'use strict';

//declaratie van een array
var lijst;

//creatie v/e array
lijst= new Array(); // Array constructor
var aantalElementen= lijst.length;
console.log("na creatie bevat lijst %d elementen", aantalElementen);


// 5 elementen toevoegen aan lijst
for(var i=0; i<5; i++){
lijst[i]=(i+1)*10;
}
console.log("na toevoegen bevat lijst %d elementen", lijst.length);


// 1ste element overschrijven
lijst[0]=0;
console.log(lijst);


// laatste element overschrijven
lijst[lijst.length-1]= "laatste element";
console.log(lijst);

//alle elementen een voor een overlopen (en tonen op het scherm)
for(var i=0; i< lijst.length; i++){
    console.log(lijst[i]);
}

//alle elementen een voor een overlopen (en tonen op het scherm) van achter naar begin
for(var i=lijst.length-1; i>=0; i--){
    console.log(lijst[i]);
}

// REVERSE is iets anders = reverse wissel de elementen van plaats
for(var i=0; i< lijst.length; i++){
    console.log(lijst.reverse());
}

//lijst groter maken door element toe te voegen op positie die nog niet bestaat
lijst[lijst.length+3]="kiekeboe";
console.log(lijst);
for(var i=lijst.length-1; i>=0; i--){
    console.log(lijst[i]);
}

//element achteraan toevoegen
lijst.push("koekoe");
console.log(lijst);
// andere manier om element achteraan toe te voegen:
lijst[lijst.length]= "nog eens koekoe";
console.log(lijst);


var k3 = []; // array literal ===> var k3 = new Array();
k3.push("Karen");
k3.push("Kristel");
k3.push("Kathleen");
console.log(k3);