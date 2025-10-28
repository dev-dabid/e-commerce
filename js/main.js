import state from "./state.js";
import { getProducts, getUniqueCategories, filterByCategory } from "./logic.js";
import { renderProducts, renderCategories, setUpCategoryEvents } from "./ui.js";

const url = "https://fakestoreapi.com/products";

const navFilter = document.querySelector(".js-nav__filters");
const pageProducts = document.querySelector(".js-page__products");

async function initProducts() {
  try {
    const allProducts = await getProducts(url);
    state.products = allProducts;

    renderCategories(getUniqueCategories(state.products), navFilter);
    setUpCategoryEvents(navFilter, (category) => {
      state.filteredProducts = filterByCategory(state.products, category);

      renderProducts(state.filteredProducts, pageProducts);
    });
    renderProducts(state.products, pageProducts);
  } catch (error) {
    console.error(error);
  }
}

initProducts();
