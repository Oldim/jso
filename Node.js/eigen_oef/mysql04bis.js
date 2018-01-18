
/*
 * vooraf:  npm install mysql 
 */

/* UPDATE */

var toetsenbord = require('readline-sync');
var lev_code = toetsenbord.question("Geef eerste lev_code: ");

function updateRecord(row, callback) {
	var mysql = require('mysql');
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'deschop',
		port: 3306
    });
    
	connection.connect();
	connection.query('delete from leveranciers WHERE lev_code = ?',
    lev_code, function (err, result) {
			if (err) {
				callback(err, result);

			} else {
				callback(null, result);
			}
		});
	connection.end();
}

updateRecord(lev_code, function (err, result) {
	if (err) {
		console.log('Error while performing query.');
		console.log(err);
	}
	else {
		console.log("%d rows affected", result.affectedRows);
	}
});   
