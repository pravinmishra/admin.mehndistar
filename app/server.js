var express = require('express');			// express module
var app = express();						// initiating express app
var http = require('http');					// http module
var path = require('path');
var server = http.createServer(app);        // creating server

app.use(express.static(__dirname + '/../public'));
console.log("dirname",__dirname);
server.listen(8282, function(err){
    console.log("server started");
});		// server starting on port '8282'

