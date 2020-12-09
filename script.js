src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"
var APIkey = "9e0d8e95fda39b3fbd21fb0a7505ef69";
const now = moment();

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
            var todayIcon = $("<img>").attr("src", "http://openweathermap.org/img/wn/" + response.weather.icon)
            
            
            
            $(".info").text(response.name) +$(".current-day").text(now.format("dddd MMMM Do"));
            $(".info").text(todayIcon);
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
            var forecastQueryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIkey;
            // Ajax Call for 5 day forecast
            $.ajax({
                url: forecastQueryURL,
                method: "GET"
            })

                // Store ajax call in an object called forcastResponse
                .then(function (forecastResponse) {
                    console.log(forecastQueryURL);
                    // $(".card1-Date").text("Date: " + );
                    var oneDayForward = new moment().add(1, 'day');
                    $(".card1-Date").text(oneDayForward.format('dddd MMMM DD'))
                    var forecastTemp=(forecastResponse.list[4].main.temp- 273.15) * 1.80 + 32;
                    $(".card1-Temperature").text("Temperature: " + forecastTemp.toFixed(2));
                    $(".card1-Humidity").text("Humidity: " + forecastResponse.list[4].main.humidity);

                    var twoDayForward = new moment().add(2, 'day');
                    $(".card2-Date").text(twoDayForward.format('dddd MMMM DD'))
                    var forecastTemp2=(forecastResponse.list[12].main.temp- 273.15) * 1.80 + 32;
                    $(".card2-Temperature").text("Temperature: " + forecastTemp2.toFixed(2));
                    $(".card2-Humidity").text("Humidity: " + forecastResponse.list[12].main.humidity);

                    var threeDayForward = new moment().add(3, 'day');
                    $(".card3-Date").text(threeDayForward.format('dddd MMMM DD'))
                    var forecastTemp3=(forecastResponse.list[20].main.temp- 273.15) * 1.80 + 32;
                    $(".card3-Temperature").text("Temperature: " + forecastTemp3.toFixed(2));
                    $(".card3-Humidity").text("Humidity: " + forecastResponse.list[20].main.humidity);

                    var fourDayForward = new moment().add(4, 'day');
                    $(".card4-Date").text(fourDayForward.format('dddd MMMM DD'))
                    var forecastTemp4=(forecastResponse.list[28].main.temp- 273.15) * 1.80 + 32;
                    $(".card4-Temperature").text("Temperature: " + forecastTemp4.toFixed(2));
                    $(".card4-Humidity").text("Humidity: " + forecastResponse.list[28].main.humidity);

                    var fiveDayForward = new moment().add(5, 'day');
                    $(".card5-Date").text(fiveDayForward.format('dddd MMMM DD'))
                    var forecastTemp5=(forecastResponse.list[36].main.temp- 273.15) * 1.80 + 32;
                    $(".card5-Temperature").text("Temperature: " + forecastTemp5.toFixed(2));
                    $(".card5-Humidity").text("Humidity: " + forecastResponse.list[36].main.humidity);



                });


        });
});




// Append the five day forecast to the cards. 1 day = 1 card

// Make the search bar usable. When a city is type into the search that name is then entered into the API and the data is pulled into the AJAX call