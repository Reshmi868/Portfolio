// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Toggle mobile navigation
const toggleNavButton = document.getElementById('toggleNav');
const nav = document.querySelector('nav');

toggleNavButton.addEventListener('click', () => {
    nav.classList.toggle('active');
});
