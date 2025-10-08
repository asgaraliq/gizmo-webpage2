// Mobile Menu Toggle
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    document.getElementById('nav-menu').classList.toggle('show');
    this.textContent = document.getElementById('nav-menu').classList.contains('show') ? '✕' : '☰';
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    const navMenu = document.getElementById('nav-menu');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    if (!navMenu.contains(e.target) && !menuBtn.contains(e.target)) {
        navMenu.classList.remove('show');
        menuBtn.textContent = '☰';
    }
});

// Form Validation and Submission
document.getElementById('inquiryForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const message = document.getElementById('message').value;
    
    // Validate phone number
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
        alert('Please enter a valid 10-digit phone number');
        return;
    }
    
    // Create mailto link
    const subject = `New Inquiry from ${name}`;
    const body = `Name: ${name}%0D%0APhone: ${phone}%0D%0AEmail: ${email}%0D%0ALocation: ${city}, ${state}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    
    window.location.href = `mailto:contact@gizmotechitsolutions.com?subject=${subject}&body=${body}`;
    
    // Show success message
    alert('Thank you for your inquiry! A mail window should open for you to send your message.');
    
    // Reset form
    this.reset();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        const navMenu = document.getElementById('nav-menu');
        const menuBtn = document.querySelector('.mobile-menu-btn');
        if (navMenu.classList.contains('show')) {
            navMenu.classList.remove('show');
            menuBtn.textContent = '☰';
        }
    });
});

// Add animation to elements when they come into view
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.service-card, .feature-card, .about-image, .contact-form');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial state for animation
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.service-card, .feature-card, .about-image, .contact-form').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
});

// Add scroll event listener

window.addEventListener('scroll', animateOnScroll);

