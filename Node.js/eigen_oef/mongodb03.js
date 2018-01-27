/**  voor MongoDb 3+ */
/*
 * vooraf:  npm install mongodb
 */

'use strict';

var mongoClient = require('mongodb').MongoClient;
var toetsenbord = require('readline-sync');
// zie ook  http://mongodb.github.io/node-mongodb-native/3.0/quick-start/quick-start/

// Connection URL
var url = 'mongodb://localhost:27017';
// var keuken = toetsenbord.question("Geef naam keuken: ");
// Use connect method to connect to the server
mongoClient.connect(url, function (err, client) {
    var db = client.db('testdb');
    console.log("Connected successfully to server");
    // Get the restaurants collection
    var collection = db.collection('restaurants');
    // Find all documents
        var myquery = { borough: "Missing" };
        var newvalues = {$set: {borough: "unknown"} };
        collection.updateMany(myquery, newvalues,function (err, docs) {
        console.log("Restaurant document(s) found:");
        console.log(docs.result.nModified + " document(s) updated");

        
        client.close();
    });
});