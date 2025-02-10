// ///////////////////////////// Dark mode /////////////////////////////

const btnDarkMode = document.querySelector(".btnDarkMode")
const darkMode = document.querySelector(".darkMode")
const section = document.querySelectorAll("body")
const navbar = document.querySelector(".navbar")

btnDarkMode.addEventListener("click", function () {
    section.forEach(e => {
        e.classList.toggle("darkMode")
    })
    navbar.classList.remove("bg-body-tertiary")
    navbar.classList.toggle("navbarDarkMode")

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

// // Login
// const btnLogin = document.querySelector(".btnLogin")
// const modal = document.querySelector(".customModal")
// let btnLoginClose = document.querySelector(".btnLoginClose") // pas encore attribué
// let btnInscription = document.querySelector(".btnInscription") // pas encore attribué
// let btnInscriptionClose = document.querySelector(".btnInscriptionClose") // pas encore attribué

// btnLogin.addEventListener("click", function (event) {
//     event.preventDefault()
//     modalRegister.style.display = "none"
//     modal.style.display = "flex"
// })

// btnLoginClose.addEventListener("click", function () {
//     modal.style.display = "none"
// })

// // Register
// const btnRegister = document.querySelector(".btnRegister")
// const modalRegister = document.querySelector(".modalRegister")
// const btnRegisterClose = document.querySelector("btnRegisterClose")

// btnRegister.addEventListener("click", function () {        
//     e.defaultPrevented()
//     modalRegister.style.display = "flex"
//     modal.style.display = "none"


// })

// btnRegisterClose.addEventListener("click", function () {
//     modalRegister.style.display = "none"
// })

// ///////////////////////////// Caroussell /////////////////////////////


let myCarousel = new bootstrap.Carousel(document.querySelector("#carouselExampleFade"), {
    interval: 3000, // Défilement toutes les 3 secondes
    pause: "hover", // Pause quand la souris est dessus
    wrap: true // Boucle infinie
});

///////////////////////////// Navbar Réactive /////////////////////////////






