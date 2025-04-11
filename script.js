const menuIcon = document.querySelector("#menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuIcon.classList.toggle("fa-xmark");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuIcon.classList.remove("fa-xmark");
  });
});

// Theme Toggle Functionality
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = themeToggle.querySelector("i");

// Check for saved theme preference or use the default
const savedTheme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-theme", savedTheme);
updateThemeIcon(savedTheme);

// Toggle theme when button is clicked
themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateThemeIcon(newTheme);
});

// Update the theme icon based on the current theme
function updateThemeIcon(theme) {
  if (theme === "light") {
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  } else {
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
  }
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// Contact Form Submission
const form = document.querySelector(".contact-form");
const result = document.getElementById("result");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  // Simulate form submission
  result.textContent = "Message sent successfully!";
  result.style.color = "#009dff";
  
  // Reset form
  form.reset();
  
  // Clear success message after 3 seconds
  setTimeout(() => {
    result.textContent = "";
  }, 3000);
});