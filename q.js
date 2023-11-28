let inputbox = document.getElementById("inputbox")
let temp = document.querySelector(".temp")
let city1 = document.querySelector(".city")
let humidity = document.querySelector(".humidity")
let WindSpeed = document.querySelector(".wind")
let icon = document.getElementById("icon")
let error = document.getElementById("error")
let main = document.getElementById("main")

const WeatherChecker = async () => {
    let city = inputbox.value

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b0f2c44eb0d867d41746ff0ece00e352&units=metric`

    let response = await fetch(url)
    let data = await response.json()
    console.log(data)

    if (response.status == 404) {
        error.style.display = "block"
        main.style.display = "none"
    }
    else {

        temp.innerHTML = Math.round(data.main.temp) + "°C";
        city1.innerHTML = data.name;
        humidity.innerHTML = data.main.humidity + "%";
        WindSpeed.innerHTML = data.wind.speed + "Km/hr";

        if (data.weather[0].main == "Clouds") {
            icon.src = "weather-app-img/images/clouds.png"
        }
        else if (data.weather[0].main == "Clear") {
            icon.src = "weather-app-img/images/clear.png"
        }
        else if (data.weather[0].main == "Drizzle") {
            icon.src = "weather-app-img/images/drizzle.png"
        }
        else if (data.weather[0].main == "Humidity") {
            icon.src = "weather-app-img/images/humidity.png"
        }
        else if (data.weather[0].main == "Mist") {
            icon.src = "weather-app-img/images/mist.png"
        }
        else if (data.weather[0].main == "Rain") {
            icon.src = "weather-app-img/images/rain.png"
        }
        else if (data.weather[0].main == "Snow") {
            icon.src = "weather-app-img/images/snow.png"
        }
        else if (data.weather[0].main == "Wind") {
            icon.src = "weather-app-img/images/wind.png"
        }

        main.style.display = "block"
        error.style.display = "none"
    }



}
function btn() {
    WeatherChecker();
}
