function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input");
const create = document.querySelector(`button[data-create]`);
const destroy = document.querySelector(`button[data-destroy]`);

const divFather = document.querySelector("div#boxes");

const fCreate = (event) => {
  if (
    input.value > parseInt(input.getAttribute(`max`)) ||
    input.value < parseInt(input.getAttribute(`min`))
  ) {
    input.value = "";
    return alert(
      "The entered value is out of range, enter a value in the range 1-100"
    );
  }
  const divArray = [];
  let divDim = 30;
  const inputLength = parseInt(input.value);

  for (let i = 0; i < inputLength; i++) {
    const div = document.createElement("div");
    div.style.height = divDim + "px";
    div.style.width = divDim + "px";
    divDim += 10;
    div.style.backgroundColor = getRandomHexColor();
    divArray.push(div);
  }

  divFather.append(...divArray);
};
const fDestory = () => {
  divFather.innerHTML = '<div id="boxes"></div>';
};
create.addEventListener("click", fCreate);
destroy.addEventListener("click", fDestory);
