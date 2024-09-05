// Selects the mobile menu toggle button by its ID
const mobileMenu = document.getElementById('mobile-menu');

// Selects the navigation menu (unordered list) by its class
const navMenu = document.querySelector('.nav-menu');

// Adds a click event listener to the mobile menu toggle button
mobileMenu.addEventListener('click', () => {
    // Toggles the 'show' class on the navigation menu
    // If the 'show' class is present, it will be removed; if absent, it will be added
    navMenu.classList.toggle('show');
});
