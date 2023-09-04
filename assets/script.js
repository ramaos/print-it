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
const left = document.querySelector(".arrow_left");
const right = document.querySelector(".arrow_right");
const dot = document.querySelectorAll(".dot");

let paragraphe = document.querySelector("p");
let img = document.getElementsByClassName("banner-img");

let i = 0;
let dotSelected = 0;

right.addEventListener("click", function () {
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
});

left.addEventListener("click", function () {
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
});
