'use strict';

var canvas, context, topx;

window.onload = drawSint;

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

function drawBeard() {
    drawPolygon("white", [topx - 60, 360, topx + 60, 360, topx, 520]);
}
function drawMiter() {
    drawPolygon("lightred", [topx, 60, topx + 120, 180, topx + 60, 300, topx - 60, 300, topx-120,180]);
    //drawPolygon("lightred", [topx - 60, 300, topx + 60, 300, topx + 120, 180, topx, 60, topx - 120, 180]);
}