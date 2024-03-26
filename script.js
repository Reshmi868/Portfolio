
// Function to load content based on hash
function loadContent() {
    const hash = window.location.hash;
    const contentDiv = document.getElementById('content');
    
    let url;
    switch (hash) {
        case '#about':
            url = 'about.html';
            break;
        case '#experience':
            url = 'experience.html';
            break;
        case '#education':
            url = 'education.html';
            break;
        default:
            url = 'about.html'; // Default to about page
    }

    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        contentDiv.innerHTML = data;
    })
    .catch(error => {
        console.error('Error fetching content:', error);
        contentDiv.innerHTML = '<p>Error fetching content. Please try again later.</p>';
    });
}

// Load initial content
loadContent();

// Load content when hash changes
window.addEventListener('hashchange', loadContent);

// Close mobile menu when a menu item is clicked
document.querySelectorAll('nav ul li a').forEach(item => {
    item.addEventListener('click', () => {
        const mobileMenu = document.getElementById('mobile-menu');
        mobileMenu.checked = false; // Uncheck the mobile menu checkbox
    });
});


// Toggle mobile navigation
const toggleNavButton = document.getElementById('toggleNav');
const nav = document.querySelector('nav');

toggleNavButton.addEventListener('click', () => {
    nav.classList.toggle('active');
});
