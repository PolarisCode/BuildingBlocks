var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/bower_components'));
app.use('/bower',  express.static(__dirname + '/bower_components'));


app.get('/cities', function(request, response){
  var cities = ['Lotopia', 'Caspiana','Indigo'];
  response.json(cities);
});

module.exports = app;


