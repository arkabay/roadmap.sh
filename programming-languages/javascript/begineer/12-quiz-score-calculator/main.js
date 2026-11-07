/**
 * @typedef {Object} Question
 * @property {number} id
 * @property {string} correctAnswer
 */

/**
 * @typedef {Object} UserAnswer
 * @property {number} questionId
 * @property {string} answer
 */

/**
 * Check whether user answer is correct by matching it with question answer.
 *
 * @param {Question} question
 * @param {UserAnswer} userAnswer
 * @returns {boolean}
 */
function isAnswerCorrect(question, userAnswer) {
  if (!userAnswer) return false;

  return question.correctAnswer === userAnswer.answer;
}

/**
 * Count the correct answer.
 *
 * @param {Array<Question>} questions
 * @param {Array<UserAnswer>} userAnswers
 * @returns {number}
 */
function countCorrectAnswers(questions, userAnswers) {
  return questions.filter((question) => {
    const matchingAnswer = userAnswers.find(
      (answer) => question.id === answer.questionId
    );

    return isAnswerCorrect(question, matchingAnswer);
  }).length;
}

/**
 * Calculate score percentage based on correct answers and total questions.
 *
 * @param {number} correctCount
 * @param {number} totalQuestion
 * @returns {number}
 */
function calculatePercentage(correctCount, totalQuestion) {
  if (totalQuestion === 0) return 0;

  return (correctCount * 100) / totalQuestion;
}

/**
 * Get result message based on percentage.
 *
 * @param {number} percentage
 * @returns {string|null}
 */
function getResultMessage(percentage) {
  if (percentage < 0 || percentage > 100) return null;
  if (percentage >= 90) return "Excellence";
  if (percentage >= 80) return "Great work";
  if (percentage >= 70) return "Good job";
  if (percentage >= 60) return "You passed";

  return "Keep practicing";
}

/**
 * Generate a complete quiz result.
 *
 * @param {Array<Question>} questions
 * @param {Array<UserAnswer>} userAnswers
 * @returns {{ correctCount: number, totalQuestions: number, percentage: number, message: string|null }}
 */
function createQuizResult(questions, userAnswers) {
  const correctCount = countCorrectAnswers(questions, userAnswers);
  const totalQuestions = questions.length;
  const percentage = calculatePercentage(correctCount, totalQuestions);
  const message = getResultMessage(percentage);

  return {
    correctCount,
    totalQuestions,
    percentage,
    message,
  };
}

const questions = [
  { id: 1, correctAnswer: "B" },
  { id: 2, correctAnswer: "A" },
  { id: 3, correctAnswer: "D" },
  { id: 4, correctAnswer: "C" },
];

const userAnswers = [
  { questionId: 1, answer: "B" },
  { questionId: 2, answer: "C" },
  { questionId: 3, answer: "D" },
  { questionId: 4, answer: "C" },
];

console.log(createQuizResult(questions, userAnswers));
console.log(countCorrectAnswers(questions, userAnswers));
console.log(calculatePercentage(3, questions.length));

const partialAnswers = [{ questionId: 1, answer: "B" }];
console.log(createQuizResult(questions, partialAnswers));
