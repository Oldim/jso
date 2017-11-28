/*
Breid het Number object uit met een functie pad(num, size, char) die een 
doorgegeven getal num vooraan aanvult met het doorgegeven karakter kar tot het doorgegeven lengte size heeft. 
Het volgende statement moet waarde ‘0012’ aan s toekennen. 
var s = Number.pad(12,4,’0’);
*/

    

    Number.pad = function(num, size, char){
        var result = ""+num;
        while(result.length < size)
            result = char + result;
        return result;
    }
    

    var getal=5;
    console.log(Number.pad(getal, 2, '0'));
    getal=10;
    console.log(Number.pad(getal, 2, '0'));
    getal=100;
    console.log(Number.pad(getal, 2, '0'));
    console.log(Number.pad(getal, 4, '0'));
    