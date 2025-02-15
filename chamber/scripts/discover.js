document.addEventListener("DOMContentLoaded", function () {
    // Load last visit date
    const visitMessage = document.getElementById("visit-message");
    const lastVisit = localStorage.getItem("lastVisit");
    const now = new Date();
    localStorage.setItem("lastVisit", now.toISOString());

    if (lastVisit) {
        const daysAgo = Math.floor((now - new Date(lastVisit)) / (1000 * 60 * 60 * 24));
        visitMessage.textContent = daysAgo === 0 ? "Welcome back! You visited today." : `Welcome back! You last visited ${daysAgo} days ago.`;
    } else {
        visitMessage.textContent = "Welcome! This is your first visit.";
    }

    // Load JSON data
    fetch("data/members.json")
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById("cards-container");
            data.slice(0, 8).forEach((member, index) => {
                const card = document.createElement("div");
                card.classList.add("card");
                card.innerHTML = `
                    <h3>${member.name}</h3>
                    <img src="${member.image}" alt="${member.name}" loading="lazy">
                    <p>${member.address}</p>
                    <p>${member.description}</p>
                    <a href="${member.website}" target="_blank">Learn More</a>
                `;
                container.appendChild(card);
            });
        });

    // Toggle grid/list view
    document.getElementById("toggle-view").addEventListener("click", () => {
        const container = document.getElementById("cards-container");
        container.classList.toggle("list-view");
        container.classList.toggle("grid-view");
    });

    // Set footer dates
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("last-modified").textContent = document.lastModified;
});
document.getElementById("menu-toggle").addEventListener("click", function () {
    document.getElementById("menu").classList.toggle("show");
});
