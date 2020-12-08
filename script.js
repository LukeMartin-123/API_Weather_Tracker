src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"

var APIKey = "9e0d8e95fda39b3fbd21fb0a7505ef69";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?" + APIKey;


// Ajax Call
$.ajax({
    url: queryURL,
    method: "GET"
  })