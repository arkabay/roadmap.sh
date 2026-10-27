/**
 * Check if a number is positive value greater than zero.
 *
 * @param {number} number
 * @returns {boolean}
 */
function isPositive(number) {
  return number > 0;
}

/**
 * Check if a number is negative value less than zero.
 *
 * @param {number} number
 * @returns {boolean}
 */
function isNegative(number) {
  return number < 0;
}

/**
 * Check if a number is exactly zero.
 *
 * @param {number} number
 * @returns {boolean}
 */
function isZero(number) {
  return number === 0;
}

/**
 * Check if a number is even.
 *
 * @param {number} number
 * @returns {boolean}
 */
function isEven(number) {
  return number % 2 === 0;
}

/**
 * Describe properties of a given number.
 *
 * @param {number} number
 * @returns {{ positive: boolean, negative: boolean, zero: boolean, even: boolean, odd: boolean }}
 */
function describeNumber(number) {
  const summaryProperties = {
    positive: isPositive(number),
    negative: isNegative(number),
    zero: isZero(number),
    even: isEven(number),
    odd: !isEven(number),
  };

  return summaryProperties;
}

console.log(describeNumber(8));
console.log(describeNumber(-3));
console.log(describeNumber(0));
console.log(describeNumber(7));
