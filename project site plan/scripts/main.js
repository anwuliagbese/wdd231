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


// Function to load and display featured members
function loadFeaturedMembers() {
    const dataPath = 'members.json'; // Path to the JSON file
  
    fetch(dataPath)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        // Filter gold and silver members
        const eligibleMembers = data.filter(member => 
          member.membership === 'gold' || member.membership === 'silver'
        );
  
        // Shuffle and select 2–3 members randomly
        const selectedMembers = eligibleMembers
          .sort(() => Math.random() - 0.5) // Shuffle members
          .slice(0, Math.floor(Math.random() * 2) + 2); // Pick 2–3 members
  
        // Render the selected members into the HTML
        const spotlightContainer = document.querySelector('.spotlight-container');
        spotlightContainer.innerHTML = selectedMembers.map(member => `
          <div class=".spotlight-container">
            <img src="${member.image}" alt="${member.name}" class="member-photo">
            <h3>${member.name}</h3>
            <p>${member.bio}</p>
            <span class="membership-level">${member.membership.toUpperCase()} Member</span>
          </div>
        `).join('');
      })
      .catch(error => {
        console.error('Error fetching members:', error);
      });
  }
  
  // Run the function after the DOM is loaded
  document.addEventListener('DOMContentLoaded', loadFeaturedMembers);

  document.addEventListener("DOMContentLoaded", () => {
    // Set timestamp when form loads
    document.getElementById("timestamp").value = new Date().toISOString();

    // Membership Card Animation on Load
    const cards = document.querySelectorAll(".membership-card");
    let delay = 200;
    cards.forEach(card => {
        setTimeout(() => {
            card.classList.add("show");
        }, delay);
        delay += 200; // Staggered animation
    });

    // Form Validation
    document.querySelector("form").addEventListener("submit", function (event) {
        const orgTitle = document.querySelector("input[name='org-title']");
        const titlePattern = /^[A-Za-z- ]{7,}$/;
        
        if (!titlePattern.test(orgTitle.value)) {
            alert("Organization title must be at least 7 characters and only contain letters, hyphens, and spaces.");
            orgTitle.focus();
            event.preventDefault();
        }
    });

    // Modal Handling
    window.openModal = function(id) {
        document.getElementById(id).style.display = "block";
    };

    window.closeModal = function(id) {
        document.getElementById(id).style.display = "none";
    };
});
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
  });
});

  // menuData.js
export const menuData = [
    { name: 'Grilled Chicken Skewers', description: 'Juicy grilled chicken with a tangy marinade.', price: '$10', category: 'Appetizers', featured: true },
    { name: 'Beef Wellington', description: 'Tender beef wrapped in flaky pastry.', price: '$30', category: 'Main Course', featured: true },
    // More menu items
  ];
  
  // main.js
  import { menuData } from './menuData.js';
  
  const container = document.getElementById('menu-items-container');
  
  menuData.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('menu-item');
    div.innerHTML = `
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <p>${item.price}</p>
    `;
    container.appendChild(div);
  });
  document.addEventListener("DOMContentLoaded", () => {
    const visitMessage = document.getElementById("visit-message");
    const lastVisit = localStorage.getItem("lastVisit");
    const now = Date.now();
    
    if (!lastVisit) {
        visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const daysSinceLastVisit = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
        
        if (daysSinceLastVisit < 1) {
            visitMessage.textContent = "Back so soon! Awesome!";
        } else {
            visitMessage.textContent = `You last visited ${daysSinceLastVisit} ${daysSinceLastVisit === 1 ? "day" : "days"} ago.`;
        }
    }

    localStorage.setItem("lastVisit", now);
});

document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("/").pop(); // Get current page filename
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach(link => {
      if (link.getAttribute("href") === currentPage) {
          link.classList.add("active"); // Add active class
      }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const visitMessage = document.getElementById("visit-message");
  let lastVisit = localStorage.getItem("lastVisit");

  if (lastVisit) {
      visitMessage.textContent = `Welcome back! Your last visit was on ${lastVisit}`;
  } else {
      visitMessage.textContent = "Welcome to the Discover page!";
  }

  localStorage.setItem("lastVisit", new Date().toLocaleDateString());
});
document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("/").pop(); // Get current page filename
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach(link => {
      if (link.getAttribute("href") === currentPage) {
          link.classList.add("active"); // Add active class
      }
  });
});
