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
             </div>
           `;

  return card;
}

export function renderCategories(products, container) {
  let htmlCategory = "";

  Object.keys(products).forEach((category) => {
    htmlCategory += `<button>${category}</button>`;
  });

  container.innerHTML = htmlCategory;
}

export function setUpCategoryEvents(container, callback) {
  container.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const category = e.target.innerText;
      callback(category);
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
