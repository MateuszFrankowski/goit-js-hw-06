const form = document.querySelector("form");

const handleSubmit = (event) => {
  event.preventDefault();
  const data = {};
  const {
    elements: { email, password },
  } = event.currentTarget;
  data.email = email.value;
  data.password = password.value;
  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  console.log(`Email: ${data.email}, Password: ${data.password}`);
  event.currentTarget.reset();
};

form.addEventListener("submit", handleSubmit);
