let ham = document.querySelector(".navbar__ham");
let nav = document.querySelector(".navbar nav");
let navbar = document.querySelector(".navbar");


ham.addEventListener("click", ()=> {
    nav.classList.toggle("open");
    ham.classList.toggle("open");
})

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navbar.classList.add("navbar--small");
  } else {
    navbar.classList.remove("navbar--small");
  }
} 