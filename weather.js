$(document).ready(function() {
    
    
 
    

    // Here we are building the URL we need to query the database
    // var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=58ec2f17cb120da67f0d75c76c6810ed";

    // Here we run our AJAX call to the OpenWeatherMap API
    $("#searchBtn").click(function (e){
        console.log("click")
        var cityName = $('#citySearch').val().trim()
        console.log(cityName)
        var APIKey = "58ec2f17cb120da67f0d75c76c6810ed";
        
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey;

        console.log(queryURL)
        $.ajax({
        url: queryURL,
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

