const faqList = document.getElementById("faqList");
const faqs = document.querySelectorAll(".faq-item");

// Handle accordion click events via event delegation
faqList.addEventListener("click", (event) => {
  // Target only the header element to trigger toggle
  const clickedHeader = event.target.closest(".faq-item__header");
  if (!clickedHeader) return;

  // Locate the parent accordion item
  const currentItem = clickedHeader.closest(".faq-item");
  const isActive = currentItem.classList.contains("active");

  // Collapse all items, only expand clicked item if it was previously closed
  faqs.forEach((item) =>
    item.classList.toggle("active", item === currentItem && !isActive)
  );
});
