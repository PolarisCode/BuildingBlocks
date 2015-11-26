var express = require('express');
var app = express();
var bodyParse = require('body-parser');
var urlEncoded = bodyParse.urlencoded({extended: false});
var cities = require('./routes/cities');

app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/bower_components'));
app.use('/bower', express.static(__dirname + '/bower_components'));

app.use('/cities', cities);





module.exports = app;


