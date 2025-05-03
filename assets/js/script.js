/**
 * Using a query selector to select all the cards and add the flip event
 */
const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
    // Changed from 'toggle' to 'add' once I ensured the initial JavaScript was working
  this.classList.add('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard));