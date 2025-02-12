document.addEventListener("DOMContentLoaded", () => {
    fetchProphets();
});

function fetchProphets() {
    const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
    const cards = document.querySelector('#cards');

    fetch(url)
        .then(response => response.json())
        .then(data => displayProphets(data.prophets))
        .catch(error => console.error("Error fetching prophets:", error));
}

function displayProphets(prophets) {
    const container = document.getElementById("prophets-container");

    container.innerHTML = prophets.map(prophet => `
        <div class="prophet-card">
            <h2>${prophet.name} ${prophet.lastname}</h2>
            <p><strong>Birth Date:</strong> ${prophet.birthdate}</p>
            <p><strong>Birth Place:</strong> ${prophet.birthplace}</p>
            <img src="${prophet.imageurl}" alt="Portrait of ${prophet.name} ${prophet.lastname}" loading="lazy">
        </div>
    `).join("");
}
const getProphetData = async () => {
    const response = await fetch(url); // Fetch the JSON data
    const data = await response.json(); // Convert response to JSON
    console.table(data.prophets); // Log data as a table in DevTools
    displayProphets(data.prophets); // Call function to display the prophets
};

// Call the function to fetch and display the data
getProphetData();
const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        // Create elements
        const card = document.createElement('section');
        const fullName = document.createElement('h2');
        const portrait = document.createElement('img');

        // Populate h2 with Prophet's full name
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        // Set image attributes
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy'); // Enable lazy loading
        portrait.setAttribute('width', '200');
        portrait.setAttribute('height', '250');

        // Append elements to the card
        card.appendChild(fullName);
        card.appendChild(portrait);

        // Append card to the cards container
        cards.appendChild(card);
    });
};
