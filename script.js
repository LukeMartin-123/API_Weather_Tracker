src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"
var APIkey = "9e0d8e95fda39b3fbd21fb0a7505ef69";

// Search bar accepts input and retrieves the proper API
$("#find-city").on("click", function (event) {
    event.preventDefault();
    var city = $("#city-input").val();
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIkey;


    // Ajax Call for city, temp, humidity, wind
    $.ajax({
        url: queryURL,
        method: "GET"
    })

        // Store ajax call in an object called response
        .then(function (response) {
            console.log(queryURL);
            console.log(response);

            // Append the data for city, date, temperature, Humidity, Wind Speed to the Jumbotron
            $(".info").text(response.name);
            var tempF = (response.main.temp - 273.15) * 1.80 + 32;
            $(".lead-temperature").text("Temperature: " + tempF.toFixed(2));
            $(".lead-humidity").text("Humidity: " + response.main.humidity);
            $(".lead-wind").text("Wind Speed: " + response.wind.speed);
            var lat = response.coord.lat;
            var lon = response.coord.lon;

            // Set a variable for the UV Index API
            var uvQueryURL = "http://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=" + APIkey;

            // Ajax Call for UV index API
            $.ajax({
                url: uvQueryURL,
                method: "GET"
            })
                // Append UV to jumbotron
                .then(function (uvResponse) {
                    console.log(uvQueryURL);
                    $(".lead-UV").text("UV: " + uvResponse.value);
                });

        });

    var forecastQueryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIkey;
    // Ajax Call for 5 day forecast
    $.ajax({
        url: forcastQueryURL,
        method: "GET"
    })

        // Store ajax call in an object called forcastResponse
        .then(function (forecastResponse) {
            console.log(forcastQueryURL);
            console.log(forecastResponse);

        });
});




// Append the five day forecast to the cards. 1 day = 1 card

// Make the search bar usable. When a city is type into the search that name is then entered into the API and the data is pulled into the AJAX call