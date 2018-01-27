var express = require('express');
var app = express();

function getRecords(callback) {
    var result = {};
    var mongoClient = require('mongodb').MongoClient;
    var toetsenbord = require('readline-sync');
    // zie ook  http://mongodb.github.io/node-mongodb-native/3.0/quick-start/quick-start/
    
    // Connection URL
    var url = 'mongodb://localhost:27017';

    // Use connect method to connect to the server
    mongoClient.connect(url, function (err, client) {
        var db = client.db('testdb');
        console.log("Connected successfully to server");
        // Get the restaurants collection
        var collection = db.collection('restaurants');
        // Find all documents
        collection.find({}).project({name:1,address:1,cuisine:1,borough:1,_id:0}).toArray(function (err, docs) {
            console.log("Restaurant document(s) found:");
            //docs.forEach(function (element) {
                //console.log('%s (%s), %s', element.name, element.cuisine, element.address ? element.address.street : "");
              
                if (err) {
                    callback(err, {});
        
                } else {
                    callback(null, docs);
                }
            // });
            client.close();
        });
    })
}

app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/restaurants01.html', function(req, res) {
	res.sendFile(__dirname + "/" + "restaurants01.html");
});

app.get('/restaurants', function (req, res) {
	console.log('request received');
	getRecords(function (err, docs) {
		var result;
		if (err) {
			console.log('Error while performing query.');
			result = {};
		}
		else {
			console.log("Sending data to client:");
			//console.log(JSON.stringify(docs));
			result = JSON.stringify({ data: docs });
		}
        // res.end(JSON.stringify(result));
       // res.send(JSON.stringify({ data: docs }));
       // var restaurantGeg=  element.name+ element.cuisine+ element.address;
		res.end(result);
	});
});

var server = app.listen(1337, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log("Example app listening at http://%s:%s", host, port)
});