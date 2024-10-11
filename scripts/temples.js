// Dynamic Footer Year and Last Updated Date
document.addEventListener("DOMContentLoaded", function () {
    const yearSpan = document.getElementById("year");
    const lastUpdatedSpan = document.getElementById("lastUpdated");

    yearSpan.textContent = new Date().getFullYear();
    lastUpdatedSpan.textContent = document.lastModified;
});

const hamburger = document.querySelector('.hamburger');
if (hamburger) {
  hamburger.addEventListener('click', function() {
    // Your code for handling the click event
  });
}
document.querySelector('.hamburger').addEventListener('click', function() {
  document.querySelector('.nav-menu').classList.toggle('active');
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



