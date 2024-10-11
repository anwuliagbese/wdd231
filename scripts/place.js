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
// One-liner wind chill calculation function
function calculateWindChill(temp, windSpeed) {
    return Math.round(35.74 + (0.6215 * temp) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temp * Math.pow(windSpeed, 0.16)));
  }
  
  // Function to check conditions and call the calculateWindChill function
  function checkConditions() {
    const temp = document.getElementById('temperature').value;
    const windSpeed = document.getElementById('windSpeed').value;
  
    // Ensure conditions: temp ≤ 50°F and windSpeed ≥ 3 mph
    if (temp <= 50 && windSpeed >= 3) {
      const windChill = calculateWindChill(temp, windSpeed); // Call the function if conditions are met
      document.getElementById('result').textContent = `Wind Chill Factor: ${windChill}°F`;
    } else {
      document.getElementById('result').textContent = "Conditions not met for wind chill calculation.";
    }
  }
  