'use strict';

var toetsenbord = require('readline-sync');


function TV() {
    this.post = post;
}

TV.prototype.getProgramma= function(post){
    switch (true) {
        case this.post==0:            
            return " K3 en de regenboogprinses";
            break;
        case this.post==1:           
            return "België-Spanje";
            break;
        case this.post==2:            
            return "Parijs-Tours";
            break;
        case this.post==3:            
            return "Lotto uitslag";
            break;
        default:            
            return "FC De Kampioenen” gemist?";
    }
};

var tv = new TV();
tv.post = 2;
var programma = tv.getProgramma();
console.log("Op post %d spelen ze '%s'", tv.post, programma);
var post = parseInt(toetsenbord.question("Geef post: "));
//programma = tv.getProgramma(); op verkeerde plaats
tv.post = post;
programma = tv.getProgramma();
console.log("Op post %d spelen ze '%s'", tv.post, programma);
