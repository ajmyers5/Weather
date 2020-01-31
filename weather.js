$(document).ready(function() {
    
    
    // var cityName = $('#citySearch').val().trim()
    // var APIKey = "58ec2f17cb120da67f0d75c76c6810ed";
    

    // Here we are building the URL we need to query the database
    // var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=58ec2f17cb120da67f0d75c76c6810ed";

    // Here we run our AJAX call to the OpenWeatherMap API
    $("#searchBtn").click(function (e){
        console.log("click",)
        
        // var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=58ec2f17cb120da67f0d75c76c6810ed";
        $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?q=atlanta&appid=58ec2f17cb120da67f0d75c76c6810ed',
        type: "GET",
        dataType: "json",
        success: function(data) {
          console.log(data)

        // Transfer content to HTML
        $(".city").html("<h1>" + data.name + " Weather Details</h1>");
        $(".temp").text("Wind Speed: " + data.wind.speed);
        $(".humidity").text("Humidity: " + data.main.humidity);
        $(".windSpeed").text("Temperature (F) " + data.main.temp);
        $(".uV").text("UV Index " + data.main.temp)

        }
    })
    })
})

// var cityName = $('#citySearch').val().trim()
// var APIKey = "58ec2f17cb120da67f0d75c76c6810ed";
// function searchCities(city) {
//     // Here we are building the URL we need to query the database
//     var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=58ec2f17cb120da67f0d75c76c6810ed";
//     // Here we run our AJAX call to the OpenWeatherMap API
//     $.ajax({
//       url: queryURL,
//       method: "GET"
//     })
//       // We store all of the retrieved data inside of an object called "response"
//       .then(function(response) {
//         // Log the queryURL
//         console.log(queryURL);
//         // Log the resulting object
//         console.log(response);
//       });
//     }
//     $(".button").on("click", function(event) {
//         // Preventing the button from trying to submit the form
//          event.preventDefault();
//         // Storing the city name
//         var cityName = $("#cityName").val().trim();
//       // Running the searchCitiesInTown function (passing in the city as an argument)
//       searchCities(cityName);
//     });