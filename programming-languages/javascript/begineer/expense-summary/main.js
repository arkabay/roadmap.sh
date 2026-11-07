/**
 * @typedef {Object} Expenses
 * @property {number} id
 * @property {string} category
 * @property {number} amount
 */

/**
 * Calculate the total amount of all expenses.
 *
 * @param {Array<Expenses>} expenses
 * @returns {number}
 */
function calculateTotal(expenses) {
  return expenses.reduce((acc, item) => acc + item.amount, 0);
}

/**
 * Calculate the total expense amount for a specific category.
 *
 * @param {Array<Expenses>} expenses
 * @param {string} category
 * @returns {number}
 */
function calculateCategoryTotal(expenses, category) {
  return expenses.reduce(
    (acc, item) => (item.category === category ? acc + item.amount : acc),
    0
  );
}

/**
 * Find the expense item with the highest amount.
 *
 * @param {Array<Expenses>} expenses
 * @returns {Expenses|null}
 */
function findLargestExpense(expenses) {
  if (expenses.length === 0) return null;

  return expenses.reduce((prev, current) =>
    current.amount > prev.amount ? current : prev
  );
}

/**
 * Generate a Summary containing total expenses, category totals, and the largest expense.
 *
 * @param {Array<Expenses>} expenses
 * @returns {{ total: number, foodTotal: number, transportTotal: number, largestExpense: Expenses|null }}
 */
function createExpenseSummary(expenses) {
  return {
    total: calculateTotal(expenses),
    foodTotal: calculateCategoryTotal(expenses, "food"),
    transportTotal: calculateCategoryTotal(expenses, "transport"),
    largestExpense: findLargestExpense(expenses),
  };
}

const expenses = [
  { id: 1, category: "food", amount: 24 },
  { id: 2, category: "transport", amount: 15 },
  { id: 3, category: "food", amount: 18 },
  { id: 4, category: "books", amount: 40 },
];

console.log(createExpenseSummary(expenses));
console.log(calculateCategoryTotal(expenses, "food"));
console.log(calculateCategoryTotal(expenses, "health"));
console.log(findLargestExpense(expenses));
