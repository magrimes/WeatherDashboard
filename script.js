// API key: 3b49a656fe3af7c1b318cdb7bf3447ef

$("#Search").on("click", function () {
    var city = $("#city").val()
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




