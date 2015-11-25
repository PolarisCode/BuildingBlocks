$(document).ready((function () {
    var city_list = $('.city_list'),
        form = $('form'),

        appendCity = function (name) {
            city_list.append('<div class="bg-primary cityItem"><span class="cityName">' + name +
                '</span><span class="pull-right removeLink">Remove</span></div>');
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
        },

        handleRemoveCities = function () {
            city_list.on('click', '.removeLink', function(){
                var clickedCity = $(this).parent();
                $.ajax({
                    url:'/cities/' + clickedCity.find('.cityName').text(),
                    type:'DELETE',
                    success: function(){
                        clickedCity.remove();
                    }
                });
            });
        };


    // init
    (function () {
        getCities();
        handleFormSubmit();
        handleRemoveCities();
    })();
}));

