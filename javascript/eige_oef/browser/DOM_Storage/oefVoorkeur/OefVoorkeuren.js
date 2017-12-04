
function setFont(font) {
    var font = bgFont.options[bgFont.selectedIndex].text;
    document.body.style.fontFamily = font;
    setKeuze(document.getElementById("bgColor").value, font, img.src);
}

function setImg(img) {
    var optie = bgImg.options[bgImg.selectedIndex].index;
    var img = document.getElementById("img");
    if (optie == 0) {
        img.src = "img/crocodile.png";
    } else if (optie == 1) {
        img.src = "img/firefoxos.png";
    } else {
        img.src = "img/tortoise.png";
    }

    setKeuze(document.getElementById("bgColor").value, bgFont.options[bgFont.selectedIndex].text, img.src);
}

function setColor(color) {
    var color = document.getElementById("bgColor").value;
    var body = document.body;
    document.body.style.backgroundColor = color;
    setKeuze(color, bgFont.options[bgFont.selectedIndex].text, document.getElementById("img").src);
}

function setKeuze(color, font, img) {

    localStorage.setItem('keuze', JSON.stringify({ bgColor: color, bgFont: font, bgImg: img }));
    console.log(keuze);
}

function laatsteKeuze() {

    var keuze = JSON.parse(localStorage.getItem('keuze'));
    if (keuze != null){
        document.body.style.backgroundColor = keuze.bgColor;
        document.body.style.fontFamily = keuze.bgFont;
        img.src= keuze.bgImg;
	}
	else{
		alert("Er is nog geen keuze bewaard.");
	}
    console.log(keuze);
}

window.onload = function () {
    //setKeuze();
    laatsteKeuze();
};