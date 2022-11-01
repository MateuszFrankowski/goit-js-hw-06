const input = document.querySelector("#font-size-control");
const output = document.querySelector("span#text");
output.style.fontSize = input.value + "px";
const handleTextSize = () => {
  output.style.fontSize = input.value + "px";
};
input.addEventListener("input", handleTextSize);
