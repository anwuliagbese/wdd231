document.addEventListener("DOMContentLoaded", () => {
    // Toggle Navigation Menu
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Footer Dates
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

    // Course Array
    const courses = [
        { code: "WDD 230", credits: 3, completed: true },
        { code: "WDD 330", credits: 3, completed: false },
        { code: "CSE 210", credits: 3, completed: true },
        { code: "CSE 110", credits: 2, completed: false },
    ];

    const coursesContainer = document.querySelector(".courses");
    const totalCreditsEl = document.getElementById("totalCredits");

    // Render Courses
    const renderCourses = (filter) => {
        coursesContainer.innerHTML = "";
        let totalCredits = 0;

        courses
            .filter(course => filter === "all" || course.code.includes(filter))
            .forEach(course => {
                const courseEl = document.createElement("div");
                courseEl.textContent = `${course.code} - ${course.credits} Credits`;
                courseEl.classList.add(course.completed ? "completed" : "not-completed");
                coursesContainer.appendChild(courseEl);
                totalCredits += course.credits;
            });

        totalCreditsEl.textContent = totalCredits;
    };

    // Filter Buttons
    document.querySelectorAll(".filter-buttons button").forEach(button => {
        button.addEventListener("click", () => {
            renderCourses(button.dataset.filter);
        });
    });

    renderCourses("all");
});
