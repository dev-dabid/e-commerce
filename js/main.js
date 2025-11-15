import state from "./state.js";

import {
  getProducts,
  getUniqueCategories,
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
  setUpToggle,
} from "./ui.js";

const url = "https://fakestoreapi.com/products";

const navFilter = document.querySelector(".js-nav__filters");

const navSearch = document.querySelector(".js-nav__search");
const navSearchBtn = document.querySelector(".js-nav__search-button");
const navSearchResetBtn = document.querySelector(".js-nav__search-reset");
const toggleCat = document.querySelector(".js-nav__bottom-toggle");
const toToggleCat = document.querySelector(".nav-bottom__categories");

const pageProducts = document.querySelector(".js-page__products");

async function initProducts() {
  try {
    const allProducts = await getProducts(url);
    console.log(allProducts);
    state.products = allProducts;

    renderCategories(getUniqueCategories(state.products), navFilter);

    setUpCategoryEvents(navFilter, state, (category) => {
      state.currentCategory = category;

      renderProducts(getVisibleProducts(state), pageProducts);
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
      state.searchQuery = "";
      renderProducts(getVisibleProducts(state), pageProducts);
    });

    setUpToggle(toggleCat, (e) => {
      const toToggleCat = document.querySelector(".nav-bottom__categories");
      toToggleCat.classList.toggle("active");

      renderCategories(getUniqueCategories(state.products), toToggleCat);
      e.preventDefault();
    });

    setUpCategoryEvents(toToggleCat, state, (category) => {
      state.currentCategory = category;

      renderProducts(getVisibleProducts(state), pageProducts);
    });
  } catch (error) {
    console.error(error);
  }
}

initProducts();
