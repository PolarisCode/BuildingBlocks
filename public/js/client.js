$(document).ready((function () {
    var city_list = $('.city_list'),
        form = $('form'),


        appendCity = function (name) {
            city_list.append('<div class="bg-primary">' + name + '</div>')
        },

        getCities = function () {
            $.get('/cities', function (cities) {
                $(cities).each(function (index, val) {
                    appendCity(val);
                });
            });
        },

        handleFormSubmit = function () {
            form.on('submit', function (event) {
                event.preventDefault();

                var form = $(this);
                var cityData = form.serialize();

                $.ajax({
                    type: "POST",
                    url: '/cities',
                    data: cityData
                })
                    .error(function (err) {
                        alert('Error occurred: ' + err.toString());
                    })
                    .success(function (cityName) {
                        appendCity(cityName);
                        form[0].reset();
                    });
            });
        };


    // init
    (function() {
        getCities();
        handleFormSubmit();
    })();
}));

