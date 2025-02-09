// ///////////////////////////// Dark mode /////////////////////////////





///////////////////////////// Inscription & connexion /////////////////////////////

const btnLogin = document.getElementById("loginBtn")
const modal = document.getElementById("customModal")
let btnLoginClose = document.querySelector(".btnLoginClose") // pas encore attribué
let btnInscription = document.querySelector(".btnInscription") // pas encore attribué
let btnInscriptionClose = document.querySelector(".btnInscriptionClose") // pas encore attribué

btnLogin.addEventListener("click", function (event) {
    event.preventDefault()
    modal.style.display = "flex"
})

btnLoginClose = document.getElementById("closeModal", function () {
       modal.style.display = "none"
})

// ///////////////////////////// Caroussell /////////////////////////////

let monCarousel = document.querySelector('#carouselExampleFade')

let carousel = new bootstrap.Carousel(monCarousel, {
    interval: 3000, // 3 sec d'intervalle
    ride: "carousel" // défile automatique
})

///////////////////////////// Navbar Réactive /////////////////////////////