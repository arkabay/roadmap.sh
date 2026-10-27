/**
 * Convert Celsius to Fahrenheit
 *
 * @param {number} celsius
 * @returns {number}
 */
function celsiusToFahrenheit(celsius) {
  const fahrenheitTemp = celsius * (9 / 5) + 32;

  return fahrenheitTemp;
}

/**
 * Convert Fahrenheit to Celsius
 *
 * @param {number} fahrenheit
 * @returns {number}
 */
function fahrenheitToCelsius(fahrenheit) {
  const celsiusTemp = (fahrenheit - 32) * (5 / 9);

  return celsiusTemp;
}

/**
 * Formatting Temperature Display
 *
 * @param {number} value
 * @param {string} unit
 * @returns {string}
 */
function formatTemperature(value, unit) {
  return `${value} ${unit}`;
}

const fahrenheit = celsiusToFahrenheit(25);
console.log(formatTemperature(fahrenheit, "F"));

const celsius = fahrenheitToCelsius(68);
console.log(formatTemperature(celsius, "C"));

const freezingFahrenheit = celsiusToFahrenheit(0);
console.log(formatTemperature(freezingFahrenheit, "F"));

const freezingCelsius = fahrenheitToCelsius(32);
console.log(formatTemperature(freezingCelsius, "C"));
