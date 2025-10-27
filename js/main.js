import state from "./state.js";
import { getProducts, getUniqueCategories } from "./logic.js";
import { renderProducts, renderCategories } from "./ui.js";

const url = "https://fakestoreapi.com/products";

const navFilter = document.querySelector(".js-nav__filters");
const pageProducts = document.querySelector(".js-page__products");

async function initProducts() {
  try {
    const allProducts = await getProducts(url);
    state.products = allProducts;

    renderCategories(getUniqueCategories(state.products), navFilter);
    renderProducts(state.products, pageProducts);
  } catch (error) {
    console.error(error);
  }
}

initProducts();

// function filterProducts() {
//   const navCategory = document.querySelector(".js-nav__filters");

//   let filter = "";
//   let filteredProduct = [];

//   navCategory.addEventListener("click", (e) => {
//     document.querySelector(".js-page__products").innerHTML = "";

//     if (e.target.classList.contains("js-nav__category")) {
//       filter = e.target.innerText;

//       filteredProduct = [];

//       allProducts.forEach((product) => {
//         if (product.category === filter) {
//           filteredProduct.push(product);
//         }
//       });

//       console.log(filteredProduct);

//       renderProducts(filteredProduct);
//     }
//   });
// }
