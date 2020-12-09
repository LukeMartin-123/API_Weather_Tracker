src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"
var APIkey = "9e0d8e95fda39b3fbd21fb0a7505ef69";
// var cityName = //"user input";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + "Denver" + "&appid=" + APIkey;






// Ajax Call for city, temp, humidity, wind
$.ajax({
    url: queryURL,
    method: "GET"
})

    // Store ajax call in an object called response
    .then(function(response) {
        console.log(queryURL);
        console.log(response);

        // Append the data for city, date, temperature, Humidity, Wind Speed to the Jumbotron
        $(".info").text(response.name);
        var tempF = (response.main.temp - 273.15) * 1.80 + 32;
        $(".lead-temperature").text("Temperature: " + tempF.toFixed(2));
        $(".lead-humidity").text("Humidity: " + response.main.humidity);
        $(".lead-wind").text("Wind Speed: " + response.wind.speed);
       lat = response.coord.lat;
       lon = response.coord.lon;
    });
  
    var lat;
    var lon;

var uvQueryURL = "http://api.openweathermap.org/data/2.5/uvi?lat={"+lat+"}&lon={"+lon+"}&appid="+APIkey;
    
// Ajax Call for UV index
$.ajax({
    url: uvQueryURL,
    method: "GET"

})
 // Append UV to jumbotron
    .then(function (uvResponse) {
        console.log(uvQueryURL);
    // $(".lead-UV").text("UV: " + response.wind.speed);

      
    });



// Append the five day forecast to the cards. 1 day = 1 card

// Make the search bar usable. When a city is type into the search that name is then entered into the API and the data is pulled into the AJAX call