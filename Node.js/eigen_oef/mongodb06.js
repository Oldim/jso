/**  voor MongoDb 3+ 
Delete the document with the address "Mountain 21":
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
         var myquery = { cuisine: 'Kg' };
        collection.deleteOne(myquery,function (err, docs) {
        console.log("Restaurant document(s) found:");
        console.log(docs.result.n + " document(s) deleted");        
        client.close();
    });
});