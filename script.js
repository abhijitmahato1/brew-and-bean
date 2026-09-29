// ======================================
// BREW & BEAN
// JavaScript
// ======================================


// ======================================
// MOBILE MENU
// ======================================

const menuToggle =
    document.getElementById("menuToggle");

const navMenu =
    document.querySelector(".nav-menu");


menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("mobile-active");

});



// ======================================
// MENU CATEGORY FILTER
// ======================================

const categoryButtons =
    document.querySelectorAll(".category-btn");

const menuSections =
    document.querySelectorAll(".menu-items");


categoryButtons.forEach(button => {

    button.addEventListener("click", () => {


        // Remove active class
        // from all buttons

        categoryButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        // Add active class
        // to clicked button

        button.classList.add("active");


        // Get selected category

        const selectedCategory =
            button.dataset.category;


        // Hide all menu sections

        menuSections.forEach(section => {

            section.classList.add("hidden");

        });


        // Show selected menu

        const selectedMenu =
            document.querySelector(
                `[data-menu="${selectedCategory}"]`
            );


        selectedMenu.classList.remove("hidden");

    });

});
// ================= RESERVATION FORM =================

const reservationForm = document.getElementById("reservationForm");
const formMessage = document.getElementById("formMessage");

reservationForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const date = document.getElementById("date").value;
    const guests = document.getElementById("guests").value;

    if (!name || !email || !date || !guests) {

        formMessage.textContent =
            "Please fill in all required fields.";

        return;
    }

    formMessage.textContent =
        `Thank you, ${name}! Your table request has been received. ☕`;

    reservationForm.reset();

});
// ================= NAVBAR SCROLL EFFECT =================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});
// ================= SCROLL REVEAL =================

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach((element) => {
    revealObserver.observe(element);
});