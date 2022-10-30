const form = document.querySelector("#name-input");
const handleMessage = (event) => {
  const mesageOutput = document.querySelector("span#name-output");
  const msg = event.currentTarget.value;
  mesageOutput.textContent = msg === "" ? "Anonymous" : msg;
};

form.addEventListener("input", handleMessage);
