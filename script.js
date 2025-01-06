// Script for Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Script for Responsive Navbar Toggle
const navbar = document.querySelector('.navbar');
const toggleButton = document.createElement('button');
toggleButton.classList.add('navbar-toggle');
toggleButton.innerHTML = '<i class="fas fa-bars"></i>';
document.querySelector('.header .container').appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Form Validation Script
document.querySelector('form').addEventListener('submit', function (e) {
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const message = document.querySelector('#message').value.trim();
    let valid = true;

    if (!name) {
        alert('Please enter your name.');
        valid = false;
    } else if (!email || !/\S+@\S+\.\S+/.test(email)) {
        alert('Please enter a valid email address.');
        valid = false;
    } else if (!message) {
        alert('Please enter your message.');
        valid = false;
    }

    if (!valid) {
        e.preventDefault();
    }
});

// Back to Top Button
const backToTopButton = document.createElement('button');
backToTopButton.classList.add('back-to-top');
backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
// Animate Circular Skill Progress
document.querySelectorAll('.progress').forEach(progress => {
    const percentage = progress.getAttribute('data-percentage');
    const circle = progress;

    // Animate the circle progress
    setTimeout(() => {
        const degree = (percentage / 100) * 360;
        circle.style.background = `conic-gradient(#fff ${degree}deg, rgba(255, 255, 255, 0.2) ${degree}deg)`;
    }, 500);

    // Animate the percentage counter
    let currentPercentage = 0;
    const increment = Math.ceil(percentage / 100);
    const counter = progress.querySelector('.percentage');
    const interval = setInterval(() => {
        if (currentPercentage < percentage) {
            currentPercentage += increment;
            counter.textContent = `${currentPercentage}%`;
        } else {
            clearInterval(interval);
        }
    }, 20);
});
