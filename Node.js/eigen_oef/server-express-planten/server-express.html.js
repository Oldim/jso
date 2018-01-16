var express = require('express');
var app = express();

/* bodyParser: 
  nodig om invoervelden van form die met method='post' verstuurd is te kunnen verwerken 
*/
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/toonJSON01.html', function(req, res) {
	res.sendFile(__dirname + "/" + "toonJSON01.html");
});


var server = app.listen(1338, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log("Example app listening at http://%s:%s", host, port);
});
