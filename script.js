// toggle class active
const navbarnav = document.querySelector(".navbar-nav");
// ketika menu diklik
document.querySelector("#Menu").onclick = () => {
  navbarnav.classList.toggle("active");
};

// klik dimanapun = hilang nav
const Menu = document.querySelector("#Menu");

document.addEventListener("click", function (e) {
if (!Menu.contains(e.target) && !navbarnav.contains(e.target)) {
    navbarnav.classList.remove("active");
  }
});