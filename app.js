// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var querystring = require('querystring');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Routes \\
app.get('/', function(req, res, next){
  res.sendFile('index.html', {root:'./public'});
});

app.get('/contact', function(req, res, next){
  res.sendFile('index.html', {root:'./public'});
});

app.get('/faq', function(req, res, next){
  res.sendFile('index.html', {root:'./public'});
});

app.get('/memberships', function(req, res, next){
  res.sendFile('index.html', {root:'./public'});
});

app.post('/homepageform', function(req, res, next){
  var postData = querystring.stringify({
    'email': req.body.email,
    'firstname': req.body.firstname,
    'lastname': req.body.lastname
  });

  var options = {
    hostname: 'forms.hubspot.com',
    path: 'https://forms.hubspot.com/uploads/form/v2/560492/7a604d2e-79a8-435c-a72d-bafe2be7f739',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': postData.length
    }
  };

  var request = http.request(options, function(response){
  console.log("Status: " + response.statusCode);
  console.log("Headers: " + JSON.stringify(response.headers));
  response.setEncoding('utf8');
  response.on('data', function(chunk){
    console.log('Body: ' + chunk);
  });
});
request.write(postData);
request.end();
});

app.post('/contactpageform', function(req, res, next){
  var postData = querystring.stringify({
    'email': req.body.email,
    'firstname': req.body.firstname,
    'lastname': req.body.lastname,
    'phone': req.body.phone,
    'question': req.body.question
  });

  var options = {
    hostname: 'forms.hubspot.com',
    path: 'https://forms.hubspot.com/uploads/form/v2/560492/fc7d1943-6935-4c3a-827c-f73f3ead72cf',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': postData.length
    }
  };

  var request = http.request(options, function(response){
  console.log("Status: " + response.statusCode);
  console.log("Headers: " + JSON.stringify(response.headers));
  response.setEncoding('utf8');
  response.on('data', function(chunk){
    console.log('Body: ' + chunk);
  });
});
request.write(postData);
request.end();
});

app.post('/membershippageform', function(req, res, next){
  var postData = querystring.stringify({
    'email': req.body.email,
    'firstname': req.body.firstname,
    'lastname': req.body.lastname,
    'options': req.body.option,
    'phone': req.body.phone
  });

  var options = {
    hostname: 'forms.hubspot.com',
    path: 'https://forms.hubspot.com/uploads/form/v2/560492/e7b130d1-f069-440f-8af1-a94c7b67733f',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': postData.length
    }
  };

  var request = http.request(options, function(response){
  console.log("Status: " + response.statusCode);
  console.log("Headers: " + JSON.stringify(response.headers));
  response.setEncoding('utf8');
  response.on('data', function(chunk){
    console.log('Body: ' + chunk);
  });
});
request.write(postData);
request.end();
});

// Creating Server and Listening for Connections \\
var port = 3000;
app.listen(port, function(){
  console.log('Server running on port ' + port);

  process.on('uncaughtException', function (err) {
    console.log(err);
}); 

});