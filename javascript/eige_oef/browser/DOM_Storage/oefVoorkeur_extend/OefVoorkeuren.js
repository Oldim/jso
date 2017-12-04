var img = ["Krokodil", "Fire Fox', cursive", "Schildpad"];
var font = ["font-family: 'Spectral SC', serif", "font-family: 'Indie Flower', cursive", "font-family: 'Gloria Hallelujah', cursive"];
function setFont() {    
    var optie = frm.bgFont.options[frm.bgFont.selectedIndex].value;
    document.body.style.fontFamily=optie;

}
function toonFont() {
    for (var i = 0; i < font.length; i++) {
        var option = document.createElement("option");
        option.text = font[i];
        frm.bgFont.add(option);
    }
}

// function setImg() {    
//     var optie = frm.bgImg.options[frm.bgImg.selectedIndex].value;
//     var bgImg = document.getElementById("bgImg");
//     bgImg.src = optie;

// }
// function toonImg() {
//     for (var i = 0; i < img.length; i++) {
//         var option = document.createElement("option");
//         option.text = img[i];
//         frm.bgImg.add(option);
//     }
// }

// function setColor() {
//     var body = document.body;
//     body.style.backgroundColor = body.style.backgroundColor == KLEUR1 ? KLEUR2 : KLEUR1;
// }



// function setFont() {
//     var font1=font-family: 'Spectral SC', serif;
//     var font2=font-family: 'Indie Flower', cursive;
//     var font3=font-family: 'Gloria Hallelujah', cursive;
//     var body = document.body;
//     body.style.backgroundColor = body.style.backgroundColor == font1 ? font2 : font1;
// }

// function setImg() {
//     var img1 ="";
//     var img2 = img - family: 'Indie Flower', cursive;
//     var img3 = font - family: 'Gloria Hallelujah', cursive;
// }



window.onload = function () {
    toonFont();
};