/**
 * @typedef {Object} User
 * @property {number} id
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} email
 * @property {string|number|null} phone
 * @property {{ city: string, country: string }} address
 * @property {{ status: string, plan: string }} account
 */

/**
 * Combine first name and last name into a single display name.
 *
 * @param {User} user
 * @returns {string}
 */
function getDisplayName(user) {
  return `${user.firstName} ${user.lastName}`;
}

/**
 * Format user's city and country into a location string.
 *
 * @param {User} user
 * @returns {string}
 */
function getLocation(user) {
  return `${user.address?.city}, ${user.address?.country}`;
}

/**
 * Extract contact details (email and phone) from user.
 *
 * @param {User} user
 * @returns {{ email: string, phone: string|number|null }}
 */
function getContactSummary(user) {
  return {
    email: user.email,
    phone: user.phone,
  };
}

/**
 * Check wether the user's account status is active/
 *
 * @param {User} user
 * @returns {boolean}
 */
function isAccountActive(user) {
  return user.account?.status === "active";
}

/**
 * Generate a complete profile summary from user data.
 *
 * @param {User} user
 * @returns {{ displayName: string, location: string, contact: { email: string, phone: string|number|null }, active: boolean, plan: string }}
 */
function createProfileSummary(user) {
  return {
    displayName: getDisplayName(user),
    location: getLocation(user),
    contact: getContactSummary(user),
    active: isAccountActive(user),
    plan: user.account?.plan,
  };
}

const user = {
  id: 42,
  firstName: "Ava",
  lastName: "Stone",
  email: "ava@example.com",
  phone: null,
  address: {
    city: "London",
    country: "UK",
  },
  account: {
    status: "active",
    plan: "pro",
  },
};

console.log(createProfileSummary(user));
console.log(getDisplayName(user));
console.log(isAccountActive(user));
console.log(getContactSummary(user));
