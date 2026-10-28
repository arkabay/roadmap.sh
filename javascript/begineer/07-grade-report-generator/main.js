/**
 * Determine letter grade based on numeric score.
 *
 * @param {number} score
 * @returns {string}
 */
function getLetterGrade(score) {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

/**
 * Check wether a score meets the passing threshold (60 or higher).
 *
 * @param {number} score
 * @returns {boolean}
 */
function hasPassed(score) {
  return score >= 60;
}

/**
 * Get feedback message based on letter grade.
 *
 * @param {string} grade
 * @returns {string}
 */
function getFeedback(grade) {
  const gradeLetter = grade.toUpperCase();

  if (gradeLetter === "A") return "Excellent work";
  if (gradeLetter === "B") return "Great job";
  if (gradeLetter === "C" || gradeLetter === "D") return "You passed";
  return "Keep practicing";
}

/**
 * Generate a complete grade report for a student.
 *
 * @param {string} name
 * @param {number} score
 * @returns {{ name: string, score: number, grade: string, passed: boolean, feedback: string }}
 */
function createGradeReport(name, score) {
  const grade = getLetterGrade(score);
  const passed = hasPassed(score);
  const feedback = getFeedback(grade);

  const gradeReport = {
    name,
    score,
    grade,
    passed,
    feedback,
  };

  return gradeReport;
}

console.log(createGradeReport("Ava", 92));
console.log(createGradeReport("Noah", 48));
console.log(createGradeReport("Mina", 75));
console.log(createGradeReport("Sam", 60));
