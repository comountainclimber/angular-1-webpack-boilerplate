// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var querystring = require('querystring');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var sassMiddleware = require('node-sass-middleware');
var fs = require('fs');
var path = require('path');

// Create Express App Object \\
var app = module.exports = express();

app.use(
  sassMiddleware({
    src: __dirname + '/public/sass',
    dest: __dirname + '/public/stylesheets',
    debug: true,
    outputStyle: 'compressed',
    prefix:  '/stylesheets'
  })
);

app.use(express.static(path.join(__dirname, '/public')));

app.use(require('prerender-node').set('prerenderToken', 'MOZX1whsk4QQuUB6G7Ki')); 

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes \\
app.get('/', function(req, res, next){
  res.sendFile('index.html', {root:'./public'});
});

app.get('*', function (req, res) {
  res.redirect('/');
});

// Creating Server and Listening for Connections \\
var port = 3000;
app.listen(port, function(){
  console.log('Server running on port ' + port);

  process.on('uncaughtException', function (err) {
    console.log(err);
}); 

});