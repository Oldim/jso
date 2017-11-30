'use strict';
document.getElementById("more-btn").onclick = voegRijToe;
function voegRijToe(){
    var tabel = document.getElementById("tabelBr");
    var rij = tabel.insertRow(-1);  // achteraan rij toevoegen
    var cel = rij.insertCell(0);
    cel.innerText = "Knutsel";
    var cel2 = rij.insertCell(1);
    cel2.innerText = "smurf";
}