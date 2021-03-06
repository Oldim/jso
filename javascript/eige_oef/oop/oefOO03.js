// 'use strict';



// var toetsenbord = require('readline-sync');

// function Tankbeurt(inhoud,afstand) {
//     this.inhoud = inhoud;
//     this.afstand = afstand;
// };

// Tankbeurt.prototype.verbruik=function(){
//     for(var i = 0; i < alleTankbeurten.length; i++) {
//      var   verbruik=  alleTankbeurten[i].inhoud/ alleTankbeurten[i].afstand;
//     };
//     return verbruik*100;
// };

// var tankbeurt_1 = new Tankbeurt();
// var tankbeurt_2 = new Tankbeurt();
// var tankbeurt_3 = new Tankbeurt();
// var tankbeurt_4 = new Tankbeurt();
// var tankbeurt_5 = new Tankbeurt();
// var alleTankbeurten = [tankbeurt_1, tankbeurt_2, tankbeurt_3,tankbeurt_4,tankbeurt_5];

// for(var i = 0; i < alleTankbeurten.length; i++) {
//     var inhoud = parseInt(toetsenbord.question("Geef inhoud: "));
//     var afstand = parseInt(toetsenbord.question("Geef afstand: "));
//     alleTankbeurten[i].inhoud= inhoud;
//     alleTankbeurten[i].afstand=afstand;
    
// };

// console.log(alleTankbeurten[i].verbruik());

'use strict';

function Tankbeurt(inhoud, afstand){
    this.inhoud = inhoud;
    this.afstand = afstand;
}

var toetsenbord = require('readline-sync');
var hoeveelheid, afstand, somHoeveelheid = 0, somAfstand = 0;
var tankbeurten = [];
for(var i=1; i <= 5; i++){
    hoeveelheid = parseFloat(toetsenbord.question('Hoeveelheid brandstof (l): '));
    afstand = parseFloat(toetsenbord.question('Afstand (km): '));
    tankbeurten.push( new Tankbeurt(hoeveelheid, afstand) );
}

for(var i=0; i < tankbeurten.length; i++){
    somAfstand += tankbeurten[i].afstand;
    somHoeveelheid += tankbeurten[i].inhoud;
}
console.log('Totale hoeveelheid brandstof = %d', somHoeveelheid);
console.log('Totale afstand = %d', somAfstand);
console.log('Verbruik per 100km = %d', 100 * somHoeveelheid/somAfstand);