function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.querySelector("body");
const button = document.querySelector("button.change-color");
const colorName = document.querySelector("span.color");
const changeBackroud = (event) => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorName.textContent = color;
};

button.addEventListener("click", changeBackroud);
