'use strict';

var toetsenbord = require('readline-sync');

var lijstG = new Array();
var lijstP = new Array();
var gemeentenaam;
var postnummer;


gemeentenaam = toetsenbord.question("Geef een gemeentenaam of type 'stop' om te sluiten: ");
while (gemeentenaam != "stop") {


    if (lijstG[gemeentenaam] == null) {
        postnummer = toetsenbord.question("Geef een postnummer: ");
        lijstG[gemeentenaam] = 0;
        lijstG[gemeentenaam]++;
        lijstP[postnummer] = 0;
        lijstP[postnummer]++;
    } else {
        console.log("%s komt %d keer voor.", gemeentenaam, postnummer);
    }

    gemeentenaam = toetsenbord.question("Geef een gemeentenaam of type 'stop' om te sluiten: ");
}

for (gemeentenaam in lijstG) {  // overloop alle indexen
    console.log("%s komt %d keer voor.", gemeentenaam, lijstG[gemeentenaam]);
}
for (postnummer in lijstP) {  // overloop alle indexen
    console.log("%s komt %d keer voor.", postnummer, lijstG[postnummer]);
}


// 'use strict';

// var toetsenbord = require('readline-sync');

// var lijstG = new Array();
// //var lijstP= new Array();
// var gemeentenaam;
// var postnummer;


// gemeentenaam = toetsenbord.question("Geef een gemeentenaam of type 'stop' om te sluiten: ");
// while (gemeentenaam != "stop") {

//     if (lijstG[gemeentenaam] == null){
//         postnummer = toetsenbord.question("Geef een postnummer: ");
//         lijstG[gemeentenaam] = 0;
//         lijstG[gemeentenaam]++;
//     } else{
//         console.log("%s komt %d keer voor.", gemeentenaam, lijstG[gemeentenaam]);
//     }

//     gemeentenaam = toetsenbord.question("Geef een gemeentenaam of type 'stop' om te sluiten: ");
// }

// for (gemeentenaam in lijstG) {  // overloop alle indexen
//     console.log("%s komt %d keer voor.", gemeentenaam, lijstG[gemeentenaam]);
// }