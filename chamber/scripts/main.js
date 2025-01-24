document.addEventListener("DOMContentLoaded", () => {
    const membersContainer = document.getElementById("members");
    const gridViewButton = document.getElementById("grid-view");
    const listViewButton = document.getElementById("list-view");
    const yearSpan = document.getElementById("year");
    const lastModifiedSpan = document.getElementById("last-modified");

    // Set copyright year and last modified
    yearSpan.textContent = new Date().getFullYear();
    lastModifiedSpan.textContent = document.lastModified;

    // Fetch and display member data
    async function fetchMembers(view = "grid") {
        try {
            const response = await fetch("data/members.json");
            const members = await response.json();
            displayMembers(members, view);
        } catch (error) {
            console.error("Error fetching member data:", error);
        }
    }

    // Function to display members
    function displayMembers(members, view) {
        membersContainer.className = view; // Apply "grid" or "list" class
        membersContainer.innerHTML = members
            .map(member => `
                <div class="member-card">
                    <img src="${member.image}" alt="${member.name}" />
                    <h2>${member.name}</h2>
                    <p>${member.address}</p>
                    <p>${member.phone}</p>
                    <a href="${member.website}" target="_blank">Visit Website</a>
                </div>
            `)
            .join("");
    }

    // Event listeners for toggle buttons
    gridViewButton.addEventListener("click", () => fetchMembers("grid"));
    listViewButton.addEventListener("click", () => fetchMembers("list"));

    // Initial fetch with grid view
    fetchMembers("grid");
});


// Fetch and display randomly selected members
function displayRandomMembers() {
    fetch('members.json') // Path to your JSON file
      .then(response => response.json())
      .then(data => {
        // Filter members with gold or silver memberships
        const eligibleMembers = data.filter(member => 
          member.membership === 'gold' || member.membership === 'silver'
        );
  
        // Shuffle members and select 2–3 randomly
        const selectedMembers = eligibleMembers
          .sort(() => Math.random() - 0.5) // Shuffle the array
          .slice(0, Math.floor(Math.random() * 2) + 2); // Select 2–3 members
  
        // Render selected members to the DOM
        const membersContainer = document.getElementById('spotlights');
        membersContainer.innerHTML = selectedMembers.map(member => `
          <div class="spotlight-container">
            <img src="${member.image}" alt="${member.name}" class="member-image">
            <h3>${member.name}</h3>
            <p>${member.bio}</p>
            <span class="membership-level">${member.membership.toUpperCase()} Member</span>
          </div>
        `).join('');
      })
      .catch(error => console.error('Error fetching members data:', error));
  }
  
  // Call the function on page load
  document.addEventListener('DOMContentLoaded', displayRandomMembers);
  