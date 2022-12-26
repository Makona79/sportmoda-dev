

//Catalog
const showMoreBlock = document.querySelector(".catalog__btn-1");
const hideMoreBlock = document.querySelector(".catalog__btn-2");
const catalogItem = document.querySelectorAll(".catalog__row").length;
let itemsBlock = 1;

showMoreBlock?.addEventListener("click", () => {
  itemsBlock += 2;
  const arrayBlock = Array.from(document.querySelector(".catalog__content").children);
  console.log(arrayBlock)
  const visItemsBlock = arrayBlock.slice(0, itemsBlock);

  visItemsBlock.forEach((el) => el.classList.add("is-visible"));

  if (visItemsBlock.length === catalogItem) {
    showMoreBlock.style.display = "none";

  }
});
