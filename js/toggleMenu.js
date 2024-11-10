// Función para alternar el menú desplegable
function toggleMenu() {
    const navMenu = document.getElementById("navMenu");
    navMenu.classList.toggle("show");
}

// Función para cerrar el menú al hacer clic afuera
document.addEventListener("click", function (event) {
    const navMenu = document.getElementById("navMenu");
    const menuButton = document.querySelector(".header__menu-button");

    if (!navMenu.contains(event.target) && !menuButton.contains(event.target)) {
        navMenu.classList.remove("show");
    }
});

// Función para marcar el enlace activo según la URL actual
function setActiveLink() {
    const navLinks = document.querySelectorAll(".nav__link");
    const currentURL = window.location.pathname;

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentURL || (currentURL === '/' && link.classList.contains('nav__link--inicio'))) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

setActiveLink();