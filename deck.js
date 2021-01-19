import Card from './card.js';

// Your assignment is to code a set of classes that represent a deck of poker-style playing cards.
// (Fifty-two playing cards in four suits: hearts, spades, clubs, diamonds, with face values of Ace,
// 2-10, Jack, Queen, and King.)
export default class Deck {
  suits = ['clubs', 'spades', 'diamonds', 'hearts'];
  values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  constructor() {
    this.cards = [];

    this.suits.forEach((suit) => {
      this.values.forEach((value) => {
        this.cards.push(new Card(suit, value));
      });
    });
  }

  // Shuffle returns no value, but results in the cards in the deck being randomly
  // permuted. Please do not use library-provided “shuffle” operations to implement this function.
  // You may use library provided random number generators in your solution if needed.
  shuffle() {
    if (this.cards.length) {
      for (let i = 0; i < this.cards.length; i++) {
        const swapIndex = Math.floor(Math.random() * this.cards.length);

        const swap = this.cards[i];
        this.cards[i] = this.cards[swapIndex];
        this.cards[swapIndex] = swap;
      }
    }
  }

  // This function should return one card from the deck to the caller. Specifically, a
  // call to shuffle followed by 52 calls to dealOneCard() should result in the caller being provided all
  // 52 cards of the deck in a random order. If the caller then makes a 53rd call to dealOneCard(), no
  // card is dealt.
  dealOneCard() {
    if (this.cards.length) {
      return this.cards.pop();
    }
  }
}
