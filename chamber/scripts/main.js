document.addEventListener("DOMContentLoaded", () => {
    const memberDirectory = document.getElementById("member-directory");
    const gridViewBtn = document.getElementById("grid-view");
    const listViewBtn = document.getElementById("list-view");

    // Fetch and display members
    async function fetchMembers() {
        try {
            const response = await fetch("data/members.json");
            const members = await response.json();
            displayMembers(members, "grid");
        } catch (error) {
            console.error("Error fetching members:", error);
        }
    }

    // Display members in the specified view
    function displayMembers(members, view) {
        memberDirectory.innerHTML = ""; // Clear current content
        memberDirectory.className = view; // Set view class (grid or list)

        members.forEach(member => {
            const card = document.createElement("div");
            card.classList.add("member-card");

            card.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>Phone: ${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
                <p class="membership-level">Membership Level: ${getMembershipLevel(member.membershipLevel)}</p>
            `;

            memberDirectory.appendChild(card);
        });
    }

    // Get membership level text
    function getMembershipLevel(level) {
        switch (level) {
            case 1: return "Member";
            case 2: return "Silver";
            case 3: return "Gold";
            default: return "Unknown";
        }
    }

    // Toggle between grid and list views
    gridViewBtn.addEventListener("click", () => {
        fetchMembers().then(() => memberDirectory.classList.add("grid"));
    });

    listViewBtn.addEventListener("click", () => {
        fetchMembers().then(() => memberDirectory.classList.add("list"));
    });

    // Initial fetch and display in grid view
    fetchMembers();
});
