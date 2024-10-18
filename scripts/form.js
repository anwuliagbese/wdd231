// Product array of objects
const products = [
        {
          id: "fc-1888",
          name: "flux capacitor",
          averagerating: 4.5
        },
        {
          id: "fc-2050",
          name: "power laces",
          averagerating: 4.7
        },
        {
          id: "fs-1987",
          name: "time circuits",
          averagerating: 3.5
        },
        {
          id: "ac-2000",
          name: "low voltage reactor",
          averagerating: 3.9
        },
        {
          id: "jj-1969",
          name: "warp equalizer",
          averagerating: 5.0
        }
      ];
    

// Function to populate product name options
function populateProductOptions() {
    const selectElement = document.getElementById('productName');

    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        selectElement.appendChild(option);
    });
}

// Call the function to populate the select options
populateProductOptions();

// Add event listener to form for submission
document.getElementById('reviewForm').addEventListener('submit', function() {
    let reviewCount = localStorage.getItem('reviewCount');
    reviewCount = reviewCount ? parseInt(reviewCount) + 1 : 1;
    localStorage.setItem('reviewCount', reviewCount);
});
// Update footer
document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('last-Modified').textContent = document.lastModified;
