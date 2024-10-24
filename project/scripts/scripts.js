// Handle Review Form Submission
const reviewForm = document.getElementById('reviewForm');
const reviewList = document.getElementById('review-list');

reviewForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const reviewText = document.getElementById('reviewInput').value;
    saveReview(reviewText);
    displayReviews();
    reviewForm.reset();
});

function saveReview(review) {
    let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    reviews.push(review);
    localStorage.setItem('reviews', JSON.stringify(reviews));
}

function displayReviews() {
    let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    reviewList.innerHTML = reviews.map((r) => `<p>${r}</p>`).join('');
}

// Display reviews on page load
displayReviews();

// FAQ Accordion
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach((question) => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});
