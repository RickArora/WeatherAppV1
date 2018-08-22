
$(document).ready(function(){
$output = "";
$lat = "";
$long = "";
$apiURl = "";
$toStringWeather = "";
$temp = "";
$counter = 2;
$city = "";

$.getJSON('http://ip-api.com/json', function(data) { 
	console.log(data);
	console.log("test");
lat = data.lat;
long = data.lon;
city = data.city;
apiURl = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&units=metric&APPID=9831e8cfbb31cc22a052364d2d9dc1c8";

$.getJSON(apiURl,function(json) {
$(".weather").html(JSON.stringify(json));
$location = " You are located in: <strong>Country:</strong> " + json.sys["country"] + " <strong>City:</strong>  " + city;
console.log($location);
$weather = " The weather in your area is currently: " +json.weather[0].main;
$temp = json.main["temp"];
var iconCode = json.weather[0].icon;
$joined = $location + "<br>"  + $weather + "<br>";
var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
$(".icon").html("<img src='http://openweathermap.org/img/w/" + json.weather[0].icon + ".png' alt='Icon depicting current weather.'>");
$(".weather").html("<p>" + $joined +  "</p>");
$(".temp").html("The temperature in your area is currently: " + $temp + " C degrees");
	});
}); 

	    $(document).on('click', '.switch', function() {
	    	x = $temp * 1.8+32;
	    	console.log(x);
	   if ($counter % 2 == 0) {
$(".temp").html("The temperature in your area is currently: " + x + " F degrees");	
$counter++;}
	else {
$(".temp").html("The temperature in your area is currently: " + $temp + " C degrees");
$counter++;
	}
	});
});

