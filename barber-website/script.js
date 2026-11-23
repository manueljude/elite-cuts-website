// ==============================
// ELITE CUTS - JAVASCRIPT
// ==============================


// Wait until the page has loaded
document.addEventListener("DOMContentLoaded", () => {

    // Add a small animation when the page loads
    const heroContent = document.querySelector(".hero-content");

    heroContent.style.opacity = "0";
    heroContent.style.transform = "translateY(30px)";

    setTimeout(() => {
        heroContent.style.transition = "all 1s ease";
        heroContent.style.opacity = "1";
        heroContent.style.transform = "translateY(0)";
    }, 200);


    // ==============================
    // SCROLL REVEAL
    // ==============================

    const revealElements = document.querySelectorAll(
        ".service-card, .about-content, .about-image, .gallery-item, .contact-box"
    );

    const revealOnScroll = () => {

        revealElements.forEach(element => {

            const elementTop =
                element.getBoundingClientRect().top;

            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 100) {

                element.classList.add("show");

            }

        });

    };


    window.addEventListener("scroll", revealOnScroll);

    revealOnScroll();


    // ==============================
    // NAVBAR BACKGROUND
    // ==============================

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            navbar.style.background = "rgba(5, 5, 5, 0.98)";

        } else {

            navbar.style.background = "rgba(10, 10, 10, 0.9)";

        }

    });


    // ==============================
    // CURRENT YEAR
    // ==============================

    const footerText = document.querySelector("footer p");

    if (footerText) {

        footerText.innerHTML =
            `© ${new Date().getFullYear()} Elite Cuts. All rights reserved.`;

    }

});
// ==============================
// MOBILE MENU
// ==============================

const menuBtn = document.querySelector("#menuBtn");
const navMenu = document.querySelector("#navMenu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }

});


// Close menu after clicking a link

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        menuBtn.textContent = "☰";

    });

});