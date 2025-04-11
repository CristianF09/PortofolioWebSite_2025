const menuIcon = document.querySelector("#menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuIcon.classList.toggle("bx-x");
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (!navLinks.contains(e.target) && !menuIcon.contains(e.target)) {
    navLinks.classList.remove("active");
    menuIcon.classList.remove("bx-x");
  }
});

// Theme Toggle
const themeToggle = document.querySelector(".theme-toggle");
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);
}

// Toggle theme on button click
themeToggle.addEventListener("click", () => {
  const currentTheme = body.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  
  body.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateThemeIcon(newTheme);
});

// Update theme icon based on current theme
function updateThemeIcon(theme) {
  const icon = themeToggle.querySelector("i");
  if (theme === "dark") {
    icon.className = "fas fa-sun";
  } else {
    icon.className = "fas fa-moon";
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

// Experience Section Modals
const moreButtons = document.querySelectorAll(".more-btn");
const modals = document.querySelectorAll(".experience-modal");
const closeButtons = document.querySelectorAll(".close-modal");

// Open modal when "More" button is clicked
moreButtons.forEach(button => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");
    const modal = document.getElementById(targetId);
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  });
});

// Close modal when close button is clicked
closeButtons.forEach(button => {
  button.addEventListener("click", () => {
    const modal = button.closest(".experience-modal");
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Re-enable scrolling
  });
});

// Close modal when clicking outside the modal content
window.addEventListener("click", (e) => {
  modals.forEach(modal => {
    if (e.target === modal) {
      modal.style.display = "none";
      document.body.style.overflow = "auto"; // Re-enable scrolling
    }
  });
});

// Close modal with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modals.forEach(modal => {
      if (modal.style.display === "block") {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Re-enable scrolling
      }
    });
  }
});