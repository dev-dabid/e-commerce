import state from "./state.js";
import {
  getProducts,
  getUniqueCategories,
  filterByCategory,
  addToCart,
} from "./logic.js";
import {
  renderProducts,
  renderCategories,
  setUpCategoryEvents,
  setUpAddToCartEvents,
} from "./ui.js";

const url = "https://fakestoreapi.com/products";

const navFilter = document.querySelector(".js-nav__filters");
const pageProducts = document.querySelector(".js-page__products");

async function initProducts() {
  try {
    const allProducts = await getProducts(url);
    console.log(allProducts);
    state.products = allProducts;

    renderCategories(getUniqueCategories(state.products), navFilter);
    setUpCategoryEvents(navFilter, (category) => {
      state.filteredProducts = filterByCategory(state.products, category);

      renderProducts(state.filteredProducts, pageProducts);
    });

    renderProducts(state.products, pageProducts);
    setUpAddToCartEvents(pageProducts, state.cart, addToCart);
  } catch (error) {
    console.error(error);
  }
}

initProducts();
