// Function to update the review count on the page
function updateReviewCount() {
    let reviewCount = localStorage.getItem('reviewCount');
    // If no reviews have been submitted, set to 0
    reviewCount = reviewCount ? parseInt(reviewCount) : 0;
    document.getElementById('review-count').textContent = reviewCount;
}

// Add event listener for form submission
document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload

    // Increment review count in localStorage
    let reviewCount = localStorage.getItem('reviewCount');
    reviewCount = reviewCount ? parseInt(reviewCount) + 1 : 1;
    localStorage.setItem('reviewCount', reviewCount);

    // Update the review count on the page
    updateReviewCount();

    // Clear the textarea after submission
    document.getElementById('reviewText').value = '';

    alert('Thank you for your review!');
});

// Call updateReviewCount on page load to reflect the stored count
updateReviewCount();
