/**
 * Calculate the discount amount.
 *
 * @param {number} price
 * @param {number} discountPercent
 * @returns {number}
 */
function calculateDiscount(price, discountPercent) {
  return (price * discountPercent) / 100;
}

/**
 * Calculate the tax amount.
 *
 * @param {number} priceAfterDiscount
 * @param {number} taxPercent
 * @returns {number}
 */
function calculateTax(priceAfterDiscount, taxPercent) {
  return (priceAfterDiscount * taxPercent) / 100;
}

/**
 * Calculate the final price.
 *
 * @param {number} price
 * @param {number} discountPercent
 * @param {number} taxPercent
 * @returns {number}
 */
function calculateFinalPrice(price, discountPercent, taxPercent) {
  const discount = calculateDiscount(price, discountPercent);
  const priceAfterDiscount = price - discount;
  const taxAmount = calculateTax(priceAfterDiscount, taxPercent);

  return priceAfterDiscount + taxAmount;
}

/**
 * Create a summary object containing the price breakdown and final price.
 *
 * @param {number} price
 * @param {number} discountPercent
 * @param {number} taxPercent
 * @returns {{ price: number, discount: number, tax: number, finalPrice: number }}
 */
function createPriceSummary(price, discountPercent, taxPercent) {
  const discount = calculateDiscount(price, discountPercent);
  const priceAfterDiscount = price - discount;
  const tax = calculateTax(priceAfterDiscount, taxPercent);
  const finalPrice = calculateFinalPrice(price, discountPercent, taxPercent);

  const priceSummary = {
    price,
    discount,
    tax,
    finalPrice,
  };

  return priceSummary;
}

console.log(createPriceSummary(100, 20, 10));
console.log(createPriceSummary(200, 25, 5));
console.log(createPriceSummary(50, 0, 10));
