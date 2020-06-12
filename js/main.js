class MemoryGame {
  constructor() {
    let isFlipped = false;
    let lockBoard = false;
    let card;
    let firstCard, secondCard;
  }

  resetBoard() {
    [this.isFlipped, this.lockBoard] = [false, false];
    [this.firstCard, this.secondCard] = [null, null];
  }

  flipCard(card) {
    this.card = card;
    if (this.lockBoard) return;
    if (this.card === this.firstCard) return;
    this.card.classList.add("open");
    console.log(this.card.dataset.index);
    if (!this.isFlipped) {
      this.isFlipped = true;
      this.firstCard = this.card;
      return;
    }
    this.secondCard = this.card;
    this.isFlipped = false;
    this.checkCardMatch();
  }

  checkCardMatch() {
    if (this.firstCard.dataset.index === this.secondCard.dataset.index) {
      this.disableCards();
      return;
    }

    this.unFlipCards();
  }

  disableCards() {
    this.firstCard.removeEventListener("click", this.flipCard);
    this.secondCard.removeEventListener("click", this.flipCard);
  }

  unFlipCards() {
    this.lockBoard = true;
    setTimeout(() => {
      this.firstCard.classList.remove("open");
      this.secondCard.classList.remove("open");
      this.lockBoard = false;
    }, 1000);
  }
}

const game = new MemoryGame();
let cards = document.querySelectorAll(".card");

(function shuffle() {
  cards.forEach((card) => {
    let ramdomPos = Math.floor(Math.random() * 16);
    card.style.order = ramdomPos;
  });
})();

cards.forEach((card) =>
  card.addEventListener("click", function () {
    game.flipCard(card);
  })
);
