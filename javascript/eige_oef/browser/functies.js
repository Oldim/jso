'use strict';
function vraagNaam(){
    var naam = prompt("Geef naam","je naam");
    if (naam != null){
        var naamOk = confirm("Heet je echt " + naam + "?");
        if (naamOk){
            alert("Welkom, "+naam);
        }
    }
}

window.onload = vraagNaam;