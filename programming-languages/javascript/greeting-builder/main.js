/**
 * Combining first name and last name.
 *
 * @param {string} firstName
 * @param {string} lastName
 * @returns {string}
 */
function formatName(firstName, lastName) {
  const fullName = `${firstName.trim()} ${lastName.trim()}`;

  return fullName;
}

/**
 * Returning a Greeting based on the time of day.
 *
 * @param {"morning" | "afternoon" | "evening"} timeOfDay
 * @returns {string}
 */
function getGreeting(timeOfDay) {
  const normalizeTime = timeOfDay.trim().toLowerCase();

  switch (normalizeTime) {
    case "morning":
      return "Good morning";
    case "afternoon":
      return "Good afternoon";
    case "evening":
      return "Good evening";
    default:
      return "Hello";
  }
}

/**
 * Greeting Orchestrator
 *
 * @param {string} firstName
 * @param {string} lastName
 * @param {string} timeOfDay
 * @returns {string}
 */
function createGreeting(firstName, lastName, timeOfDay) {
  const greeting = getGreeting(timeOfDay);
  const fullName = formatName(firstName, lastName);

  return `${greeting}, ${fullName}`;
}

console.log(createGreeting("Ava", "Stone", "morning"));
console.log(createGreeting("Noah", "Kim", "evening"));
console.log(createGreeting("Mina", "Patel", "afternoon"));
