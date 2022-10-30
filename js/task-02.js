const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("ul#ingredients");
const fungi = [];
ingredients.forEach((element, index, array) => {
  index = document.createElement("li");
  index.textContent = element;
  index.classList.add("item");
  fungi.push(index);
});

list.append(...fungi);
