var express = require('express');
var bodyParse = require('body-parser');
var urlEncoded = bodyParse.urlencoded({extended: false});

var cities = {
    'lotopia': 'some description',
    'caspiana': 'description',
    'indigo': 'description',
    'banana': 'very delisious fruit'
};

var router = express.Router();

router.route('/')
    .get(function (request, response) {
        response.json(Object.keys(cities));
    })
    .post(urlEncoded, function (request, response) {
        var newCity = request.body;
        if (!newCity.name || !newCity.description) {
            response.sendStatus(400);
            return false;
        }

        cities[newCity.name] = newCity.description.toLowerCase();
        response.status(201).json(newCity.name);
    });

router.route('/:name')
    .delete(function (request, response) {
        delete cities[request.params.name];
        response.sendStatus(204);
    })
    .get(function (request, response) {
        response.render('show.ejs',
            {
                city: {
                    name: request.params.name,
                    desc: cities[request.params.name.toLowerCase()]
                }
            });
    });

module.exports = router;