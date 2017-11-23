'use strict';
//functie die we kunnen gebruiken om 0.1 of meer objecten met dezelfde properties en methodes te kunnen maken
// CONSTRUCTOR
function Auto(merk, model) {
    this.merk = merk;
    this.model = model;
    this.cabrio = false;
    this.bouwjaar = new Date().getFullYear();
    this.gestart = false;
    this.gegevens= function(){
        var result= this.merk+' , '+ this.model+' , '+ this.bouwjaar+' , '+ this.cabrio;
        return result;
    }
    this.starten = function () {
        this.gestart = true;
        console.log("de motor is gestaart");
    };
    this.rijden= function(geluid){
        if(this.gestart){        
            var tmp= this.gegevens();
            console.log("Ik vertrek met mijn %s",tmp);
            console.log(geluid);
        }else{
            console.log("staart de motor eerst")
        }
    };
}
// objecten maken met constructor
var auto1 = new Auto("bmw", "X6");
var auto2 = new Auto("Audi", "A6");
console.log(auto1);
console.log(auto2);
auto2.cabrio = true;
auto2.starten();
auto2.rijden("tuuttuut");
