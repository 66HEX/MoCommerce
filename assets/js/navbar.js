document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.getElementById('navbar');
    var logo = document.querySelector('.logo');

    // Dodaj klasę transparent-navbar na początku
    navbar.classList.add('transparent-navbar');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            navbar.classList.add('scrolled');
            logo.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
            logo.classList.remove('scrolled');
        }
    });
});