// Execute functions once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    displayWelcomeMessage();
    loadBlogPosts();
    setupNewsletterForm();
    setupDarkModeToggle();
});

// 1. Function to Display Dynamic Welcome Message Based on Time of Day
function displayWelcomeMessage() {
    const welcomeMessage = document.getElementById('welcome-message');
    const userName = localStorage.getItem('userName') || 'Guest';

    const currentHour = new Date().getHours();
    let greeting;

    if (currentHour < 12) {
        greeting = 'Good Morning';
    } else if (currentHour < 18) {
        greeting = 'Good Afternoon';
    } else {
        greeting = 'Good Evening';
    }

    welcomeMessage.textContent = `${greeting}, ${userName}! Welcome to our site.`;
}

// 2. Blog Posts Data Stored in an Array of Objects
const blogPosts = [
    { title: '5 Tips for Healthy Eating', date: '2024-10-01', content: 'Discover simple ways to eat healthy.' },
    { title: 'How to Stay Active at Work', date: '2024-10-10', content: 'Keep moving throughout your workday.' },
    { title: 'The Benefits of Green Vegetables', date: '2024-10-15', content: 'Why greens should be part of your diet.' }
];

// 3. Function to Load and Display Blog Posts Dynamically
function loadBlogPosts() {
    const blogContainer = document.getElementById('blog-posts');

    if (blogContainer) {
        const postsHTML = blogPosts
            .map(
                post => `
                <div class="card">
                    <h2>${post.title}</h2>
                    <p><small>${post.date}</small></p>
                    <p>${post.content}</p>
                </div>`
            )
            .join('');

        blogContainer.innerHTML = postsHTML;
    }
}
function setupeviewForm() {
    const nameInput = document.getElementById('user-name');
    const subscribeButton = document.getElementById('subscribe-btn');

    if (subscribeButton) {
        // Check if user name is already stored
        const storedName = localStorage.getItem('userName');
        if (storedName) {
            nameInput.value = storedName;
            subscribeButton.disabled = true;
            subscribeButton.textContent = 'Subscribed';
        }

        // Handle Form Submission
        subscribeButton.addEventListener('click', () => {
            const userName = nameInput.value.trim();
            if (userName) {
                localStorage.setItem('userName', userName);
                alert(`Thank you for subscribing, ${userName}!`);
                subscribeButton.disabled = true;
                subscribeButton.textContent = 'Subscribed';
            } else {
                alert('Please enter your name.');
            }
        });
    }
}

// 5. Function to Set Up Dark Mode Toggle Using Conditional Logic
function setupDarkModeToggle() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    if (darkModeToggle) {
        // Check LocalStorage for Dark Mode Preference
        const darkModeEnabled = localStorage.getItem('darkMode') === 'true';
        if (darkModeEnabled) {
            body.classList.add('dark-mode');
            darkModeToggle.textContent = 'Light Mode';
        }

        // Handle Toggle Click Event
        darkModeToggle.addEventListener('click', () => {
            const isDarkMode = body.classList.toggle('dark-mode');
            localStorage.setItem('darkMode', isDarkMode);
            darkModeToggle.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
        });
    }
}

// Update footer
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;


