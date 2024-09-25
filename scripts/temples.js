// Dynamic Footer Year and Last Updated Date
document.addEventListener("DOMContentLoaded", function () {
    const yearSpan = document.getElementById("year");
    const lastUpdatedSpan = document.getElementById("lastUpdated");

    yearSpan.textContent = new Date().getFullYear();
    lastUpdatedSpan.textContent = document.lastModified;
});

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('show');
    hamburger.textContent = hamburger.textContent === '☰' ? 'X' : '☰';
});
