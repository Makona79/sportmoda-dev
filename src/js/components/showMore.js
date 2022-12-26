console.log("кнопка");
//Catalog
// const showMore1 = document.querySelector(".btn-more-1");
// const productsLength1 = document.querySelectorAll(".").length;
// let items1 = 6;
// console.log(productsLength)
// showMore1?.addEventListener("click", () => {
//   items1 += 6;

//   const array1 = Array.from(
//     document.querySelector(".brands__block").children
//   );
//   const visItems1 = array1.slice(0, items1);

//   visItems1.forEach((el) => el.classList.add("is-visible"));

//   if (visItems1.length === productsLength1) {
//     showMore1.style.display = "none";
//   }
// });


//Brands
const showMore = document.querySelector(".btn-more-2");
const productsLength = document.querySelectorAll(".brands__item").length;
let items = 22;
console.log(productsLength)
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
