class PortfolioAnimations {
    constructor() {
        this.init();
    }
    
    init() {
        this.setupFloatingAnimations();
        this.setupHoverEffects();
        this.setupParallaxEffects();
    }
    
    setupFloatingAnimations() {
        // Add floating animation to profile image
        const profileFrame = document.querySelector('.profile-frame');
        if (profileFrame) {
            this.createFloatingAnimation(profileFrame, 6, 3000);
        }
        
        // Add floating animation to nav cards
        const navCards = document.querySelectorAll('.nav-card');
        navCards.forEach((card, index) => {
            this.createFloatingAnimation(card, 4, 2500 + (index * 500));
        });
    }
    
    createFloatingAnimation(element, distance, duration) {
        element.style.animation = `float ${duration}ms ease-in-out infinite`;
        
        // Add keyframes dynamically
        if (!document.getElementById('float-animation')) {
            const style = document.createElement('style');
            style.id = 'float-animation';
            style.textContent = `
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-${distance}px); }
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    setupHoverEffects() {
        // Enhanced hover effects for interactive elements
        const interactiveElements = document.querySelectorAll('.btn, .nav-card, .social-link');
        
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                element.style.transform = 'scale(1.05)';
            });
            
            element.addEventListener('mouseleave', () => {
                element.style.transform = 'scale(1)';
            });
        });
    }
    
    setupParallaxEffects() {
        // Simple parallax for hero section
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.profile-frame');
            
            parallaxElements.forEach(element => {
                const speed = 0.5;
                element.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
    }
    
    // Method to trigger confetti or celebration (for future use)
    triggerCelebration() {
        if (typeof confetti === 'function') {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new PortfolioAnimations();
});