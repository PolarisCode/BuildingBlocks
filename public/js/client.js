$(document).ready((function () {
    var city_list = $('.city_list');

    $.get('/cities', function (cities) {
        $(cities).each(function (index, val) {
            city_list.append('<div class="bg-primary">'+ val +'</div>')
        });
    });
}));

