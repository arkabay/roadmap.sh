/**
 * @typedef {Object} Product
 * @property {number} id
 * @property {string} name
 * @property {string} category
 * @property {number} price
 * @property {boolean} inStock
 */

/**
 * Filter products based on a specific category.
 *
 * @param {Array<Product>} products
 * @param {string} category
 * @returns {Array<Product>}
 */
function filterByCategory(products, category) {
  return products.filter((product) => product.category === category);
}

/**
 * Filter products with price at or below the maximum price.
 *
 * @param {Array<Product>} products
 * @param {number} maxPrice
 * @returns {Array<Product>}
 */
function filterByMaxPrice(products, maxPrice) {
  return products.filter((product) => product.price <= maxPrice);
}

/**
 * Get all products that are currently in stock.
 *
 * @param {Array<Product>} products
 * @returns {Array<Product>}
 */
function getInStockProducts(products) {
  return products.filter((product) => product.inStock);
}

/**
 * Find a single product by its unique ID.
 *
 * @param {Array<Product>} products
 * @param {number} productId
 * @returns {Product|undefined}
 */
function findProductById(products, productId) {
  return products.find((product) => product.id === productId);
}

/**
 * Search products by name matching a search keyword (case-insensitive).
 *
 * @param {Array<Product>} products
 * @param {string} searchText
 * @returns {Array<Product>}
 */
function searchProducts(products, searchText) {
  const keyword = searchText.trim().toLowerCase();

  return products.filter((product) =>
    product.name.toLowerCase().includes(keyword)
  );
}

const products = [
  { id: 1, name: "Notebook", category: "stationery", price: 10, inStock: true },
  { id: 2, name: "Desk Lamp", category: "home", price: 35, inStock: false },
  { id: 3, name: "Pen Set", category: "stationery", price: 6, inStock: true },
  {
    id: 4,
    name: "Water Bottle",
    category: "fitness",
    price: 18,
    inStock: true,
  },
];

console.log(
  filterByCategory(products, "stationery").map((product) => product.name)
);
console.log(filterByMaxPrice(products, 20).map((product) => product.name));
console.log(findProductById(products, 3));
console.log(searchProducts(products, "pen").map((product) => product.name));
console.log(getInStockProducts(products).map((product) => product.name));
console.log(findProductById(products, 99));
