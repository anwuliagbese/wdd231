document.addEventListener('DOMContentLoaded', function() {
    // Display the current year in the footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Display the last modified date
    document.getElementById('lastModified').textContent = document.lastModified;

    // Windchill Calculation
    const temperature = 18; // Static value in °C
    const windSpeed = 10;   // Static value in km/h

    function calculateWindChill(temp, wind) {
        if (temp <= 10 && wind > 4.8) {
            return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1);
        } else {
            return "N/A";
        }
    }

    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById('windchill').textContent = windChill + " °C";
});
