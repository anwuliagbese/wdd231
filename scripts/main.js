// JavaScript to dynamically display courses and update total credits
const courses = [
    { name: "CSE 110", credits: 3, subject: "CSE", completed: true },
    { name: "WDD 130", credits: 3, subject: "WDD", completed: false },
    { name: "CSE 111", credits: 4, subject: "CSE", completed: true },
    { name: "CSE 210", credits: 3, subject: "CSE", completed: false },
    { name: "WDD 131", credits: 4, subject: "WDD", completed: true },
    { name: "WDD 231", credits: 3, subject: "WDD", completed: false },
  ];
  
  const courseList = document.getElementById("courses");
  const totalCredits = document.getElementById("total-credits");
  const year = document.getElementById("year");
  const lastModified = document.getElementById("last-modified");
  
  function displayCourses(filter = "All") {
    courseList.innerHTML = "";
    const filteredCourses = filter === "All" ? courses : courses.filter(c => c.subject === filter);
    let credits = 0;
  
    filteredCourses.forEach(course => {
      const courseDiv = document.createElement("div");
      courseDiv.textContent = course.name;
      courseDiv.style.background = course.completed ? "#dcedc8" : "#fff9c4";
      courseDiv.style.margin = "5px";
      courseDiv.style.padding = "10px";
      courseDiv.style.border = "1px solid #ccc";
      credits += course.credits;
      courseList.appendChild(courseDiv);
    });
  
    totalCredits.textContent = credits;
  }
  
  document.getElementById("all").addEventListener("click", () => displayCourses("All"));
  document.getElementById("cse").addEventListener("click", () => displayCourses("CSE"));
  document.getElementById("wdd").addEventListener("click", () => displayCourses("WDD"));
  
  // Footer Date
  year.textContent = new Date().getFullYear();
  lastModified.textContent = document.lastModified;
  
  // Initial Load
  displayCourses();
  