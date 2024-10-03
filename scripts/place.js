document.addEventListener("DOMContentLoaded", () => {
    const temperature = 20; // Celsius
    const windSpeed = 5; // km/h

    function calculateWindChill(temp, wind) {
        if (temp <= 10 && wind > 4.8) {
            return Math.round(13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16));
        }
        return "N/A";
    }

    document.getElementById('windchill').textContent = calculateWindChill(temperature, windSpeed);

    // Update footer
    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('last-modified').textContent = document.lastModified;
});
