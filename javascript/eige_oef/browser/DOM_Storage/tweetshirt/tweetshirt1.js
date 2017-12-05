// var canvas, context;

// function fillBackgroundColor() {
// 	var bgColor = document.getElementById("backgroundColor").value;
// 	var canvas = document.getElementById("tshirtCanvas");
// 	var context = canvas.getContext("2d");
// 	context.fillStyle = bgColor;
//     context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
// }


// function previewHandler() {
// 	var canvas = document.getElementById("tshirtCanvas");
// 	var context = canvas.getContext("2d");
// 	// there's no 3D canvas yet; this is to make code futureproof

// 	fillBackgroundColor();

// 	var selectObj = document.getElementById("shape");
// 	var index = selectObj.selectedIndex;
// 	var shape = selectObj[index].value;

// 	if (shape == "squares") {
// 		for (var squares = 0; squares < 20; squares++) {
// 			drawSquare(canvas, context);
// 		}
// 	}
// 	else if (shape == "circles") {
// 		for (var circles = 0; circles < 20; circles++) {
// 			drawCircle(canvas, context);
// 		}
// 	}
// 	drawText(canvas, context);
// 	drawBird(canvas, context);
// }


// window.onload = function () {
//     //setKeuze();
// 	previewHandler();


// 	var btn = document.getElementById("previewButton");
// 	btn.addEventListener("click", fillBackgroundColor);




// };



// function updateTweets(tweets) {
// 	var tweetsSelection = document.getElementById("tweets");

// 	// add all tweets to the tweets menu
// 	for (var i = 0; i < tweets.length; i++) {
// 		var tweet = tweets[i];

// 		// create option
// 		var option = document.createElement("option");
// 		option.text = tweet.text;

// 		// strip any quotes out of the tweet so they don't mess up our option
// 		option.value = tweet.text.replace("\"", "'");

// 		// add option to select
// 		tweetsSelection.options.add(option);
//     }
// 	// make sure the top tweet is selected
// 	tweetsSelection.selectedIndex = 0;
// }





'use strict';
var test;
window.onload = function () {
	var button = document.getElementById("previewButton");
	button.onclick = previewHandler;
	document.getElementById("btnSave").onclick = saveLocal;
	document.getElementById("btnShowSave").onclick = reloadLocal;
	//showShapeColor();
	// Easter Egg ;-)
	makeImage();
}
function showShapeColor() {
	var shapeColor = document.getElementById("colorCircles")
	if (document.getElementById("shape").value == "neither") {
		shapeColor.className = "onvisible";
	} else {
		shapeColor.className = "visible";
	}

	//shapeColor.style.display = 'block';
}
function previewHandler() {
	var canvas = document.getElementById("tshirtCanvas");
	var context = canvas.getContext("2d");
	// there's no 3D canvas yet; this is to make code futureproof
	var color = document.getElementById("colorCircles").value;
	fillBackgroundColor();

	var selectObj = document.getElementById("shape");
	var index = selectObj.selectedIndex;
	var shape = selectObj[index].value;
	var btnReload = document.getElementById("btnShowSave").onclick;
	if (shape == "squares") {
		for (var squares = 0; squares < 20; squares++) {
			// if (localStorage!="" || btnReload==true) {
			// 	localStorage.getItem('square');
			// 	console.log("test")
			// }else{
			// 	drawSquare(canvas, context, color);
			// }
			drawSquare(canvas, context, color);
		}
	}
	else if (shape == "circles") {
		for (var circles = 0; circles < 20; circles++) {
			drawCircle(canvas, context, color);
		}
	}
	drawText(canvas, context);
	drawBird(canvas, context);
}

// This is where we'll set the background color
function fillBackgroundColor() {
	var bgColor = document.getElementById("backgroundColor").value;
	// var index = selectObj.selectedIndex;
	// var bgColor = selectObj[index].value;
	var canvas = document.getElementById("tshirtCanvas");
	var context = canvas.getContext("2d");

	context.fillStyle = bgColor;
	context.fillRect(0, 0, canvas.width, canvas.height);

}

// Draws a square at a random location
// function drawSquare(canvas, context, color,x,y,w) {
function drawSquare(canvas, context, color) {
	if (!w) var w = Math.floor(Math.random() * 40);
	if (!x) var x = Math.floor(Math.random() * canvas.width);
	if (!y) var y = Math.floor(Math.random() * canvas.height);

	// Use this fillStyle instead if you want to try
	// "twitter blue"
	//context.fillStyle = "rgb(0, 173, 239)";
	//context.fillStyle = "lightblue";
	context.fillStyle = color;
	context.fillRect(x, y, w, w);
	//console.log(x, y, w, w)
	var square = [x, y, w, w];
	//console.log(square);
	localStorage.setItem('square', square);
}

