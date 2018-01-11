var express = require('express');
var app = express();

/* bodyParser: 
  nodig om invoervelden van form die met method='post' verstuurd is te kunnen verwerken 
*/
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/vakantiebestemming.html', function(req, res) {
	res.sendFile(__dirname + "/" + "vakantiebestemming.html");
});

// app.get('/process_get', function(req, res) {
// 	console.log("get");
// 	// Prepare output in JSON format
// 	var response = {
// 		first_name : req.query.first_name,
// 		last_name : req.query.last_name
// 	};
// 	console.log(response);
// 	res.end(JSON.stringify(response));
// });


app.post('/process_post', function(req, res) {
	console.log("post");
    // Prepare output in JSON format
	var response = {
		naam : req.body.naam,
        geslacht : req.body.gender,
        bestemming:req.body.selBestemming,
        lid:req.body.lid
	};
	console.log(response);
    // res.end(JSON.stringify(response));
    if(req.body.gender=="man"){
        req.body.gender="mijnheer"
    }else{
        req.body.gender="mevrouw"
    }
    if(req.body.lid=="lid"){
        req.body.lid="Als lid geniet u uiteraard van onze uitzonderlijke voordelen."
    }else{
        req.body.lid=" "
    }
    var textBericht= "Dag "+req.body.gender+" "+req.body.naam+". Uw inschrijving voor een reis naar "+req.body.selBestemming+" is geregistreerd."+req.body.lid;
    res.end(textBericht);
});

var server = app.listen(8081, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log("Example app listening at http://%s:%s", host, port);
});

// $(function(){
//     $(window).load(function(){
//         $.ajax('http://127.0.0.1:8081/process_post',{
//             method: 'GET',
//             dataType: 'json',
//         }).done(function(data){
//             console.log(data);
//         }).fail(function(obj, error, msg){
//             console.dir(msg);
//         })
//     });
// });