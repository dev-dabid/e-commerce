export async function getProducts(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`HTTP error! Status ${response.status}`);
  return response.json();
}

export function getUniqueCategories(products) {
  const catObj = {};

  catObj["all"] = true;

  products.forEach((product) => {
    catObj[product.category] = true;
  });

  return catObj;
}

export function addToCart(id, cart) {
  let matchingItem;

  cart.forEach((item) => {
    if (Number(id) === item.id) {
      matchingItem = item;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      id: Number(id),
      quantity: 1,
    });
  }

  console.log(cart);
}

export function countCartItems(cart) {
  let itemsCount = 0;

  cart.forEach((item) => {
    itemsCount += item.quantity;
  });

  return itemsCount;
}

export function getVisibleProducts(state) {
  return state.products
    .filter(
      (p) =>
        state.currentCategory === "all" || p.category === state.currentCategory
    )
    .filter((p) =>
      p.title.toLowerCase().includes(state.searchQuery.toLowerCase())
    );
}
