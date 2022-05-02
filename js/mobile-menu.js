(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu");

  menuBtnRef.addEventListener("click", () => {
    const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    document.body.classList.toggle("lock");
    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanden", !expanded);

    mobileMenuRef.classList.toggle("is-open");
  });
})();
