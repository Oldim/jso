'use strict';

var canvas, context, topx;
var snow = true;

var numFlakes = 0;
var flakes = [];
window.onload = function (){
    setInterval(drawSint,1000);
}
//window.onload = drawSint;

function drawSint() {
    canvas = document.getElementById("mijnCanvas");
    context = canvas.getContext("2d");
    topx = canvas.clientWidth / 2;
    //context.clearRect(0,0,canvas.clientWidth,canvas.clientHeight); // alles wissen
    context.fillStyle = "#cccccc";
    context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    drawFace();
    drawEyeLeft();
    drawEyeRight();
    drawBeard();
    drawMouth();
    drawMiter();
    geelLine();
    drawImg("images/speelgoedzak.png", Math.floor(Math.random() * (canvas.clientWidth - 150)), Math.floor(Math.random() * (canvas.clientHeight - 150)), 150, 150);
    drawTxt("#000", "Dag Sinterklaasje!", topx, canvas.clientHeight - 50);
    drawSnow();
    //startSnow();
}

function drawFace() {
    drawCirle("pink", topx, 320, 70);
}

function drawCirle(color, x, y, radius) {
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI);
    context.fillStyle = color;
    context.fill();
}

function drawEyeLeft() {
    var newTopx = topx - 25;
    drawCirle("white", newTopx, 315, 10);
    drawCirle("blue", newTopx, 315, 5);
}
function drawEyeRight() {
    var newTopx = topx + 25;
    drawCirle("white", newTopx, 315, 10);
    drawCirle("blue", newTopx, 315, 5);
}
function drawMouth() {
    context.beginPath();
    context.arc(topx, 350, 20, Math.PI / 16, Math.PI - Math.PI / 16);
    context.fillStyle = "red";
    context.fill();
}


function drawPolygon(color, vertices) {
    context.fillStyle = color;
    context.beginPath();
    context.moveTo(vertices[0], vertices[1]);
    for (var i = 2; i < vertices.length; i += 2) {
        context.lineTo(vertices[i], vertices[i + 1]);
    }
    context.lineTo(vertices[0], vertices[1]);
    context.fill();

}

function drawBeard() { drawPolygon("white", [topx - 60, 360, topx + 60, 360, topx, 520]); }
function drawMiter() {
    drawPolygon("lightred", [topx, 60, topx + 120, 180, topx + 60, 300, topx - 60, 300, topx - 120, 180]);
    //drawPolygon("lightred", [topx - 60, 300, topx + 60, 300, topx + 120, 180, topx, 60, topx - 120, 180]);
}
// function drawLine(color, vertices){
//     context.fillStyle = color;
//     context.beginPath();
//     context.moveTo(vertices[0], vertices[1]);
//     context.lineTo(vertices[0], vertices[1]);
//     context.stroke();
// }

function drawLine(color, x1, y1, x2, y2, width) {
    context.strokeStyle = color;
    context.lineWidth = width;
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
    context.strokeStyle
}
function geelLine() {
    drawLine("gold", topx, 60, topx, 300, 10);
    drawLine("gold", topx - 120, 180, topx + 120, 180, 10);
}
function drawImg(imgName, x, y, width, height) {
    var img = new Image();
    img.src = imgName;
    // images zijn niet altijd meteen geladen, daarom wachten we tot de img helemaal geladen is voor we ze op het canvas tekenen.
    img.onload = function () {
        context.drawImage(img, x, y, width, height);
    }
}
function drawTxt(color, text, x, y) {
    context.fillStyle = color;
    context.font = "bold 2em sans-serif";
    context.textAlign = "center";
    context.fillText(text, x, y);
}

function drawSnow() {
    for (var i = 0; i < 40; i++) {
        drawCirle("white", Math.floor(Math.random() * (canvas.clientWidth)), Math.floor(Math.random() * (canvas.clientHeight)), 5);
    }
    clearInterval(startSnow);
    //context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);


    // if (snow) {
    //     for(var i=0; i<40;i++){
    //         drawCirle("white", Math.floor(Math.random()*(canvas.clientWidth)), Math.floor(Math.random()*(canvas.clientHeight)), 5);
    //     }
    //     snow = false;

    // } else {
    //     drawCirle.clear();
    //     snow = true;
    // }
}
function startSnow() {
    setInterval(drawSnow, 300);
    //clearInterval(test);

}