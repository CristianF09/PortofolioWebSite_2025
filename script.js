const menuIcon = document.querySelector("#menu-icon");
const navLinks = document.querySelector('.nav-links');

  if (menuIcon && navLinks) {
    menuIcon.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
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
  const form = document.getElementById("form");
  const result = document.getElementById("result");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    result.innerHTML = "Please wait...";

    const formData = new FormData(form);
    const object = Object.fromEntries(formData.entries());
    const json = JSON.stringify(object);

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: json,
    })
      .then(response => response.json())
      .then(data => {
        if (response.ok) {
          result.innerHTML = "Form submitted successfully!";
          result.style.color = "#00ff00";
        } else {
          result.innerHTML = data.message || "An error occurred.";
          result.style.color = "#ff0000";
        }
      })
      .catch(error => {
        console.error("Error:", error);
        result.innerHTML = "Something went wrong! Please try again later.";
        result.style.color = "#ff0000";
      })
      .finally(() => {
        setTimeout(() => {
          form.reset();
          result.style.display = "none";
        }, 3000);
      });
  });