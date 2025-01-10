// Highlight the active navigation button and add underline
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Remove active class from all links
        navLinks.forEach(link => link.classList.remove('active'));
        // Add active class to clicked link
        link.classList.add('active');
    });
});
