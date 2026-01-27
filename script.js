// Smooth scroll behavior
document.addEventListener('DOMContentLoaded', () => {
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add intersection observer for fade-in animations on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('.book-item, .project-item, .music-item').forEach(el => {
        observer.observe(el);
    });

    // Add active state to navigation based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Optional: Add play functionality to music artwork
    document.querySelectorAll('.music-artwork').forEach(artwork => {
        artwork.addEventListener('click', () => {
            const playButton = artwork.querySelector('.play-button');
            if (playButton.textContent === '▶') {
                playButton.textContent = '⏸';
            } else {
                playButton.textContent = '▶';
            }
        });
    });
});

// Add parallax effect to decorative element
window.addEventListener('scroll', () => {
    const decorative = document.querySelector('.decorative-element');
    if (decorative) {
        const scrolled = window.pageYOffset;
        decorative.style.transform = `translate(${scrolled * 0.1}px, ${scrolled * 0.1}px)`;
    }
});
