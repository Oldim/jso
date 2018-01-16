var express = require('express');
var app = express();

/* bodyParser: 
  nodig om invoervelden van form die met method='post' verstuurd is te kunnen verwerken 
*/
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));

function getRecord() {
    var result={};
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
            result = JSON.stringify(rows);
            return result;
        }
        else {
            console.log('Error while performing query.');
        }
        connection.end(result);
    });
}
app.get('', function (req, res) {
    console.log("get");
    // Prepare output in JSON format
    var response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
});


var server = app.listen(1337, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
});