// Draws a circle at a random location
function drawCircle(canvas, context, color) {
	var radius = Math.floor(Math.random() * 40);
	var x = Math.floor(Math.random() * canvas.width);
	var y = Math.floor(Math.random() * canvas.height);

	context.beginPath();
	context.arc(x, y, radius, 0, degreesToRadians(360), true);
	var cirkel = [x, y, radius, 0, degreesToRadians(360), true];
	localStorage.setItem('cirkel', cirkel);
	// Use this fillStyle instead if you want to try
	// "twitter blue"
	//context.fillStyle = "rgb(0, 173, 239)";
	//context.fillStyle = "lightblue";
	context.fillStyle = color;
	context.fill();
}

// draws all the text, including the tweet
function drawText(canvas, context) {
	var txtColor = document.getElementById("foregroundColor").value;

	context.fillStyle = txtColor;
	context.font = "bold 1em sans-serif";
	context.textAlign = "left";
	context.fillText("I saw this tweet", 20, 40);


	// draw the tweet!
	var selectObj = document.getElementById("tweets");
	var tweet = selectObj.value;
	context.textAlign = "center";
	var tweetTxtSize = document.getElementById("tweetTxtSize").value;
	context.font = "italic " + tweetTxtSize + "em serif";
	//context.fillText(tweet, 30, 100);
	context.fillText(tweet, canvas.width / 2, 100);

	// If you want to try splitIntoLines to 
	// handle longer tweets, uncomment this code
	// and replace the context.fillText line above
	/*
		if (tweet.length > 60) {
			var tweetLines = splitIntoLines(tweet);
			for (var i = 0; i < tweetLines.length; i++) {
				context.fillText(tweetLines[i], 30, 70+(i*25));
			}
		}
		else {
			context.fillText(tweet, 30, 100);
		}
	*/

	context.font = "bold 1em sans-serif";
	context.textAlign = "right";
	context.fillText("and all I got was this lousy t-shirt!",
		canvas.width - 20, canvas.height - 40);
}

// draws the twitter bird image
function drawBird(canvas, context) {
	var twitterBird = new Image();
	twitterBird.src = "images/twitterBird.png";
	// images don't always load immediatly, so we make sure the image is fully loaded before we draw it:
	twitterBird.onload = function () {
		context.drawImage(twitterBird, 20, 120, 70, 70);
	};

}

function degreesToRadians(degrees) {
	return (degrees * Math.PI) / 180;
}


function updateTweets(tweets) {
	var tweetsSelection = document.getElementById("tweets");

	// add all tweets to the tweets menu
	for (var i = 0; i < tweets.length; i++) {
		var tweet = tweets[i];
		// create option
		var option = document.createElement("option");
		option.text = tweet.text;
		// strip any quotes out of the tweet so they don't mess up our option
		option.value = tweet.text.replace("\"", "'");
		// add option to select
		tweetsSelection.options.add(option);
	}
	// make sure the top tweet is selected
	tweetsSelection.selectedIndex = 0;
}


// Splits one long string into multiple lines of 
// no more than 60 characters each. Returns an
// array of the lines.
function splitIntoLines(str) {
	var strs = new Array();
	var space = str.indexOf(' ', 60);
	strs[0] = str.substring(0, space);
	strs[1] = str.substring(space + 1);
	if (strs[1].length > 60) {
		space = strs[1].indexOf(' ', 60);
		strs[1] = strs[1].substring(space + 1);
		strs[2] = strs[1].substring(0, space);
	}
	return strs;
}

// Easter Egg
function makeImage() {
	var canvas = document.getElementById("tshirtCanvas");
	canvas.onclick = function () {
		window.open(canvas.toDataURL('image/png'), '_blank');
	};
}


function saveLocal() {
	var bgColor = document.getElementById("backgroundColor").value;
	var shape = document.getElementById("shape").value;
	var colorShape = document.getElementById("colorCircles").value;
	var txtColor = document.getElementById("foregroundColor").value;
	var tweet = document.getElementById("tweets").value;
	var tweetTxtSize = document.getElementById("tweetTxtSize").value;

	localStorage.setItem('bgColor', bgColor);
	localStorage.setItem('shape', shape);
	localStorage.setItem('colorShape', colorShape);
	localStorage.setItem('txtColor', txtColor);
	localStorage.setItem('tweet', tweet);
	localStorage.setItem('tweetTxtSize', tweetTxtSize);
}

function reloadLocal() {
	// var currentColor = localStorage.getItem('bgcolor');
	// var currentFont = localStorage.getItem('font');
	// var currentImage = localStorage.getItem('image');


	var bgColor = localStorage.getItem('bgColor');
	var shape = localStorage.getItem('shape');
	var colorShape = localStorage.getItem('colorShape');
	var txtColor = localStorage.getItem('txtColor');
	var tweet = localStorage.getItem('tweet');
	var tweetTxtSize = localStorage.getItem('tweetTxtSize');
	var square = localStorage.getItem('square');
	var cirkel = localStorage.getItem('cirkel');

	document.getElementById("backgroundColor").value = bgColor;
	document.getElementById("shape").value = shape;
	document.getElementById("colorCircles").value = colorShape;
	document.getElementById("foregroundColor").value = txtColor;
	document.getElementById("tweets").value = tweet;
	document.getElementById("tweetTxtSize").value = tweetTxtSize;
	previewHandler();
}
console.log(test);