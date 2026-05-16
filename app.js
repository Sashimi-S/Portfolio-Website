
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Adding a click event listener to the hamburger
hamburger.addEventListener("click", () => {
    // Toggle the "active" class on both elements
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Close menu when a link is clicked
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));