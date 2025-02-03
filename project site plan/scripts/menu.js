// Sample JSON data representing the menu items
const menuData = [
    {
      id: 1,
      category: "Appetizers",
      name: "Stuffed Mushrooms",
      description: "Savory mushrooms stuffed with a creamy blend of cheese and herbs.",
      ingredients: "Mushrooms, cream cheese, garlic, parsley",
      price: "$12.99",
      featured: true
    },
    {
      id: 2,
      category: "Appetizers",
      name: "Bruschetta",
      description: "Toasted baguette topped with fresh tomatoes, basil, and balsamic glaze.",
      ingredients: "Baguette, tomatoes, basil, balsamic vinegar",
      price: "$8.99",
      featured: false
    },
    {
      id: 3,
      category: "Main Courses",
      name: "Chicken Alfredo",
      description: "Grilled chicken served with creamy Alfredo sauce over fettuccine pasta.",
      ingredients: "Chicken, fettuccine, cream, garlic, parmesan",
      price: "$18.99",
      featured: true
    },
    {
      id: 4,
      category: "Main Courses",
      name: "Grilled Salmon",
      description: "Fresh salmon fillet grilled to perfection with lemon butter sauce.",
      ingredients: "Salmon, lemon, butter, garlic",
      price: "$22.99",
      featured: false
    },
    {
      id: 5,
      category: "Desserts",
      name: "Chocolate Mousse",
      description: "Rich and creamy chocolate mousse topped with whipped cream.",
      ingredients: "Chocolate, cream, sugar, eggs",
      price: "$7.99",
      featured: true
    }
  ];
  
  // Function to render the menu items dynamically
  function renderMenu() {
    const menuContainer = document.getElementById("menu-items-container");
    
    // Clear any existing content
    menuContainer.innerHTML = "";
  
    // Iterate over each menu item and generate HTML
    menuData.forEach(item => {
      const menuItemDiv = document.createElement("div");
      menuItemDiv.classList.add("menu-item");
  
      // Add the featured label if the item is featured
      if (item.featured) {
        menuItemDiv.classList.add("featured");
        const featuredLabel = document.createElement("span");
        featuredLabel.classList.add("featured-label");
        featuredLabel.textContent = "Featured";
        menuItemDiv.appendChild(featuredLabel);
      }
  
      // Add item details (name, description, ingredients, price)
      const itemName = document.createElement("h3");
      itemName.textContent = item.name;
      menuItemDiv.appendChild(itemName);
  
      const itemDescription = document.createElement("p");
      itemDescription.textContent = item.description;
      menuItemDiv.appendChild(itemDescription);
  
      const itemIngredients = document.createElement("p");
      itemIngredients.classList.add("ingredients");
      itemIngredients.textContent = `Ingredients: ${item.ingredients}`;
      menuItemDiv.appendChild(itemIngredients);
  
      const itemPrice = document.createElement("p");
      itemPrice.classList.add("price");
      itemPrice.textContent = `Price: ${item.price}`;
      menuItemDiv.appendChild(itemPrice);
  
      // Append the item to the menu container
      menuContainer.appendChild(menuItemDiv);
    });
  }
  
  // Run the renderMenu function when the page loads
  document.addEventListener("DOMContentLoaded", renderMenu);
  