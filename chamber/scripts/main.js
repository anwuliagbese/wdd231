const apiKey = "YOUR_API_KEY";
const city = "ChamberLocationCity";
const weatherContainer = document.getElementById("weather");

async function fetchWeather() {
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    const current = data.list[0];
    const forecast = data.list.slice(1, 4); // Next 3 forecasts

    weatherContainer.innerHTML = `
        <p><strong>Current Temperature:</strong> ${current.main.temp}°C</p>
        <p><strong>Description:</strong> ${current.weather[0].description}</p>
        <h3>3-Day Forecast:</h3>
        <ul>
            ${forecast
              .map(
                (day) =>
                  `<li>${new Date(day.dt_txt).toLocaleDateString()}: ${day.main.temp}°C, ${day.weather[0].description}</li>`
              )
              .join("")}
        </ul>
    `;
}

fetchWeather();
const members = [
    { name: "Company A", level: "gold", logo: "logoA.png", phone: "123-456", address: "123 St", website: "http://companyA.com" },
    { name: "Company B", level: "silver", logo: "logoB.png", phone: "456-789", address: "456 St", website: "http://companyB.com" },
    { name: "Company C", level: "gold", logo: "logoC.png", phone: "789-012", address: "789 St", website: "http://companyC.com" },
];

const spotlightContainer = document.getElementById("spotlight-cards");
const spotlights = members.filter(m => m.level === "gold" || m.level === "silver")
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

spotlights.forEach(member => {
    spotlightContainer.innerHTML += `
        <div class="spotlight-card">
            <img src="images/${member.logo}" alt="${member.name} logo">
            <h3>${member.name}</h3>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <p><strong>Address:</strong> ${member.address}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
            <p><strong>Membership Level:</strong> ${member.level}</p>
        </div>
    `;
});
