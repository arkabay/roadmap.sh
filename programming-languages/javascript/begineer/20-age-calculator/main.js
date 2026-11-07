import datepicker from "js-datepicker";
import { DateTime } from "luxon";

const ageCalculatorForm = document.getElementById("ageCalculatorForm");
const submitButton = document.querySelector(".age-form__button");
const cardFooter = document.querySelector(".card__footer");
const ageResult = document.querySelector(".card__age-text");

// Initialize external datepicker on the birth date input
const picker = datepicker("#birthDateInput", {
  maxDate: new Date(), // Restrict selection to past or current dates only
  formatter: (input, date) => {
    input.value = DateTime.fromJSDate(date).toFormat("dd/MM/yyyy"); // Format selected date using local timezone
  },
  onSelect: () => {
    // Enable submit button once a valid date is picked
    submitButton.disabled = false;
  },
});

/**
 * Calculate exact age breakdown from a birth date using Luxon.
 *
 * @param {Date} birthDate
 * @returns {{ years: number, months: number, days: number }}
 */
function calculateAge(birthDate) {
  const now = DateTime.now();
  const birth = DateTime.fromJSDate(birthDate);
  const diff = now.diff(birth, ["years", "months", "days"]).toObject();

  return {
    years: Math.floor(diff.years),
    months: Math.floor(diff.months),
    days: Math.floor(diff.days),
  };
}

// Handle form submission and display calculated age
ageCalculatorForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const birthDate = picker.dateSelected;
  if (!birthDate) return;

  const age = calculateAge(birthDate);

  ageResult.textContent = `${age.years} years ${age.months} months ${age.days} days`;
  cardFooter.classList.add("active");
});
