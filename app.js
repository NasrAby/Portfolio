//Footer date
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

//Fixing the navbar while scrolling
const navbar = document.getElementById("nav");
window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
        navbar.classList.add("fixed-nav");
    } else {
        navbar.classList.remove("fixed-nav");
    }
});

//Toggle button
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const closeBtn = document.querySelector('.close-btn');
const sidenavItems = document.querySelector('.sidenav');

function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
  }
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

navToggle.addEventListener("click", openNav);

closeBtn.addEventListener("click", closeNav);
sidenavItems.addEventListener("click", closeNav);