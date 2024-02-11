//tableau d'objets image et tagline du carrousel
const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const left = document.querySelector(".arrow_left"); //selection du bouton gauche
const right = document.querySelector(".arrow_right"); //selection du bouton droit
const dot = document.querySelectorAll(".dot"); //selection des points de slide
let paragraphe = document.querySelector("p"); //selection du paragraphe
let img = document.getElementsByClassName("banner-img"); //selection de l'image de la banniere
let i = 0; // variable globale
let dotSelected = 0; //variable du point de slide

//fonction du bouton droit
const suivant = function () {
  i += 1;
  if (i >= slides.length) {
    i = 0;
  }
  img[0].src = "assets/images/slideshow/" + slides[i].image;
  paragraphe.innerHTML = slides[i].tagLine;

  dot[dotSelected].classList.remove("dot_selected");
  dotSelected += 1;
  if (dotSelected >= slides.length) {
    dotSelected = 0;
  }
  dot[dotSelected].classList.add("dot_selected");
};

//fonction du bouton gauche
const precedent = function () {
  i -= 1;
  if (i < 0) {
    i = slides.length - 1;
  }
  img[0].src = "assets/images/slideshow/" + slides[i].image;
  paragraphe.innerHTML = slides[i].tagLine;
  dot[dotSelected].classList.remove("dot_selected");
  dotSelected -= 1;
  if (dotSelected < 0) {
    dotSelected = slides.length - 1;
  }
  dot[dotSelected].classList.add("dot_selected");
};

//click sur le bouton droit
right.addEventListener("click", function () {
  suivant();
});

//click sur le bouton gauche
left.addEventListener("click", function () {
  precedent();
});

//interval automatique du slide
setInterval(() => {
  suivant();
}, 4000);

//gestion des bouton du clavier
document.addEventListener("keydown", function (e) {
  if (e.key == "ArrowRight") {
    suivant();
  }
  if (e.key == "ArrowLeft") {
    precedent();
  }
});
