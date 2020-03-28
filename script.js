// API key: 3b49a656fe3af7c1b318cdb7bf3447ef

var cityName = document.querySelector("#cityName");
var showTemperature = document.querySelector("#temperature");
var showHumidity = document.querySelector("#humidity");
var showWindSpeed = document.querySelector("#windSpeed");
var showHistory = document.querySelector("#history");
var cityInput = document.querySelector("#cityInput");
var searchButton = document.querySelector("#searchButton");

var citySearchHistory = [];
var city = "Charlotte";

renderCitySearchHistory();
getCurrentWeatherSearch();

// Adds search history to local storage
button.addEventListener("click", function(event) {
    event.preventDefault();
    var cityValue = cityInput.value.trim();
    if (cityValue !== "") {
        city = cityValue;

        citySearchHistory.push(city);
        localStorage.setItem("Cities", JSON.stringify(citySearchHistory))
        cityInput.value = "";
        renderCitySearchHistory();
        getCurrentWeatherSearch();
    } else { return }
});









// Gets city from search box and retrieves from API
$("#searchButton").on("click", function () {
    var city = $("#cityInput").val()
    $.get("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=3b49a656fe3af7c1b318cdb7bf3447ef&units=imperial", function (data) {
        console.log(data)
        $("#temperature").text(data.main.temp)
        $("#icon").attr("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png")

        $("#history").prepend("<button>" + city + "</button>")
    })
})



$("#history").on("click", "button", function () {
    var city = $(this).text()
    $.get("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=3b49a656fe3af7c1b318cdb7bf3447ef&units=imperial", function (data) {
        console.log(data)
        $("#temperature").text(data.main.temp)
        $("#icon").attr("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png")

    })
})

// Stores and displays previous searches
function renderCitySearchHistory() {
    var storedCities = JSON.parse(localStorage.getItem("Cities"));
    if (storedCities !== null) {
        citySearchHistory = storedCities;
        city = citySearchHistory.slice(-1)[0];
    }
    showHistory.innerHTML = "";
    for (var i = 0; i < citySearchHistory.length; i++) {
        var cityTitle = citySearchHistory[i];

        var list = document.createElement("list");
        list.textContent = cityTitle;
        showHistory.appendChild(list);
    }
}
