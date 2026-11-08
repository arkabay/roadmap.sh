# Password Rule Checker

> Project URL: https://roadmap.sh/projects/js-password-rule-checker

Build a small password validator. Each rule should live in its own function, and the final validator should report which rules failed.

## Write these functions:

- `hasMinimumLength(password)` should return true when the password has at least 8 characters.
- `hasNumber(password)` should return true when the password contains at least one number.
- `hasUppercaseLetter(password)` should return true when the password contains at least one uppercase letter.
- `getFailedRules(password)` should return an array of missing rule names.
- `validatePassword(password)` should return an object with valid and failedRules.

## Sample checks:

```js
console.log(validatePassword("hello"));
console.log(validatePassword("Hello123"));
console.log(validatePassword("hello123"));
console.log(validatePassword("HELLOABC"));
```

## Expected output:

```js
{ valid: false, failedRules: ["minimum length", "number", "uppercase letter"] }
{ valid: true, failedRules: [] }
{ valid: false, failedRules: ["uppercase letter"] }
{ valid: false, failedRules: ["number"] }
```

Use _"minimum length"_, _"number"_, and _"uppercase letter"_ as the failed rule names.
