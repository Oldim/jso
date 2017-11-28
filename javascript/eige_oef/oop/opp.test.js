function Persoon(naam, voornaam) {
    this.naam = naam;
    this.voornaam= voornaam;
};

Persoon.prototype.volledigeNaam= function () {
    var gegevens= this.voornaam+" "+ this.naam;
    return gegevens;
};

Persoon.prototype.toString= function () {
    return this.volledigeNaam();
};




function Werknemer(naam, voornaam, loon) {
    /*this.naam = naam;
    this.voornaam= voornaam;
    */
    Persoon.apply(this,arguments);
    this.loon= loon;
};
Werknemer.prototype =new Persoon ();

Werknemer.prototype.toString= function () {
    return this.volledigeNaam() + " krijgt een loon van "+this.loon;
};

var persoon1= new Persoon("Kapot", "Isabel");
console.log(persoon1.volledigeNaam());
console.log(persoon1.toString());


var werknemer1= new Werknemer("Jansens", "Jan",1324);
console.log(werknemer1.volledigeNaam());
console.log(werknemer1.toString());
