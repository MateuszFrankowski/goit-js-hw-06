let counterValue = 0;
console.log(counterValue);
const btnDecrement = document.querySelector(`button[data-action="decrement"]`);
const btnIncrement = document.querySelector(`button[data-action="increment"]`);
const value = document.querySelector(`#value`);

// Event handler
const decrement = () => {
  counterValue--;
  value.textContent = counterValue;
};
const increment = () => {
  counterValue++;
  value.textContent = counterValue;
};

// Adding listener
btnDecrement.addEventListener("click", decrement);
btnIncrement.addEventListener("click", increment);
