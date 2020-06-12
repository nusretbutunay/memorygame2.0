class MemoryGame {
  constructor() {
    let isFlipped = false;
  }

  flipCard(card) {
    if (!this.isFlipped) {
      card.classList.add("open");
      this.isFlipped = true;
    } else {
      card.classList.remove("open");
      this.isFlipped = false;
    }
    this.isFlipped = !this.isFlipped;
    console.log(this.isFlipped);
  }
}

const game = new MemoryGame();
let card = document.querySelectorAll(".card");

card.forEach((card) =>
  card.addEventListener("click", function () {
    game.flipCard(card);
  })
);
