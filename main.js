let ham = document.querySelector(".navbar__ham");
let nav = document.querySelector(".navbar nav");


ham.addEventListener("click", ()=> {
    nav.classList.toggle("open");
    ham.classList.toggle("open");
})