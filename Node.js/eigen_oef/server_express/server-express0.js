'use strict';

var express = require('express');
var server = express();

server.get('/process-form.html', function(request, response){
    response.sendFile(__dirname+"/process-form.html");
});

//request methode =GET
// path: eingigd op .html(maar is niet )
server.get('/*.html', function(request, response){
    console.log(" request met method get for html gate received");
    response.send('request met get voor html pagina wotdt verweerkt');
});
//request methode =GET
// path: eingigd op .html(maar is niet )

server.get('/*', function(request, response){
    
    console.log(" request met method get for NOT html receivet");
    response.send('request met get voor NIET-html pagina wotdt verweerkt');

});

app.get('/*', function(request, response){
    var voornaam = request.query.voornaam;
    var naam= request.query.naam;
   console.log(" request met method get for NOT html receivet");
   response.send('request met get voor NIET-html pagina wotdt verweerkt');

});

server.post('/*', function(request, response){
    console.log('request met methode post received'),
    response.send("request voor POST wordt verwerkt")

})

// all: antwoord op elke request van http
// path: eender wat
server.all("/*", function(request, response){
    response.send("Hello server express");
});

server.listen(8083);