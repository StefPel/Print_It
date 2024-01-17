const slides = [
    { "image": "slide1.jpg", "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>" },
    { "image": "slide2.jpg", "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>" },
    { "image": "slide3.jpg", "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>" },
    { "image": "slide4.png", "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>" }
];

// Sélection des éléments du Document Object Model (DOM)
let dots = document.querySelector(".dots");
const arrowRight = document.querySelector(".arrow_right");
const arrowLeft = document.querySelector(".arrow_left");
const img = document.querySelector(".banner-img");

// Fonction pour passer à l'image suivante
function next() {
    if (img.dataset.index < slides.length - 1) {
        img.dataset.index++;
    } else {
        img.dataset.index = 0;
    }
    updateCarousel();
}

// Fonction pour revenir à l'image précédente
function previous() {
    if (img.dataset.index > 0) {
        img.dataset.index--;
    } else {
        img.dataset.index = slides.length - 1;
    }
    updateCarousel();
}

// Fonction pour mettre à jour le carrousel
function updateCarousel() {
    // Change l'image et le tagline
    img.setAttribute("src", "./assets/images/slideshow/" + slides[img.dataset.index].image);
    img.nextElementSibling.innerHTML = slides[img.dataset.index].tagLine;

    // Met à jour les points de navigation
    let currentDot = document.querySelector(".dot_selected");
    if (currentDot) {
        currentDot.classList.remove("dot_selected");
    }
    dots.children[img.dataset.index].classList.add("dot_selected");
}

// Initialisation du carrousel
for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dots.appendChild(dot);
}
dots.firstElementChild.classList.add("dot_selected");

// Gestion des événements de clic sur les flèches
arrowRight.addEventListener("click", function () {
    next();
});

arrowLeft.addEventListener("click", function () {
    previous();
});