document.addEventListener("DOMContentLoaded", () => {
    const featuredContainer = document.querySelector("#featured-menu .menu-items");

    fetch("data/menu.json")
        .then(response => response.json())
        .then(data => {
            data.categories.forEach(category => {
                category.items.forEach(item => {
                    if (item.featured) {
                        const itemCard = document.createElement("div");
                        itemCard.classList.add("menu-item");
                        itemCard.innerHTML = `
                            <img src="${item.image}" alt="${item.name}" loading="lazy">
                            <h3>${item.name}</h3>
                            <p>${item.description}</p>
                            <p class="price">$${item.price.toFixed(2)}</p>
                        `;
                        featuredContainer.appendChild(itemCard);
                    }
                });
            });
        })
        .catch(error => console.error("Error loading featured items:", error));
});
document.addEventListener("DOMContentLoaded", () => {
    const offerModal = document.getElementById("offer-modal");
    const closeModal = document.querySelector(".close");
    const closeOfferBtn = document.getElementById("close-offer");

    // Show modal only if user hasn't seen it before in this session
    if (!sessionStorage.getItem("offerSeen")) {
        offerModal.style.display = "block";
        sessionStorage.setItem("offerSeen", "true");
    }

    // Close modal when clicking the close button
    closeModal.addEventListener("click", () => {
        offerModal.style.display = "none";
    });

    closeOfferBtn.addEventListener("click", () => {
        offerModal.style.display = "none";
    });

    // Close modal if user clicks outside the content
    window.addEventListener("click", (event) => {
        if (event.target === offerModal) {
            offerModal.style.display = "none";
        }
    });
});
