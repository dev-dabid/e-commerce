export function createProductCard(product) {
  const card = document.createElement("div");
  card.className = "product__card";

  card.innerHTML = `
             <div class="product__card-content">
               <div class="product__card-image">
                 <img src="${product.image}" alt="" />
               </div>
               <div class="product__card-details">
                 <p class="product__card-title">${product.title}</p>
                 <p class="product__card-price">$${product.price}</p>
                 <div class="product__card-rating">
                   <img src="/assets/star.svg" />
                   <p>${product.rating.rate}</p>
                   <p>(${product.rating.count})</p>
                 </div>
               </div>
               <div class="product__card-btn-container">
                <button class="product__card-btn js-product__card-btn" data-product-id="${product.id}">Add to Cart</button>
              </div>
             </div>
           `;

  return card;
}

export function renderCategories(products, container) {
  let htmlCategory = "";

  Object.keys(products).forEach((category) => {
    htmlCategory += `<button class="nav__category-button">${category}</button>`;
  });

  container.innerHTML = htmlCategory;
}

export function setUpCategoryEvents(container, callback) {
  container.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const categoryBtn = document.querySelectorAll(".nav__category-button");

      categoryBtn.forEach((btn) => {
        btn.classList.remove("active");
      });

      const category = e.target.innerText;
      callback(category);

      e.target.classList.toggle("active");
    }
  });
}

export function renderProducts(products, container) {
  container.innerHTML = "";

  let htmlProducts = document.createDocumentFragment();

  products.forEach((product) => {
    htmlProducts.appendChild(createProductCard(product));
  });

  container.appendChild(htmlProducts);
}

export function setUpAddToCartEvents(
  container,
  cart,
  callback1,
  callback2,
  callback3
) {
  container.addEventListener("click", (e) => {
    if (e.target.classList.contains("js-product__card-btn")) {
      const productId = e.target.dataset.productId;
      callback1(productId, cart);
      callback2(callback3, cart);
    }
  });
}

export function updateCartCount(callback, cart) {
  const countUi = document.querySelector(".js-nav__links-cart-count");

  countUi.innerText = callback(cart);
}

export function setUpSearchEvent(searchBar, searchBarBtn, callback) {
  searchBarBtn.addEventListener("click", (e) => {
    let input = searchBar.value;
    callback(input);

    e.preventDefault();
  });
}
