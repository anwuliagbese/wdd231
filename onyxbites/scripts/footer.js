document.addEventListener("DOMContentLoaded", () => {
    // Set current year
    document.getElementById("year").textContent = new Date().getFullYear();

    // Set last modified date
    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = lastModified;
});
