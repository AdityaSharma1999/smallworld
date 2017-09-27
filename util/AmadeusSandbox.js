var apiKey = "3tiT2AwHzjXBasqIEoGf7KCJaXMqWEvk";
var FLIGHT_INSPIRATION_URL = "https://api.sandbox.amadeus.com/v1.2/flights/inspiration-search";
var http = require('http');
/*
TODO: Make a flight budget calculator method as well as cost per day calculator method
TODO: Make a holiday object
 */
/*
Function responsible for finding available locations for the given budget
 */
var flightInspiration = function (user, flightBudget, departureDateRange, duration){
    var originCity = user['city'];
    var query = FLIGHT_INSPIRATION_URL + "?apikey=" + apiKey + "&origin=" + originCity + "&max_price=" + flightBudget +
        "&departure_date=" + departureDateRange + "&duration=" + duration;
    var options = {
        'host': query
    }
    var response = null;
    http.get(options, function (res) {
        res.on('data', function (json) {
            response = json;
        }.on('error', function (e) {
                console.log("Error with http request to flight_inspiration amadeus");
            })
        )
    });
    if (response!= null){
        var results = response['results'];

    }


}