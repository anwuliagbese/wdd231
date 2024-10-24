// script.js

// 1. Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 2. Store Contact Form Data in Local Storage (contact.html)
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const message = document.querySelector('#message').value;

        localStorage.setItem('contactData', JSON.stringify({ name, email, message }));
        alert('Your message has been saved! We will get back to you soon.');
        contactForm.reset();
    });
}

// 3. Toggle FAQ in Terms and Privacy Pages (terms.html, privacy.html)
document.querySelectorAll('.faq-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
        const content = btn.nextElementSibling;
        content.classList.toggle('hidden');
    });
});

// 4. Load Reviews Dynamically (review.html)
const reviews = [
    { name: 'Jane Doe', review: 'Amazing service and delicious meals!' },
    { name: 'John Smith', review: 'The fitness tips are life-changing!' }
];

const reviewContainer = document.querySelector('#reviews');
if (reviewContainer) {
    reviews.forEach(({ name, review }) => {
        const reviewCard = document.createElement('div');
        reviewCard.className = 'review-card';
        reviewCard.innerHTML = `<h3>${name}</h3><p>${review}</p>`;
        reviewContainer.appendChild(reviewCard);
    });
}

// 5. Order Form Validation (order.html)
const orderForm = document.querySelector('#order-form');
if (orderForm) {
    orderForm.addEventListener('submit', (e) => {
        const mealPlan = document.querySelector('#meal-plan').value;
        const deliveryDate = document.querySelector('#delivery-date').value;

        if (!mealPlan || !deliveryDate) {
            e.preventDefault();
            alert('Please select a meal plan and delivery date.');
        } else {
            alert('Your order has been placed successfully!');
        }
    });
}

// 6. Show/Hide Menu Items (menu.html)
const toggleMenuBtn = document.querySelector('#toggle-menu');
const menuItems = document.querySelector('#menu-items');

if (toggleMenuBtn) {
    toggleMenuBtn.addEventListener('click', () => {
        menuItems.classList.toggle('hidden');
    });
}

// 7. Blog Search Functionality (blog.html)
const searchInput = document.querySelector('#blog-search');
const blogSnippets = document.querySelectorAll('.blog-snippet');

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        blogSnippets.forEach(snippet => {
            const title = snippet.querySelector('h3').textContent.toLowerCase();
            snippet.style.display = title.includes(searchTerm) ? '' : 'none';
        });
    });
}

// 8. Scroll to Top Button (index.html and other pages)
const scrollToTopBtn = document.querySelector('#scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
// Update footer
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

        // JavaScript for FAQ toggle functionality
        const faqItems = document.querySelectorAll('.faq-item');

        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');

            question.addEventListener('click', () => {
                const answer = item.querySelector('.faq-answer');
                const icon = question.querySelector('.faq-icon');

                // Toggle visibility of the answer
                answer.style.display = answer.style.display === 'block' ? 'none' : 'block';

                // Change the icon between '+' and '-'
                icon.textContent = icon.textContent === '+' ? '-' : '+';
            });
        });
