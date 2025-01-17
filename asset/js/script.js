document.querySelectorAll(".enroll-btn").forEach((button) => {
  button.addEventListener("click", function () {
    const courseName =
      this.closest(".course-content").querySelector("h3").textContent;
    alert(
      `Thank you for your interest in "${courseName}"! We'll contact you with enrollment details.`
    );
  });
});

const resourceCards = document.querySelectorAll(".resource-card");
resourceCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.classList.add("hover");
  });
  card.addEventListener("mouseleave", () => {
    card.classList.remove("hover");
  });
});
