// Ensure all functions execute only after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    initWelcomeMessage();
    loadBlogPosts();
    toggleDarkMode();
    displaySupportTeam();
});

// 1. Dynamic Welcome Message Based on Time of Day and Stored User Name
function initWelcomeMessage() {
    const welcomeMsg = document.getElementById('welcome-message');
    const userName = localStorage.getItem('userName') || 'Guest';

    const hour = new Date().getHours();
    const greeting = (hour < 12) ? 'Good Morning' : 
                     (hour < 18) ? 'Good Afternoon' : 'Good Evening';

    welcomeMsg.textContent = `${greeting}, ${userName}! Welcome to our site.`;
}

// 2. Array of Blog Posts (Objects) with Dynamic Rendering
const blogPosts = [
    { title: '5 Tips for Healthy Eating', date: '2024-10-01', content: 'Learn easy ways to eat healthy every day.' },
    { title: 'How to Stay Active at Work', date: '2024-10-10', content: 'Simple ways to move more during work hours.' },
    { title: 'The Benefits of Green Vegetables', date: '2024-10-15', content: 'Discover why green veggies are essential.' }
];

function loadBlogPosts() {
    const blogContainer = document.getElementById('blog-posts');
    if (!blogContainer) return;

    const postsHTML = blogPosts.map(post => `
        <div class="card">
            <h2>${post.title}</h2>
            <p><small>${post.date}</small></p>
            <p>${post.content}</p>
        </div>
    `).join('');

    blogContainer.innerHTML = postsHTML;
}



// 4. Dark Mode Toggle with State Persistence via LocalStorage
function toggleDarkMode() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    if (!darkModeToggle) return;

    const isDarkModeEnabled = localStorage.getItem('darkMode') === 'true';
    if (isDarkModeEnabled) {
        body.classList.add('dark-mode');
        darkModeToggle.textContent = 'Light Mode';
    }

    darkModeToggle.addEventListener('click', () => {
        const darkModeActive = body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', darkModeActive);
        darkModeToggle.textContent = darkModeActive ? 'Light Mode' : 'Dark Mode';
    });
}

// 5. Customer Support Team Section Display with Array of Objects
const supportTeam = [
    { name: 'Mr. Theophilus', role: 'Customer Support Manager' },
    { name: 'Mrs.Lois Chioma', role: 'Administrative assistant' },
    { name: 'Adoram Tom', role: 'IT Officer' }
];

function displaySupportTeam() {
    const supportContainer = document.getElementById('support-team');
    if (!supportContainer) return;

    const teamHTML = supportTeam.map(member => `
        <div class="support-card">
            <h3>${member.name}</h3>
            <p>${member.role}</p>
        </div>
    `).join('');

    supportContainer.innerHTML = teamHTML;
}
