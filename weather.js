$(document).ready(function() {
    //API key
    var APIKey = "58ec2f17cb120da67f0d75c76c6810ed";
    
    var cityName = document.getElementById("citySearch").innerText

    // Here we are building the URL we need to query the database
    // var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid="
    //    + APIKey;

    // Here we run our AJAX call to the OpenWeatherMap API
    $("#searchBtn").click(function (e){
        console.log("click" , cityName)
        

        $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?q=atlanta&appid=58ec2f17cb120da67f0d75c76c6810ed",
        type: "GET",
        dataType: "json",
        success: function(data) {
          console.log(data)

        // Transfer content to HTML
        $(".city").html("<h1>" + data.name + " Weather Details</h1>");
        $(".temp").text("Wind Speed: " + data.wind.speed);
        $(".humidity").text("Humidity: " + data.main.humidity);
        $(".windSpeed").text("Temperature (F) " + data.main.temp);
        $(".uV").text("Temperature (F) " + data.main.temp)

        }
    })
      // We store all of the retrieved data inside of an object called "response"
      // .then(function(response) {

        // // Log the queryURL
        // console.log(queryURL);

        // // Log the resulting object
        // console.log(response.main);


        // // Transfer content to HTML
        // $(".city").html("<h1>" + response.name + " Weather Details</h1>");
        // $(".temp").text("Wind Speed: " + response.wind.speed);
        // $(".humidity").text("Humidity: " + response.main.humidity);
        // $(".windSpeed").text("Temperature (F) " + response.main.temp);
        // $(".uV").text("Temperature (F) " + response.main.temp)
      // });
    })
})