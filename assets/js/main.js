// Hamburger menu
let navbar = document.querySelector('.navbar-toggle');
function menuToggle() {
    const meniu = document.querySelectorAll('.main-nav');
    meniu.forEach(nav => nav.classList.toggle('navbar-show'));
}
navbar.addEventListener('click', menuToggle);
