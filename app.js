const navbtn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");
const navclose = document.getElementById("nav-close");

navbtn.addEventListener("click", () => {
  navbar.classList.add("shownav");
});
navclose.addEventListener("click", () => {
  navbar.classList.remove("shownav");
});
