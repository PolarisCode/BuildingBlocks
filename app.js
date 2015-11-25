var express = require('express');
var app = express();

var bodyParse = require('body-parser');
var urlEncoded = bodyParse.urlencoded({extended: false});


app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/bower_components'));
app.use('/bower', express.static(__dirname + '/bower_components'));


var cities = {
    'Lotopia': 'some description',
    'Caspiana': 'description',
    'Indigo': 'description',
    'Banana': 'very delisious fruit'
};

app.get('/cities', function (request, response) {
    response.json(Object.keys(cities));
});

app.post('/cities', urlEncoded, function (request, response) {
    var newCity = request.body;
    cities[newCity.name] = newCity.description;
    response.status(201).json(newCity.name);
});

app.delete('/cities/:name', function (request, response) {
    delete cities[request.params.name];
    response.sendStatus(204);
});
module.exports = app;


