const modeSwitch = document.querySelector('[data-js="mode-switch"]');
const page = document.documentElement;

modeSwitch.addEventListener("change", (event) => {
  if (event.target.checked) {
    page.classList.remove("light");
    page.classList.add("dark");
  } else {
    page.classList.remove("dark");
    page.classList.add("light");
  }
});