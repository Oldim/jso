'use strict';
// object literar
var mijnAuto;
// een object heeft eigenschappen (properties) en functies (methodes)
mijnAuto ={
    merk: "Ford",
    model: "Fiesta",
    bouwjaar: "1960",
    cabrio: true,
    gestart: false,
    rijden: function(){
        if(this.gestart){
            console.log("vroemvroem");
        }else{
            console.log("start de motor eerst!");
        }
        
    },
    starten: function(){
        this.gestart=true;
    },
    gegevens: function(){
    //    var merk=this.merk;
    //    var model= this.model;
    //    var bouwjaar= this.bouwjaar;
    //    var cabrio= this.cabrio;
   // var result= merk+' , '+ model+' , '+ bouwjaar+' , '+ cabrio;
       var result= this.merk+' , '+ this.model+' , '+ this.bouwjaar+' , '+ this.cabrio;
    return result;
    },
};

var bouwjaarVanMijnAuto= mijnAuto.bouwjaar;

console.log(bouwjaarVanMijnAuto);
console.log(mijnAuto.bouwjaar);
bouwjaarVanMijnAuto=150;    // door aan variabele andere waarde geven kan je NIETS binnen object veranderen
mijnAuto.cabrio=false;      // ALLEEN op deze manier kan je waarde binnen object  veranderen
// console.log(bouwjaarVanMijnAuto);        !=      console.log(mijnAuto.bouwjaar);
mijnAuto.bouwjaar--;
mijnAuto.kleur= "knalrood";
console.log(mijnAuto.kleur); // MAAR als ervoor geen kleur is aangemaakt in 't object krijg je waarde = undefined
var tmp= mijnAuto.gegevens();
console.log(tmp);

var altTmp = Object.keys(mijnAuto).map(function(key) {
    return mijnAuto[key];
});
console.log(altTmp);