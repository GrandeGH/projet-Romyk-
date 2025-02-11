// ///////////////////////////// Dark mode /////////////////////////////

const btnDarkMode = document.querySelector(".btnDarkMode")
const darkMode = document.querySelector(".darkMode")
const section = document.querySelectorAll("body")
const navbar = document.querySelector(".navbar")
const prixCercle = document.querySelectorAll(".prixCercle")
const navLink = document.querySelectorAll(".nav-link")
const carouselExample = document.getElementById("carouselExampleFade")

btnDarkMode.addEventListener("click", function () {
    section.forEach(e => {
        e.classList.toggle("darkMode")
    })
    navbar.classList.toggle("bg-body-tertiary")
    navbar.classList.toggle("navbarDarkMode")

    prixCercle.forEach(element => {
        element.classList.toggle("prixCercleDarkMode")
        element.classList.toggle("bg-light")
        element.classList.toggle("bg-dark")
    })

    navLink.forEach(element2 => {
        element2.classList.toggle("text-light")
    })

    carouselExample.classList.toggle("carouselExampleFadeDarkMode")
    carouselExample.classList.toggle("shadow")


})



// ///////////////////////////// Inscription & connexion /////////////////////////////

// login / connexion
const loginBtn = document.querySelector(".loginBtn")
const modalLogin = document.querySelector(".modalLogin")

loginBtn.addEventListener("click", function (e) {
    e.preventDefault()
    modalLogin.classList.remove("d-none")
})

// register / inscription 
const registerBtn = document.querySelector(".registerBtn")
const modalRegister = document.querySelector(".modalRegister")
const registerToLogin = document.getElementById("registerToLogin")

registerBtn.addEventListener("click", function (e) {
    e.preventDefault()
    modalRegister.classList.remove("d-none")
    modalLogin.classList.add("d-none")
})

registerToLogin.addEventListener("click", function (e) {
    e.preventDefault()
    modalLogin.classList.remove("d-none")
    modalRegister.classList.add("d-none")
})

// ///////////////////////////// Caroussell /////////////////////////////

let carousel = document.querySelector("#carouselExample");
let items = carousel.querySelectorAll(".carousel-item");
let currentIndex = 0;
let interval = 3000; 

function showSlide(index) {
    items.forEach((item, i) => {
        item.classList.toggle("active", i === index);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % items.length;
    showSlide(currentIndex);
}

let autoSlide = setInterval(nextSlide, interval);

document.querySelector(".carousel-control-next").addEventListener("click", function () {
    clearInterval(autoSlide); 
    nextSlide();
    autoSlide = setInterval(nextSlide, interval); 
});

document.querySelector(".carousel-control-prev").addEventListener("click", function () {
    clearInterval(autoSlide);
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showSlide(currentIndex);
    autoSlide = setInterval(nextSlide, interval);
});



///////////////////////////// Navbar Réactive /////////////////////////////

const navbarToggler = document.querySelector(".navbar-toggler");
const navbarCollapse = document.querySelector("#navbarNav");

navbarToggler.addEventListener("click", function () {
    const isExpanded = navbarToggler.getAttribute("aria-expanded") === "true";
    
    // afficher le navbar si on clique le toggle 
    navbarCollapse.classList.toggle("show");

    navbarToggler.setAttribute("aria-expanded", !isExpanded);
});





