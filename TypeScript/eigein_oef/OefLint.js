// Een lint heeft een kleur (string) en een lengte (number), die opgevraagd moeten kunnen worden.
// Bij creatie van een lint moet men de kleur en de lengte opgeven.
// Schrijf een methode om een lint te verkorten.  Je moet hierbij opgeven hoeveel korter het lint wordt.
//  Optioneel mag je ook doorgeven hoeveel stukken van de opgegeven lengte af het lint gesneden worden.
// Maak ook een methode om te berekenen hoeveel stukken van een door te geven lengte je uit een lint zou kunnen
// snijden.  (Bijvoorbeeld: uit een lint van 20m kun je 6 stukken van 3m snijden).  
var Lint = /** @class */ (function () {
    // kleur: string;
    // lengte: number;
    function Lint(kleur, lengte) {
        this.kleur = kleur;
        this.lengte = lengte;
    }
    ;
    Lint.prototype.lintVerkorten = function (verk) {
        this.lengte -= verk;
    };
    Lint.prototype.aantalStukken = function (aantal) {
        return Math.floor(this.lengte / aantal);
    };
    return Lint;
}());
var newLengt = new Lint("zwart", 30);
console.log(newLengt);
newLengt.lintVerkorten(10);
console.log(newLengt);
newLengt.aantalStukken(3);
console.log(newLengt);
