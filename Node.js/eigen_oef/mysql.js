/*
 * vooraf:  npm install mysql 
 */

var toetsenbord = require('readline-sync');

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'deschop',
  port     : 3306
});

connection.connect();

// connection.query('SELECT * from planten', function(err, rows, fields) {
//   if (!err){
//     var result = JSON.stringify(rows);
//     console.log(result);
//   }
//   else{
//     console.log('Error while performing query.');
// 	}
// });
console.log("");

var toetsenbord = require('readline-sync');
var kleur = toetsenbord.question("Geef eerste kleur: ");

connection.query("SELECT * from planten where  kleur='"+kleur+"'", function(err, rows, fields) {
  if (!err){
    var result = JSON.stringify(rows);
    console.log(result);
  }
  else{
    console.log('Error while performing query.');
    console.log(err.message);
  }
  connection.end();
});

