const toggleBtn = document.querySelector(".toggle-button");
const navbarLinks = document.querySelector(".navbar-links");
const links = document.querySelectorAll(".navLink");
const btn_view = document.querySelector(".about-content-container a");

//set about nav link color to active at start
links[0].classList.add("primary-color");

//navbar toggle
toggleBtn.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

links.forEach((element) => {
  element.addEventListener("click", () => {
    if (navbarLinks.classList.contains("active")) {
      navbarLinks.classList.toggle("active");
    }
    links.forEach((link) => {
      link.classList.remove("primary-color");
    });
    element.classList.add("primary-color");
  });
});

//view projects button - set projects nav link to active
btn_view.addEventListener("click", () => {
  links.forEach((link) => {
    link.classList.remove("primary-color");
  });
  links[1].classList.add("primary-color");
});
