function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const rgb2hex = (rgb) =>
  `#${rgb
    .match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)
    .slice(1)
    .map((n) => parseInt(n, 10).toString(16).padStart(2, "0"))
    .join("")}`;
const body = document.querySelector("body");
const button = document.querySelector("button.change-color");
const colorName = document.querySelector("span.color");
const compStyles = window.getComputedStyle(body);
colorName.textContent = rgb2hex(
  compStyles.getPropertyValue("background-Color")
);

const changeBackroud = (event) => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorName.textContent = color;
};

button.addEventListener("click", changeBackroud);
