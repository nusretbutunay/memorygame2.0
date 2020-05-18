const card = document.querySelectorAll(".card");

let isFlipped = false;

card.forEach((c) => {
  c.addEventListener("click", () => {
    if (!isFlipped) {
      c.classList.add("open");
      isFlipped = !isFlipped;
    } else {
      c.classList.remove("open");
      isFlipped = !isFlipped;
    }
  });
});
