var hamburger = document.querySelector(".hamburger");
var header__nav = document.querySelector(".header__nav");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
  header__nav.classList.toggle("is-active");
});