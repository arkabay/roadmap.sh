/**
 * Remove spaces from start and end of a string.
 *
 * @param {string} text
 * @returns {string}
 */
function cleanText(text) {
  return text.trim();
}

/**
 * Capitalize the first letter of a string.
 *
 * @param {string} text
 * @returns {string}
 */
function capitalize(text) {
  const normalizedText = text.toLowerCase();
  const capitalizedText = normalizedText.replace(/^./, (match) =>
    match.toUpperCase()
  );

  return capitalizedText;
}

/**
 * Format and return a full display name with cleaned and capitalized names.
 *
 * @param {string} firstName
 * @param {string} lastName
 * @returns {string}
 */
function formatDisplayName(firstName, lastName) {
  const formattedFirstName = capitalize(cleanText(firstName));
  const formattedLastName = capitalize(cleanText(lastName));

  return `${formattedFirstName} ${formattedLastName}`;
}

console.log(formatDisplayName("  ava", "STONE  "));
console.log(formatDisplayName("nOAh", "  kim"));
console.log(formatDisplayName("  mINA  ", "pATEL"));
