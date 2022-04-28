// api key="d42c50015d0a91d30db2ab09e7a17bdc";
function button() {
    let select = document.getElementById("searchbar").value;
    weather.fetchWeather(select);
}
document.getElementById("searchbar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        button();
    }
})


let weather = {
    "apikey": "d42c50015d0a91d30db2ab09e7a17bdc",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + "d42c50015d0a91d30db2ab09e7a17bdc").then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        // to set data in html -
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.getElementById("cityName").innerHTML = "Weather in " + name;
        document.getElementById("temperature").innerHTML = temp + " °C ";
        document.getElementById("icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.getElementById("description").innerHTML = description;
        document.getElementById("humidity").innerHTML = "Humidity : " + humidity + " % ";
        document.getElementById("wind").innerHTML = "Wind Speed : " + speed + " km/h ";
        // to make data visible -
        document.getElementById("cityName").style.display = "block";
        document.getElementById("temperature").style.display = "block";
        document.getElementById("icon").style.display = "block";
        document.getElementById("description").style.display = "block";
        document.getElementById("humidity").style.display = "block";
        document.getElementById("wind").style.display = "block";
    }

}