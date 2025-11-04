export async function getProducts(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`HTTP error! Status ${response.status}`);
  return response.json();
}

export function getUniqueCategories(products) {
  const catObj = {};

  products.forEach((product) => {
    catObj[product.category] = true;
  });

  return catObj;
}

export function filterByCategory(products, filter) {
  const unfiltered = products.filter((product) => {
    return product.category === filter;
  });

  return unfiltered;
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

export function searchProductItems(input, products) {
  let search = products.filter((product) => {
    const title = product.title.toLowerCase();
    input = input.toLowerCase();
    return title.includes(input);
  });

  return search;
}
