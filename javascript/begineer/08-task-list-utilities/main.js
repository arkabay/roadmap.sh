/**
 * @typedef {Object} Task
 * @property {number} id
 * @property {string} title
 * @property {boolean} completed
 */

/**
 * Add new incomplete task to the list.
 *
 * @param {Array<Task>} tasks
 * @param {string} title
 * @returns {Array<Task>}
 */
function addTask(tasks, title) {
  const id = Math.max(0, ...tasks.map((task) => task.id)) + 1;

  const newTask = {
    id,
    title,
    completed: false,
  };

  return [...tasks, newTask];
}

/**
 * Mark a matching task as completed without mutating the original list.
 *
 * @param {Array<Task>} tasks
 * @param {number} taskId
 * @returns {Array<Task>}
 */
function completeTask(tasks, taskId) {
  return tasks.map((task) =>
    task.id === taskId ? { ...task, completed: true } : task
  );
}

/**
 * Remove a task by its ID without mutating the original list.
 *
 * @param {Array<Task>} tasks
 * @param {number} taskId
 * @returns {Array<Task>}
 */
function removeTask(tasks, taskId) {
  return tasks.filter((task) => task.id !== taskId);
}

/**
 * Count the number of incomplete tasks.
 *
 * @param {Array<Task>} tasks
 * @returns {number}
 */
function countIncompleteTasks(tasks) {
  return tasks.filter((task) => !task.completed).length;
}

const tasks = [
  { id: 1, title: "Review variables", completed: true },
  { id: 2, title: "Practice functions", completed: false },
];

const withNewTask = addTask(tasks, "Build task utilities");
console.log(withNewTask.map((task) => task.title));

const completed = completeTask(withNewTask, 2);
console.log(countIncompleteTasks(completed));

console.log(removeTask(completed, 1).map((task) => task.id));
console.log(tasks.length);
console.log(countIncompleteTasks(tasks));
