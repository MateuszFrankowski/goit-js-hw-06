const messageInput = document.querySelector("#validation-input");

const handleBlur = () => {
  const inputLength = messageInput.getAttribute("data-length");
  messageInput.removeAttribute("class");
  messageInput.value.length.toString() === inputLength
    ? messageInput.classList.add("valid")
    : messageInput.classList.add("invalid");
};
messageInput.addEventListener("blur", handleBlur);
