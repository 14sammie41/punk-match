// Using a query selector to select all the cards and add the flip event
const cards = document.querySelectorAll(".memory-card");

// This will stop the pop up to start the game from coming up on every page.
if (window.location.pathname === "/index.html" && window.location.pathname !== "/") {
window.confirm("Welcome to Punk Match! Click OK to get started! Or got to the help page for more info.");
}

// These variables are used to track the state of the game
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let myScore = 0;

// This function is immediately invoked after its declaration.
(function shuffle() {
  cards.forEach((card) => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

function flipCard() {
  // This will stop more cards being flipped if two cards are flipped or if a match occurs
  if (lockBoard) return;
  if (this === firstCard) return;
  // Changed from 'toggle' to 'add' once I ensured the initial JavaScript was working
  this.classList.add("flip");

  // Checks to see if the second card clicked is the same as the first card clicked
  if (this === firstCard) return;

  // Keeps the first card clicked in its flipped position.
  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  // When the second card is clicked it will check for a match
  secondCard = this;
  checkForMatch();
}

// This function will physically check if the two cards datasets match
function checkForMatch() {
  if (firstCard.dataset.framework === secondCard.dataset.framework) {
    disableCards();
    updateScore();
    return;
  }
  // If the cards don't match this will reset the deck
  unflipCards();
}

function updateScore() {
  myScore++; // This will increase the score by 1
  const pairsElement = document.getElementById("pairs");
  if (pairsElement) {
    pairsElement.textContent = myScore; // This will update the score on the actual page
  }

}

// This will remove the event listener causing the cards to stay flipped after the click
function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
  resetBoard();
}

// This will both unflip the cards and allow a sensible time frame for it to happen that humans can register
function unflipCards() {
  lockBoard = true; // This will stop further cards being flipped when two are already in view
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    resetBoard();
  }, 2000); // This is the equivalent of 2 seconds, 4 times the time taken for a human to blink.
}

// Used a destructing assignment to minimise code
function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

cards.forEach((card) => card.addEventListener("click", flipCard));