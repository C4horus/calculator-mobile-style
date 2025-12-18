const API_KEY = "YOUR_API_KEY_HERE"; 

async function getWeather() {
    let city = document.getElementById("city").value;

    if (city === "") return;

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    let response = await fetch(url);
    let data = await response.json();

    if (data.cod === "404") {
        document.getElementById("result").innerHTML = "City Not Found!";
        return;
    }

    document.getElementById("result").innerHTML = `
        <h2>${data.name}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Weather: ${data.weather[0].description}</p>
    `;
}
