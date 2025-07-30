const menuButton = document.querySelector(".burger-menu");

menuButton.addEventListener("click", () => {
  document.body.classList.add("is-menu-open");
});

const menuBurger = document.querySelector(".burger-menu-close");

menuBurger.addEventListener("click", () => {
  document.body.classList.remove("is-menu-open");
});
