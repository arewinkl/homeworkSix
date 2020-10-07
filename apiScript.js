//variables for API data and container

//build function for API five day forecast

//function for current day forecast

//var key = "0c8d761ec4efbbb0c661c09fe9727d66";
//var city = "london"; // My test case was "London"
//var url = "https://api.openweathermap.org/data/2.5/forecast";

$(document).ready(function() {
    var key = "0c8d761ec4efbbb0c661c09fe9727d66";
    var city = "london";
    
    var currentWeather ='http://api.openweathermap.org/data/2.5/forecast?q='+city+'&appid='+key+'&count=10'


     $.ajax({
    url: currentWeather,
    //'http://api.openweathermap.org/data/2.5/forecast?appid='+key+'&q='+city+'&count=10',
    dataType: "json",
    method: "GET",
    
    }).then(function(response){
        console.log(response)

        var temp= (response.city.list[0].main.temp_kf)
        var humidity= (response.city.list[0].main.humidity)
        var windSpeed= (response.city.list[0].wind.speed)
        var feelsLike= (response.city.list[0].main.feels_like)
        var vis= (response.city.list[0].sys.visibility)


        console.log(response.city.list[0].main.temp_kf)
        console.log(response.city.list[0].main.humidity)
        console.log(response.city.list[0].wind.speed)
        console.log(response.city.list[0].main.feels_like)
        console.log(response.city.list[0].sys.visibility)

        $("#temperature").append(temp + " degrees F")
        $("#humid").append(humidity + " percent")
        $("#wind").append(windSpeed + " MPH")
        $("#feels").append(feelsLike + " Fahrenheit")
        $("#visibility").append(vis)

        
    });

})