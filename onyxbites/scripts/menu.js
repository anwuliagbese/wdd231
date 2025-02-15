document.addEventListener("DOMContentLoaded", () => {
    const menuContainer = document.getElementById("menu");

    fetch("data/menu.json")
        .then(response => response.json())
        .then(data => {
            data.categories.forEach(category => {
                const section = document.createElement("section");
                section.innerHTML = `<h2>${category.name}</h2>`;
                
                const itemList = document.createElement("div");
                itemList.classList.add("menu-items");

                category.items.forEach(item => {
                    const itemCard = document.createElement("div");
                    itemCard.classList.add("menu-item");

                    itemCard.innerHTML = `
                        <img src="${item.image}" alt="${item.name}" loading="lazy">
                        <h3>${item.name}</h3>
                        <p>${item.description}</p>
                        <p class="price">$${item.price.toFixed(2)}</p>
                        ${item.featured ? '<span class="featured">Featured</span>' : ''}
                    `;

                    itemList.appendChild(itemCard);
                });

                section.appendChild(itemList);
                menuContainer.appendChild(section);
            });
        })
        .catch(error => console.error("Error loading menu:", error));
});
document.addEventListener("DOMContentLoaded", () => {
    const orderModal = document.getElementById("order-modal");
    const closeOrderBtn = document.getElementById("close-order");
    const closeOrderModal = orderModal.querySelector(".close");

    // Handle Order Now buttons dynamically
    document.body.addEventListener("click", (event) => {
        if (event.target.classList.contains("order-btn")) {
            orderModal.style.display = "block";
        }
    });

    closeOrderBtn.addEventListener("click", () => {
        orderModal.style.display = "none";
    });

    closeOrderModal.addEventListener("click", () => {
        orderModal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === orderModal) {
            orderModal.style.display = "none";
        }
    });
});
fetch("data/menu.json")
    .then(response => response.json())
    .then(data => {
        const menuContainer = document.querySelector(".menu-items");

        data.categories.forEach(category => {
            category.items.forEach(item => {
                const menuItem = document.createElement("div");
                menuItem.classList.add("menu-item");
                menuItem.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" loading="lazy">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <p class="price">$${item.price.toFixed(2)}</p>
                    <button class="order-btn">Order Now</button>
                `;
                menuContainer.appendChild(menuItem);
            });
        });
    })
    .catch(error => console.error("Error loading menu:", error));
