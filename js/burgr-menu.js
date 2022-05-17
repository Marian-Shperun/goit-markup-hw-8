(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const menuLink = document.querySelectorAll(
    ".menu-container__navigation .navigation__link"
  );

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("opened");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("opened");
    document.body.classList.toggle("modal-scroll");
  });
  
  menuLink.forEach((el) => {
    el.addEventListener("click", () => {
      menuBtnRef.classList.toggle("opened");
      mobileMenuRef.classList.toggle("opened");

      document.body.classList.toggle("modal-scroll");
    });
  });
})();
