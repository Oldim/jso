//functie die we kunnen gebruiken om 0.1 of meer objecten met dezelfde properties en methodes te kunnen maken
// CONSTRUCTOR
function Auto(merk, model) {
    this.merk = merk;
    this.model = model;
    this.cabrio = false;
    this.bouwjaar = new Date().getFullYear();
    this.gestart = false;
}
// objecten maken met constructor
var auto1 = new Auto("bmw", "X6");
var auto2 = new Auto("Audi", "A6");
console.log(auto1);
console.log(auto2);
auto2.cabrio = true;
auto2.starten();
auto2.rijden("tuuttuut");


// function Person(naam, leeftijd, geslacht) {
//     this.naam = naam;
//     this.leeftijd = leeftijd;
//     this.geslacht = geslacht;
//   }

//   var joachim = new Person('Joachim', 33, 'M');
//   var bart = new Person('Bart', 39, 'M');

// Auto.gebruiker=this.gebruiker;

// var car1 = new Auto("bmw", "X6", joachim);
//   var car2 = new Auto("Audi", "A6", bart);

//   console.log(car1.gebruiker.leeftijd);

Auto.prototype.starten=function () {
    this.gestart = true;
    console.log("de motor is gestaart");
};
Auto.prototype.rijden= function(geluid){
    if(this.gestart){        
        var tmp= this.gegevens();
        console.log("Ik vertrek met mijn %s",tmp);
        console.log(geluid);
    }else{
        console.log("staart de motor eerst")
    }
};


