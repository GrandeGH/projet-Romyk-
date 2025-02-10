// ///////////////////////////// Dark mode /////////////////////////////

const btnDarkMode = document.querySelector(".btnDarkMode")
const darkMode = document.querySelector(".darkMode")
const section = document.querySelectorAll("body")
const navbar = document.querySelector(".navbar")
const prixCercle = document.querySelectorAll(".prixCercle")
const navLink = document.querySelectorAll(".nav-link")


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


let myCarousel = new bootstrap.Carousel(document.querySelector("#carouselExampleFade"), {
    interval: 3000, 
    wrap: true 
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





