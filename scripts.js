// Scroll Indicator Animation
document.addEventListener('scroll', () => {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const scrollY = window.scrollY;

    if (scrollY > 100) {
        scrollIndicator.style.display = 'none';
    } else {
        scrollIndicator.style.display = 'block';
    }
});

// Smooth Scrolling for Navigation (90% Viewport Height)
const links = document.querySelectorAll('nav ul li a');
links.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - (window.innerHeight * 0.1), // Adjust by 10% viewport height
            behavior: 'smooth',
        });
    });
});

// Smooth Scroll for Anchor Links (90% Viewport Height)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - (window.innerHeight * 0.1), // Adjust by 10% viewport height
            behavior: 'smooth'
        });
    });
});

// Form Validation (Basic)
document.querySelector('form').addEventListener('submit', function(e) {
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;
    
    if (!name || !email || !message) {
        e.preventDefault();
        alert('Please fill in all fields');
    }
});

vl 

document.getElementById('volunteerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for signing up as a volunteer!');
    document.getElementById('volunteerForm').reset();
});

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}
