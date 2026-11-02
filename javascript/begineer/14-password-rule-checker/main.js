/**
 * Check wether the password has at least 8 characters.
 *
 * @param {string} password
 * @returns {boolean}
 */
function hasMinimumLength(password) {
  return password.length >= 8;
}

/**
 * Check whether the password contains at least one numeric digit.
 *
 * @param {string} password
 * @returns {boolean}
 */
function hasNumber(password) {
  // Ver 1: Using RegEx
  const numberRegExPattern = /\d/;
  return numberRegExPattern.test(password);

  // Ver 2: Using for of
  // for (const char of password) {
  //   if (char === " ") continue;
  //   if (char >= "0" && char <= "9") {
  //     return true;
  //   }
  // }

  // return false;

  // Ver 3: Using some
  // return [...password].some(
  //   (char) => char >= "0" && char <= "9" && char !== " "
  // );
}

/**
 * Check whether the password contains at least one uppercase letter.
 *
 * @param {string} password
 * @returns {boolean}
 */
function hasUppercaseLetter(password) {
  // Ver 1: Using RegEx
  const uppercaseRegExPattern = /[A-Z]/;
  return uppercaseRegExPattern.test(password);

  // Ver 2: Using for of
  // for (const char of password) {
  //   if (char === " ") continue;
  //   if (char >= "A" && char <= "Z") {
  //     return true;
  //   }
  // }

  // return false;

  // Ver 3: Using some
  // return [...password].some(
  //   (char) => char >= "A" && char <= "Z" && char !== " "
  // );
}

const PASSWORD_RULES = [
  { name: "minimum length", check: hasMinimumLength },
  { name: "number", check: hasNumber },
  { name: "uppercase letter", check: hasUppercaseLetter },
];

/**
 * Collect and return a list of failed password rule names.
 *
 * @param {string} password
 * @returns {Array<string>}
 */
function getFailedRules(password) {
  // Ver 1: Data-Driven Rules
  return PASSWORD_RULES.filter((rule) => !rule.check(password)).map(
    (rule) => rule.name
  );

  // Ver 2: Imperative
  // const rules = [];

  // if (!hasMinimumLength(password)) {
  //   rules.push("minimum length");
  // }

  // if (!hasNumber(password)) {
  //   rules.push("number");
  // }

  // if (!hasUppercaseLetter(password)) {
  //   rules.push("uppercase letter");
  // }

  // return rules;
}

/**
 * Validate password againts all rules and return the validation summary.
 *
 * @param {string} password
 * @returns {{ valid: boolean, failedRules: Array<string> }}
 */
function validatePassword(password) {
  const failedRules = getFailedRules(password);
  const valid = failedRules.length === 0;

  return {
    valid,
    failedRules,
  };
}

console.log(validatePassword("hello"));
console.log(validatePassword("Hello123"));
console.log(validatePassword("hello123"));
console.log(validatePassword("HELLOABC"));
