
// Dark Mode Toggle
const toggle = document.getElementById("toggleTheme");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Contact Form Submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("message").textContent = "Thanks for reaching out! I'll get back to you soon.";
  this.reset();
});


