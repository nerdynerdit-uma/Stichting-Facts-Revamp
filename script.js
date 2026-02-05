// Hero video: click thumbnail to load and play Vimeo
const heroVideoPoster = document.getElementById('heroVideoPoster');
const heroVideoEmbed = document.getElementById('heroVideoEmbed');
const heroVimeoIframe = document.getElementById('heroVimeoIframe');

if (heroVideoPoster && heroVideoEmbed && heroVimeoIframe) {
    function playHeroVideo() {
        const src = heroVimeoIframe.getAttribute('data-src');
        if (src) {
            heroVimeoIframe.setAttribute('src', src);
            heroVimeoIframe.removeAttribute('data-src');
        }
        heroVideoPoster.hidden = true;
        heroVideoEmbed.hidden = false;
    }

    heroVideoPoster.addEventListener('click', playHeroVideo);
    heroVideoPoster.querySelector('.hero-video-play')?.addEventListener('click', (e) => {
        e.stopPropagation();
        playHeroVideo();
    });
}

// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

function closeMobileMenu() {
    if (navMenu) navMenu.classList.remove('active');
    document.querySelector('.nav-overlay')?.classList.remove('active');
    document.body.classList.remove('nav-open');
    if (hamburger) {
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
}

if (hamburger && navMenu) {
    // Create overlay for mobile nav (backdrop)
    const navOverlay = document.createElement('div');
    navOverlay.className = 'nav-overlay';
    navOverlay.setAttribute('aria-hidden', 'true');
    document.body.appendChild(navOverlay);

    navOverlay.addEventListener('click', closeMobileMenu);

    hamburger.addEventListener('click', () => {
        const isActive = navMenu.classList.toggle('active');
        navOverlay.classList.toggle('active', isActive);
        document.body.classList.toggle('nav-open', isActive);

        const spans = hamburger.querySelectorAll('span');
        if (isActive) {
            spans[0].style.transform = 'rotate(45deg) translateY(8px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

// Dropdown menu functionality - click to toggle, no navigation on parent links
document.querySelectorAll('.dropdown').forEach(dropdown => {
    const link = dropdown.querySelector('.nav-link');
    
    link.addEventListener('click', (e) => {
        e.preventDefault();
        // Close other dropdowns when opening one
        document.querySelectorAll('.dropdown').forEach(other => {
            if (other !== dropdown) {
                other.classList.remove('active');
            }
        });
        dropdown.classList.toggle('active');
    });
});

// Close mobile menu when clicking on a link (direct nav links or dropdown sub-links)
document.querySelectorAll('.nav-link:not(.dropdown .nav-link), .dropdown-menu a').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown').forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    }
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Intersection Observer for fade-in animations
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

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.project-card, .news-card, .news-article, .gallery-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});

// Gallery item click handler (can be extended for lightbox functionality)
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        // Add lightbox functionality here if needed
        console.log('Gallery item clicked');
    });
});

// Active navigation link highlighting based on current page
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});

// Set active state for index.html when on root
if (currentPage === '' || currentPage === 'index.html') {
    document.querySelector('a[href="index.html"]')?.classList.add('active');
}

