/**=== mixitup filter product =====================================================*/
let mixerProduct = mixitup(".portfolio__list", {
  selectors: {
    target: ".portfolio__item",
  },
  animation: {
    duration: 400,
  },
});

/**=== button active portfolio =====================================================*/
const buttonProduct = document.querySelectorAll(".portfolio-btn");

function activeButton() {
  buttonProduct.forEach((l) => l.classList.remove("portfolio-btn--active"));
  this.classList.add("portfolio-btn--active");
}
buttonProduct.forEach(l => l.addEventListener('click', activeButton));
