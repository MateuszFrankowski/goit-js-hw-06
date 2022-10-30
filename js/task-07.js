const input = document.querySelector("#font-size-control");
const output = document.querySelector("span#text");

const handleTextSize = () => {
  output.style.fontSize = input.value + "px";
};
input.addEventListener("input", handleTextSize);
