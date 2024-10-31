// Function to handle form submission and save order to localStorage
function handleFormSubmit(event) {
    event.preventDefault();  // Prevent page from refreshing on form submission

    // Select and retrieve form values
    const name = document.getElementById('name').value;
    const mealType = document.getElementById('mealType').value;
    const deliveryDate = document.getElementById('deliveryDate').value;

    // Conditional logic for form validation
    if (!name || !mealType || !deliveryDate) {
        alert("Please fill in all fields before submitting.");
        return;
    }

    // Create an order object and store in localStorage
    const order = {
        name,
        mealType,
        deliveryDate
    };
    localStorage.setItem("latestOrder", JSON.stringify(order));

    // Confirmation message
    alert(`Thank you, ${name}! Your order for a ${mealType} meal has been placed.`);
    document.getElementById('mealOrderForm').reset();  // Clear form after submission
}

// Function to display saved order data on page load (if exists in localStorage)
function displayPreviousOrder() {
    const savedOrder = JSON.parse(localStorage.getItem("latestOrder"));
    if (savedOrder) {
        const orderMessage = `Your last order was a ${savedOrder.mealType} meal for ${savedOrder.name}, scheduled for delivery on ${savedOrder.deliveryDate}.`;
        document.getElementById('order-summary').textContent = orderMessage;
    }
}

// Menu data array with objects and display function
const menuItems = [
    { name: "Local Dish", description: "Traditional dishes with a healthy twist.", price: "$10" },
    { name: "Continental Dish", description: "Balanced, delicious international meals.", price: "$15" },
    { name: "Low-Carb Option", description: "Low-carb meals to suit your diet.", price: "$12" },
    { name: "Protein-Rich", description: "High-protein meals for active lifestyles.", price: "$13" }
];

// Function to render menu items dynamically
function displayMenu() {
    const menuContainer = document.getElementById("menu-container");
    menuItems.forEach(item => {
        const menuItemElement = document.createElement("div");
        menuItemElement.className = "menu-item";
        menuItemElement.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p>Price: ${item.price}</p>
        `;
        menuContainer.appendChild(menuItemElement);
    });
}

// Event listener for form submission
document.getElementById('mealOrderForm').addEventListener('submit', handleFormSubmit);

// Call displayPreviousOrder on page load to show past orders
window.addEventListener("load", displayPreviousOrder);

// Call displayMenu to show menu items on the menu page
if (document.getElementById("menu-container")) {
    displayMenu();
}

// Social media link hover effects
document.querySelectorAll(".social-media a").forEach(link => {
    link.addEventListener("mouseover", () => {
        link.style.color = "#45a049";  // Change color on hover
    });
    link.addEventListener("mouseout", () => {
        link.style.color = "#fff";     // Reset color
    });
});
