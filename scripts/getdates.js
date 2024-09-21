// JavaScript to dynamically insert the current year and last modified date

// Function to insert current year into the span with id "currentYear"
function displayCurrentYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
  }
  
  // Function to insert the last modified date into the paragraph with id "lastModified"
  function displayLastModifiedDate() {
    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = `Last modified: ${lastModified}`;
  }
  
  // Call the functions to execute when the page loads
  displayCurrentYear();
  displayLastModifiedDate();
  