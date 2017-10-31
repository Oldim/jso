

function tekenLijn(aantal = 25, teken = "=") {
    var icon = '';
    for (var i = 1; i <= aantal; i++) {
        icon += teken;
    }
    console.log(icon);
}
tekenLijn();
tekenLijn(10);
tekenLijn(20, "*");


for (var j = 1; j <= 5; j++) {
    tekenLijn(j, "*");
}
