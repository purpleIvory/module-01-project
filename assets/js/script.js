let hamburger = document.querySelector(".hamburger");
let header__nav = document.querySelector(".header__nav");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
  header__nav.classList.toggle("is-active");
  document.body.classList.toggle("fixed");
});
