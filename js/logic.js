export async function getProducts(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`HTTP error! Status ${response.status}`);
  return response.json();
}

export function getUniqueCategories(products) {
  const catObj = {};

  products.forEach((product) => {
    catObj[product] = true;
  });

  return catObj;
}
