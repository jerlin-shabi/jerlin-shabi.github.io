/*===== MENU SHOW =====*/
// Function to show and hide the navigation menu on mobile
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    // Check if both toggle button and navigation menu exist
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            // Toggle the 'show' class to display/hide the menu
            nav.classList.toggle('show');
        });
    }
}
// Initialize the menu functionality with toggle and nav IDs
showMenu('nav-toggle', 'nav-menu');

/*==================== REMOVE MENU MOBILE ====================*/
// Select all navigation links
const navLink = document.querySelectorAll('.nav__link');

// Function to remove the mobile menu when a link is clicked
function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show');
}
// Attach click event listener to each navigation link
navLink.forEach(n => n.addEventListener('click', linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
// Select all sections with an 'id' attribute
const sections = document.querySelectorAll('section[id]');

// Function to highlight the active link in the navigation based on scroll position
const scrollActive = () => {
    const scrollDown = window.scrollY; // Current vertical scroll position

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight; // Height of the current section
        const sectionTop = current.offsetTop - 58; // Top position of the section, adjusted for header height
        const sectionId = current.getAttribute('id'); // ID of the current section
        // Select the corresponding navigation link
        const sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        // Check if the current scroll position is within the bounds of the section
        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link'); // Add active class
        } else {
            sectionsClass.classList.remove('active-link'); // Remove active class
        }
    });
}
// Attach scroll event listener to the window
window.addEventListener('scroll', scrollActive);
// Call once on DOM content loaded to set initial active link
document.addEventListener('DOMContentLoaded', scrollActive);


/*===== SCROLL REVEAL ANIMATION =====*/
// Initialize ScrollReveal library for scroll-based animations
const sr = ScrollReveal({
    origin: 'top',      // Animation origin
    distance: '60px',   // Distance moved during animation
    duration: 2000,     // Animation duration
    delay: 200,         // Delay before animation starts
    // reset: true        // Uncomment if you want animations to repeat on scroll up/down
});

// Apply reveal animations to specific elements
sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 }); // Staggered reveal for social icons
sr.reveal('.skills__data, .service-item, .contact__input', { interval: 200 }); // Staggered reveal for skills, services, and contact inputs


//===== GSAP TEXT ANIMATION (for "JERLIN SHABI" title) =====
var tl = gsap.timeline(); // Create a GSAP timeline
// Animate each letter: fade in, random Y position, stagger
tl.from(".letter", { duration: 1, opacity: 0, y: "random(-200, 200)", stagger: 0.15 });
// Animate each letter: rotate, stagger, starting earlier in the timeline
tl.to(".letter", { duration: 1, rotation: 360, stagger: 0.15 }, "-=3.5");

// jQuery for rubberBand animation on hover
// Note: Consider replacing jQuery with vanilla JS for modern projects
$(".letter").bind("webkitAnimationEnd mozAnimationEnd animationend", function () {
    $(this).removeClass("rubberBand"); // Remove class after animation
});

$(".letter").hover(function () {
    $(this).addClass("rubberBand"); // Add class on hover
});

// GSAP ScrollTrigger animations for '.sal' and '.sar' elements
// These animations will now run on all screen sizes.
gsap.from(".sal", {
    scrollTrigger: {
        trigger: ".sal",
        start: "top bottom" // When the top of the trigger hits the bottom of the viewport
    },
    opacity: 0,
    x: -200, // Animate from left
    duration: 1,
    ease: "power3",
    stagger: 0.25
});

gsap.from(".sar", {
    scrollTrigger: {
        trigger: ".sar",
        start: "top bottom"
    },
    opacity: 0,
    x: 200, // Animate from right
    duration: 1,
    ease: "power3",
    stagger: 0.25
});