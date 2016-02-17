// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var querystring = require('querystring');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// var sass = require('node-sass');

  // sass.render({
  //   file: scss_filename,
  //   [, options..]
  // }, function(err, result) { /*...*/ });

// Create Express App Object \\
var app = express();

// $http({
//         method: 'JSONP',
//         url: 'http://www.giantbomb.com/api/game/3030-4725/',
//         params: {
//             format: 'jsonp',
//             json_callback: 'JSON_CALLBACK'
//         }
//     })


// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));


// Routes \\
// app.get('/', function(req, res, next){
//   res.sendFile('index.html', {root:'./public'});
// });
app.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('index.html', { root:__dirname + '/public' });
});

// Creating Server and Listening for Connections \\
var port = 3000;
app.listen(port, function(){
  console.log('Server running on port ' + port);

process.on('uncaughtException', function (err) {
    console.log(err);
}); 

});