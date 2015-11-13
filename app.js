var express = require('express');
var app = express();

app.use(express.static('./../public'));
app.use(express.static('./../bower_components'))
app.use('/bower',  express.static(__dirname + '/bower_components'));

app.get('/cities', function(request, response){
  var cities = ['Lotopia', 'Caspiana','Indigo'];
  response.json(cities);
});

module.exports = app;


