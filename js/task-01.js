const categories = document.querySelectorAll(".item");
console.log("Number of categories: ", categories.length);
for (let i = 0; i < categories.length; i++) {
  console.log(
    "\n",
    "Category:",
    categories[i].firstElementChild.textContent,
    "\n",
    "Elements: ",
    categories[i].firstElementChild.nextElementSibling.children.length
  );
}
