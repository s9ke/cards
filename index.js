import Deck from './deck.js';

const deck = new Deck();
deck.shuffle();
deck.dealOneCard();

console.log('Deck: ', deck);
