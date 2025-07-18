import { Spinner } from "spin.js";

var opts = {
  lines: 13, // The number of lines to draw
  length: 38, // The length of each line
  width: 17, // The line thickness
  radius: 45, // The radius of the inner circle
  scale: 1, // Scales overall size of the spinner
  corners: 1, // Corner roundness (0..1)
  speed: 1, // Rounds per second
  rotate: 0, // The rotation offset
  animation: "spinner-line-fade-quick", // The CSS animation name for the lines
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: "#000", // CSS color or array of colors
  fadeColor: "transparent", // CSS color or array of colors
  top: "50%", // Top position relative to parent
  left: "50%", // Left position relative to parent
  shadow: "0 0 1px transparent", // Box-shadow for the lines
  zIndex: 2000000000, // The z-index (defaults to 2e9)
  className: "spinner", // The CSS class to assign to the spinner
  position: "absolute", // Element positioning
};

const target = document.getElementById("foo");
const spinner = new Spinner(opts);

const MOCK_API_URL = "https://682d90c54fae188947568e7c.mockapi.io/requests";

const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  spinner.spin(target);

  form.classList.add("is-loading");
  form.elements.btn.disabled = true;

  const data = {
    email: form.elements.email.value,
    name: form.elements.name.value,
    message: form.elements.message.value,
  };

  fetch(MOCK_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      form.classList.remove("is-loading");
      form.elements.btn.disabled = false;
    })
    .catch((e) => {
      console.error(e);
    });

  form.reset();
});

const accordionList = document.querySelector(".accordion-list");

const handleAccordionListClick = (e) => {
  if (e.target.nodeName !== "UL") {
    const item = e.target.closest("li");

    if (item.classList.contains("active")) {
      item.classList.remove("active");
      return;
    }

    item.classList.add("active");
  }
};

accordionList.addEventListener("click", handleAccordionListClick);

const menuButton = document.querySelector(".burger-menu");

menuButton.addEventListener("click", () => {
  document.body.classList.add("is-menu-open");
});

const menuBurger = document.querySelector(".burger-menu-close");

menuBurger.addEventListener("click", () => {
  document.body.classList.remove("is-menu-open");
});
