var express = require('express');
var app = express();
var url = require('url');

/* bodyParser: 
  nodig om invoervelden van form die met method='post' verstuurd is te kunnen verwerken 
*/
var bodyParser = require('body-parser');
app.use(bodyParser.json()); //support json encoded bodies
app.use(bodyParser.urlencoded({
    extended: true
}));

function getRacersMan(callback) {
    var result = {};
    var mongoClient = require('mongodb').MongoClient;
    // zie ook  http://mongodb.github.io/node-mongodb-native/3.0/quick-start/quick-start/
    
    // Connection URL
    var url = 'mongodb://localhost:27017';
    mongoClient.connect(url, function (err, client) {
        var db = client.db('racers');
        console.log("Connected successfully to server");
        var collection = db.collection('racers');
        // Find all documents
        collection.find({gender: 'man'}).sort({fh:1,fm:1}).toArray(function (err, docs) {
            console.log("Restaurant document(s) found:");
                if (err) {
                    callback(err, {});
        
                } else {
                    callback(null, docs);
                }
            client.close();
        });
    })
}
function getRacersVrouw(callback) {
    var result = {};
    var mongoClient = require('mongodb').MongoClient;
    var url = 'mongodb://localhost:27017';
    mongoClient.connect(url, function (err, client) {
        var db = client.db('racers');
        console.log("Connected successfully to server");
        var collection = db.collection('racers');
        collection.find({gender: 'vrouw'}).sort({fh:1,fm:1}).toArray(function (err, docs) {
            console.log("Restaurant document(s) found:");
                if (err) {
                    callback(err, {});        
                } else {
                    callback(null, docs);
                }
            client.close();
        });
    })
}

function getRecordsRacers(callback) {
    var result = {};
    var mongoClient = require('mongodb').MongoClient;
    var url = 'mongodb://localhost:27017';
    mongoClient.connect(url, function (err, client) {
        var db = client.db('racers');
        console.log("Connected successfully to server");
        var collection = db.collection('racers');
        collection.find({}).sort({fh:1,fm:1}).toArray(function (err, docs) {
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
};

function getRecordsSortTime(callback, keuken) {
    var result = {};
    var mongoClient = require('mongodb').MongoClient;
    var url = 'mongodb://localhost:27017';
    mongoClient.connect(url, function (err, client) {
        var db = client.db('racers');
        console.log("Connected successfully to server");
        var collection = db.collection('restaurants');
        // collection.find({cuisine: keuken}).project({name:1,cuisine:1,borough:1,_id:0}).toArray(function (err, docs) {
            collection.find().toArray(function (err, docs) {
            console.log("Restaurant document(s) found:");
                if (err) {
                    callback(err, {});
        
                } else {
                    callback(null, docs);
                }
            client.close();
        });
    })
};

function addRacers(response) {
    var result = {};
    var mongoClient = require('mongodb').MongoClient;
    var url = 'mongodb://localhost:27017';
    mongoClient.connect(url, function (err, client) {
        var db = client.db('racers');
        console.log("Connected successfully to server");
        var collection = db.collection('racers');
             var myobj = { fname: response.naam, lname: response.voornaam, gender: response.geslacht,fh: parseInt(response.uur) ,fm: parseInt(response.minuut) , };
            collection.insertOne(myobj,function (err, docs) {
            console.log("Racer(s) found:");
            console.log(docs.insertedCount + " racer(s) toegevoegd");    
            client.close();
        });
    });
};

app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/addracer.html', function(req, res) {
	res.sendFile(__dirname + "/" + "addracer.html");
});
app.post('/addRacers', function(req, res) {
	console.log("post");
	var response = {
        naam : req.body.fname,
        voornaam : req.body.lname,
        geslacht : req.body.gender,
        uur : req.body.fh,
        minuut : req.body.fm,
	};
    // var textBericht= req.body.fname;
    
    // res.end(textBericht);

    res.writeHead(200, {'Content-Type': 'text/html'});
	res.end(addRacers(response));

});


app.get('/toonRacer.html', function(req, res) {
	res.sendFile(__dirname + "/" + "toonRacer.html");
});
app.get('/all', function (req, res) {
	console.log('request received');
	getRecordsRacers(function (err, docs) {
		var result;
		if (err) {
			console.log('Error while performing query.');
			result = {};
		}
		else {
			console.log("Sending data to client:");
			result = JSON.stringify({ data: docs });
		}
		res.end(result);
	});
});
app.get('/man', function (req, res) {
	console.log('request received');
	getRacersMan(function (err, docs) {
		var result;
		if (err) {
			console.log('Error while performing query.');
			result = {};
		}
		else {
			console.log("Sending data to client:");
			result = JSON.stringify({ data: docs });
		}
		res.end(result);
	});
});
app.get('/vrouw', function (req, res) {
	console.log('request received');
	getRacersVrouw(function (err, docs) {
		var result;
		if (err) {
			console.log('Error while performing query.');
			result = {};
		}
		else {
			console.log("Sending data to client:");
			result = JSON.stringify({ data: docs });
		}
		res.end(result);
	});
});

var server = app.listen(1337, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log("Example app listening at http://%s:%s", host, port)
});