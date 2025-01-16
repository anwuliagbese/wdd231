// Dynamically set copyright year and last modified date
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Fetch member data and display it
const fetchMembers = async () => {
  const response = await fetch("data/members.json");
  const members = await response.json();
  const directory = document.getElementById("memberDirectory");

  members.forEach((member) => {
    const memberCard = document.createElement("div");
    memberCard.classList.add("member-card");
    memberCard.innerHTML = `
      <img src="images/${member.image}" alt="${member.name}">
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
    `;

    directory.appendChild(memberCard);
  });
};

fetchMembers();

// Toggle between grid and list view
document.getElementById("gridView").addEventListener("click", () => {
  document.getElementById("memberDirectory").classList.remove("list-view");
});

document.getElementById("listView").addEventListener("click", () => {
  document.getElementById("memberDirectory").classList.add("list-view");
});
