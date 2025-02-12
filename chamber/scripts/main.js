document.addEventListener("DOMContentLoaded", () => {
  loadVisitMessage();
  loadCards();
});

// Function to display visit message using localStorage
function loadVisitMessage() {
  const visitMessage = document.getElementById("visit-message");
  const lastVisit = localStorage.getItem("lastVisit");
  const currentTime = Date.now();

  if (!lastVisit) {
      visitMessage.textContent = "Welcome! Let us know if you have any questions.";
  } else {
      const daysSince = Math.floor((currentTime - lastVisit) / (1000 * 60 * 60 * 24));
      visitMessage.textContent = daysSince === 0 ? "Back so soon! Awesome!" : `You last visited ${daysSince} day${daysSince > 1 ? 's' : ''} ago.`;
  }

  localStorage.setItem("lastVisit", currentTime);
}

// Function to fetch and display interest cards
function loadCards() {
  fetch("members.json")
      .then(response => response.json())
      .then(data => {
          const container = document.getElementById("cards-container");
          container.innerHTML = data.map(item => `
              <div class="card">
                  <h2>${item.title}</h2>
                  <figure>
                      <img src="${item.image}" alt="${item.title}" loading="lazy">
                  </figure>
                  <address>${item.address}</address>
                  <p>${item.description}</p>
                  <button onclick="window.location='${item.link}'">Learn More</button>
              </div>
          `).join("");
      })
      .catch(error => console.error("Error loading JSON:", error));
}
document.querySelector("#copyright").textContent = `© ${new Date().getFullYear()}`;
document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`;
