import state from "./state.js";

import {
  getProducts,
  getUniqueCategories,
  filterByCategory,
  addToCart,
  countCartItems,
  getVisibleProducts,
} from "./logic.js";

import {
  renderProducts,
  renderCategories,
  setUpCategoryEvents,
  setUpAddToCartEvents,
  updateCartCount,
  setUpSearchEvent,
  setUpResetSearchEvent,
} from "./ui.js";

const url = "https://fakestoreapi.com/products";

const navFilter = document.querySelector(".js-nav__filters");

const navSearch = document.querySelector(".js-nav__search");
const navSearchBtn = document.querySelector(".js-nav__search-button");
const navSearchResetBtn = document.querySelector(".js-nav__search-reset");

const pageProducts = document.querySelector(".js-page__products");

async function initProducts() {
  try {
    const allProducts = await getProducts(url);
    console.log(allProducts);
    state.products = allProducts;

    renderCategories(getUniqueCategories(state.products), navFilter);

    setUpCategoryEvents(navFilter, (category) => {
      state.currentCategory = category;

      renderProducts(getVisibleProducts(state), pageProducts);

      setUpSearchEvent(navSearch, navSearchBtn, (input) => {
        state.searchedProducts = searchProductItems(
          input,
          state.filteredProducts
        );

        setUpResetSearchEvent(navSearch, navSearchResetBtn, () => {
          renderProducts(state.filteredProducts, pageProducts);
        });

        renderProducts(state.searchedProducts, pageProducts);
      });
    });

    renderProducts(state.products, pageProducts);
    setUpAddToCartEvents(
      pageProducts,
      state.cart,
      addToCart,
      updateCartCount,
      countCartItems
    );

    setUpSearchEvent(navSearch, navSearchBtn, (input) => {
      state.searchQuery = input;

      renderProducts(getVisibleProducts(state), pageProducts);
    });

    setUpResetSearchEvent(navSearch, navSearchResetBtn, () => {
      renderProducts(state.products, pageProducts);
    });
  } catch (error) {
    console.error(error);
  }
}

initProducts();
