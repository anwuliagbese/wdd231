const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: 
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
     "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: 
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },

  // Additional 3 temples
  {
    templeName: "Salt Lake Utah",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl:"images/salt_lake_temple_lds.jpeg"
    
  },
  {
    templeName: "Hong Kong China",
    location: "Hong Kong, China",
    dedicated: "1996, May, 26",
    area: 24000,
    imageUrl:"images/hong_kong_china_temple.jpeg"
    
  },
  {
    templeName: "Johannesburg South Africa",
    location: "Johannesburg, South Africa",
    dedicated: "1985, August, 24",
    area: 52000,
    imageUrl:
    "images/johannesburg_south_africa_temple_lds.jpeg"
  }
];
// Function to generate the temple cards
function createTempleCards(filteredTemples) {
  const container = document.getElementById('temple-cards-container');
  container.innerHTML = ''; // Clear any previous cards

  filteredTemples.forEach(temple => {
      const card = document.createElement('div');
      card.className = 'temple-card';

      const name = document.createElement('h2');
      name.textContent = temple.templeName;
      card.appendChild(name);

      const location = document.createElement('p');
      location.textContent = `Location: ${temple.location}`;
      card.appendChild(location);

      const dedicated = document.createElement('p');
      dedicated.textContent = `Dedicated: ${temple.dedicated}`;
      card.appendChild(dedicated);

      const area = document.createElement('p');
      area.textContent = `Area: ${temple.area} sq ft`;
      card.appendChild(area);

      const image = document.createElement('img');
      image.src = temple.imageUrl;
      image.alt = `${temple.templeName} Temple Image`;
      image.loading = "lazy"; // Use native lazy loading
      card.appendChild(image);

      container.appendChild(card);
  });
}

// Display all temples initially
createTempleCards(temples);

// Add event listeners for filters
document.getElementById('home').addEventListener('click', () => createTempleCards(temples));

document.getElementById('old').addEventListener('click', () => {
  const oldTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
  createTempleCards(oldTemples);
});

document.getElementById('new').addEventListener('click', () => {
  const newTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
  createTempleCards(newTemples);
});

document.getElementById('large').addEventListener('click', () => {
  const largeTemples = temples.filter(temple => temple.area > 90000);
  createTempleCards(largeTemples);
});

document.getElementById('small').addEventListener('click', () => {
  const smallTemples = temples.filter(temple => temple.area < 10000);
  createTempleCards(smallTemples);
});
// Dynamic Footer Year and Last Updated Date
document.addEventListener("DOMContentLoaded", function () {
  const yearSpan = document.getElementById("year");
  const lastUpdatedSpan = document.getElementById("lastUpdated");

  yearSpan.textContent = new Date().getFullYear();
  lastUpdatedSpan.textContent = document.lastModified;
});

