// This file contains JavaScript functionality for interactive components in the portfolio. 
// You can add event listeners, animations, or any other interactive features here.

document.addEventListener('DOMContentLoaded', function() {
    // Example: Smooth scrolling for navigation links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Scroll animation for slide-in elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all slide-in elements
    const slideInElements = document.querySelectorAll('.slide-in');
    slideInElements.forEach(el => observer.observe(el));
});
