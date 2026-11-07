/**
 * Calculate Subtotal of all items in the cart.
 *
 * @param {Array<{ name: string, price: number, quantity: number }>} items
 * @returns {number}
 */
function calculateSubtotal(items) {
  return items.reduce((acc, { price, quantity }) => acc + price * quantity, 0);
}

/**
 * Calculate the discount amount.
 *
 * @param {number} subtotal
 * @param {number} discountPercent
 * @returns {number}
 */
function calculateDiscount(subtotal, discountPercent) {
  return (subtotal * discountPercent) / 100;
}

/**
 * Calculate the tax amount.
 *
 * @param {number} amountAfterDiscount
 * @param {number} taxPercent
 * @returns {number}
 */
function calculateTax(amountAfterDiscount, taxPercent) {
  return (amountAfterDiscount * taxPercent) / 100;
}

/**
 * Create a summary object containing the price breakdown.
 *
 * @param {Array<{ name: string, price: number, quantity: number }>} items
 * @param {number} discountPercent
 * @param {number} taxPercent
 * @returns {{ subtotal: number, discount: number, tax: number, total: number }}
 */
function createCartSummary(items, discountPercent, taxPercent) {
  const subtotal = calculateSubtotal(items);
  const discount = calculateDiscount(subtotal, discountPercent);
  const amountAfterDiscount = subtotal - discount;
  const tax = calculateTax(amountAfterDiscount, taxPercent);
  const total = amountAfterDiscount + tax;

  const cartSummary = {
    subtotal,
    discount,
    tax,
    total,
  };

  return cartSummary;
}

const cartItems = [
  { name: "Notebook", price: 10, quantity: 2 },
  { name: "Pen", price: 2, quantity: 5 },
  { name: "Bag", price: 30, quantity: 1 },
];

console.log(createCartSummary(cartItems, 10, 5));
console.log(calculateSubtotal(cartItems));

const singleItemCart = [{ name: "Mouse", price: 25, quantity: 2 }];
console.log(createCartSummary(singleItemCart, 0, 10));
