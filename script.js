const toggleBtn = document.querySelector(".toggle-button");
const navbarLinks = document.querySelector(".navbar-links");
const links = document.querySelectorAll(".navLink");
//for navbar
toggleBtn.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
});

links.forEach(element => {
    element.addEventListener("click", () => {

        if (navbarLinks.classList.contains("active")) {
            navbarLinks.classList.toggle("active");
        }
    })
});