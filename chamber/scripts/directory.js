const membersContainer = document.querySelector("#members");
const toggleButton = document.querySelector("#toggleView");
let isGridView = true;

async function fetchMembers() {
    const response = await fetch("data/members.json");
    const members = await response.json();
    displayMembers(members);
}

function displayMembers(members) {
    membersContainer.innerHTML = "";
    members.forEach(member => {
        const memberCard = document.createElement("div");
        memberCard.classList.add("member-card");

        memberCard.innerHTML = `
            <h2>${member.name}</h2>
            <img src="images/${member.image}" alt="${member.name}">
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
        `;

        membersContainer.appendChild(memberCard);
    });

    applyViewStyle();
}

function applyViewStyle() {
    membersContainer.classList.toggle("grid-view", isGridView);
    membersContainer.classList.toggle("list-view", !isGridView);
}

toggleButton.addEventListener("click", () => {
    isGridView = !isGridView;
    applyViewStyle();
});

fetchMembers();
