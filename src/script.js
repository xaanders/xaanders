document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');
    const nav = document.querySelector('nav');

    burgerMenu.addEventListener('click', function(event) {
        event.stopPropagation();
        nav.classList.toggle('show');
        burgerMenu.classList.toggle('show');
        navLinks.classList.toggle('show');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('nav')) {
            nav.classList.remove('show');
            burgerMenu.classList.remove('show');
            navLinks.classList.remove('show');
        }
    });

    
    
});

