const fadeUpElements = document.querySelectorAll('.fade-up');

function checkFadeUp() {
  for (let i = 0; i < fadeUpElements.length; i++) {
    const element = fadeUpElements[i];
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementPosition < windowHeight - 100) {
      element.classList.add('fade-up-active');
    } else {
      element.classList.remove('fade-up-active');
    }
  }
}

window.addEventListener('scroll', checkFadeUp);


window.addEventListener("load", function () {
    const preloader = document.querySelector("#preloader");
    preloader.classList.add("hide-preloader");});