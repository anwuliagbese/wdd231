// Insert the current year in the first paragraph
const currentYear = new Date().getFullYear(); // Get the current year
document.getElementById('currentyear').textContent = currentYear; // Set the text content of the span with id 'currentyear'

// Display the last modified date in the second paragraph
const lastModifiedDate = document.lastModified; // Get the document's last modified date
document.getElementById('lastModified').textContent = `Lastmodified: ${lastModifiedDate}`; // Set the text content of the paragraph with id 'lastModified'
