document.addEventListener("DOMContentLoaded", () => {
  const memberDirectory = document.getElementById("member-directory");
  const gridViewBtn = document.getElementById("grid-view");
  const listViewBtn = document.getElementById("list-view");
  const yearSpan = document.getElementById("year");
  const lastModifiedSpan = document.getElementById("last-modified");

  // Display current year
  yearSpan.textContent = new Date().getFullYear();

  // Display last modified date
  lastModifiedSpan.textContent = document.lastModified;

  // Fetch and display members
  fetch("data/members.json")
      .then(response => response.json())
      .then(data => {
          data.forEach(member => {
              const card = document.createElement("div");
              card.classList.add("member-card");
              card.innerHTML = `
                  <img src="images/${member.image}" alt="${member.name}">
                  <h3>${member.name}</h3>
                  <p>${member.address}</p>
                  <a href="${member.website}" target="_blank">Visit Website</a>
              `;
              memberDirectory.appendChild(card);
          });
      });

  // Toggle between grid and list views
  gridViewBtn.addEventListener("click", () => {
      memberDirectory.classList.remove("list");
      memberDirectory.classList.add("grid");
  });

  listViewBtn.addEventListener("click", () => {
      memberDirectory.classList.remove("grid");
      memberDirectory.classList.add("list");
  });
});
