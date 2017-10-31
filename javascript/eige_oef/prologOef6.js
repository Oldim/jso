// klassikale oef.:
// schrijf een functie om een vierkant met doorgegeven
// zijde te tekenen

function tekenVierkant(zijde) {
    var resultaat;
    for (var rij = 1; rij <= zijde; rij++) {
        resultaat= "";
        for (var i = 1; i <= zijde; i++) {
            resultaat += " * ";
        }
        console.log(resultaat);
    }    
}
tekenVierkant(4);