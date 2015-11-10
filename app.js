var express = require('express');
var app = express();

app.get('/', function(request, response){
  response.send("Ok");
});

app.get('/cities', function(request, response){
  var cities = ['Lotopia', 'Caspiana','Indigo'];
  response.json(cities);
});

module.exports = app;


