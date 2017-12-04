var canvas, context;
function fillBackgroundColor(bgColor) {
    var bgColor = document.getElementById("backgroundColor").value;
    var body = document.body;
    document.body.style.backgroundColor = color;
}

function fillBackgroundColor(bgColor) {
	var bgColor = document.getElementById("backgroundColor").value;
	// var index = selectObj.selectedIndex;
	// var bgColor = selectObj[index].value;


	context.fillStyle = "#cccccc";
    context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
	

}



function previewHandler() {
	var canvas = document.getElementById("tshirtCanvas");
	var context = canvas.getContext("2d");
	// there's no 3D canvas yet; this is to make code futureproof

	fillBackgroundColor();

	var selectObj = document.getElementById("shape");
	var index = selectObj.selectedIndex;
	var shape = selectObj[index].value;

	if (shape == "squares") {
		for (var squares = 0; squares < 20; squares++) {
			drawSquare(canvas, context);
		}
	}
	else if (shape == "circles") {
		for (var circles = 0; circles < 20; circles++) {
			drawCircle(canvas, context);
		}
	}
	drawText(canvas, context);
	drawBird(canvas, context);
}


window.onload = function () {
    //setKeuze();
    previewHandler();
};



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