//console.log("кнопка");



//Brands
const showMore = document.querySelector(".btn-more-2");
const productsLength = document.querySelectorAll(".brands__item").length;
let items = 22;
//console.log(productsLength)
showMore.addEventListener("click", () => {
  items += 11;

  const array = Array.from(
    document.querySelector(".brands__block").children
  );
  const visItems = array.slice(0, items);

  visItems.forEach((el) => el.classList.add("is-visible"));

  if (visItems.length === productsLength) {
    showMore.style.display = "none";
  }
});
