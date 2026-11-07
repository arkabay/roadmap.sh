// Ver 1: Looping Listener
// const tabs = document.querySelectorAll(".tab");
// const tabContents = document.querySelectorAll(".tab-content");

// tabs.forEach((tab) => {
//   tab.addEventListener("click", () => {
//     // Reset all active tabs and activate clicked tab
//     tabs.forEach((tab) => tab.classList.remove("active"));
//     tab.classList.add("active");

//     // Reset all active contents and activate matching content
//     tabContents.forEach((content) => content.classList.remove("active"));
//     const targetContentId = tab.dataset.target;
//     const targetContent = document.getElementById(targetContentId);
//     targetContent?.classList.add("active");
//   });
// });

// Ver 2: Event Delegation
const cardHeader = document.querySelector(".card-header");
const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");

cardHeader.addEventListener("click", (event) => {
  // Find clicked tab button via event bubbling
  const clickedTab = event.target.closest(".tab");

  // Ignore clicks outside tab buttons
  if (!clickedTab) return;

  // Get matching panel ID from data-target attribute
  const targetId = clickedTab.dataset.target;

  // Toggle 'active' class: true for clicked tab, false for others
  tabs.forEach((tab) => tab.classList.toggle("active", tab === clickedTab));

  // Toggle 'active' class: true for matching panel ID, false for others
  tabContents.forEach((content) =>
    content.classList.toggle("active", content.id === targetId)
  );
});
