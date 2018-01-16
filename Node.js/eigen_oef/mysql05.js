var http = require('http');
var fs = require('fs');
var url = require('url');


// Create a server
http.createServer(function (request, response) {
    // Parse the request containing file name
    var pathname = url.parse(request.url).pathname;
    // Print the name of the file for which request is made.
    console.log("Request for " + pathname + " received.");

    // Read the requested file content from file system
    fs.readFile(pathname.substr(1), function (err, data) {
        if (err) {
            console.log(err);
            // HTTP Status: 404 : NOT FOUND    

            // Content Type: text/plain
            response.writeHead(200, { 'Content-Type': 'text/plain' });
            var bericht = "Hello st**\n"
            response.end(result);
        } else {
            // Page found	  
            // HTTP Status: 200 : OK
            // Content Type: text/plain
            response.writeHead(200, { 'Content-Type': 'text/html' });

            // Write the content of the file to response body
            response.write(data.toString());
        }
        // Send the response body 
        response.end();
    });
}).listen(1337);

// Console will print the message
console.log('Server running at http://127.0.0.1:1337/');

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'deschop',
    port: 3306
});
connection.connect();
connection.query('SELECT * from planten', function (err, rows, fields) {
    if (!err) {
        var result = JSON.stringify(rows);
        return result;
    }
    else {
        console.log('Error while performing query.');
    }
    connection.end();
});