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

