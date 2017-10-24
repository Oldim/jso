'use strict';

var getal1, getal2, operator;
var toetsenbord = require('readline-sync');

getal1 = toetsenbord.question('Geef getal1:  ');
getal2 = toetsenbord.question('Geef getal2:  ');
operator = toetsenbord.question('Kies uit "+", "-", "*" of "/":  ');

getal1 = parseFloat(getal1);
getal2 = parseFloat(getal2);

switch (operator) {
    case '+':
        console.log("%s + %s = " + (getal1 + getal2) + '.', getal1, getal2);
        break;
    case '-':
        console.log("%s - %s = " + (getal1 - getal2) + '.', getal1, getal2);
        break;
    case '*':
        console.log("%s * %s = " + (getal1 * getal2) + '.', getal1, getal2);
        break;
    case '/':
        if(getal2==0){
            console.log("Je mocht niet door '0' te delen!"); 
        }else{
           console.log("%s / %s = " + (getal1 / getal2) + '.', getal1, getal2); 
        }
        
        break;
    default:
        console.log("Geef geldige operator");
}