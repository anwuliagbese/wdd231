const API_KEY = 'a3b704f17c1223b0b58fbc810db3dd4e';
const LOCATION = 'Ikot Ekpene';

async function fetchWeather() {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${LOCATION}&appid=${API_KEY}&units=metric`
    );
    const data = await response.json();
    displayWeather(data);
}

function displayWeather(data) {
    const currentWeather = data.list[0];
    const forecast = data.list.slice(1, 4); // Next 3 days
    const weatherDiv = document.getElementById('weather-info');

    weatherDiv.innerHTML = `
        <p><strong>Current Temperature:</strong> ${currentWeather.main.temp}°C</p>
        <p><strong>Description:</strong> ${currentWeather.weather[0].description}</p>
        <h3>3-Day Forecast</h3>
        <ul>
            ${forecast.map(day => `
                <li>${new Date(day.dt_txt).toLocaleDateString()} - ${day.main.temp}°C, ${day.weather[0].description}</li>
            `).join('')}
        </ul>
    `;
}

fetchWeather();
