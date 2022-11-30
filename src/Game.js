const data = require('../src/data');
const prototypeQuestions = data.prototypeData;
const Round = require('../src/Round')
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const util = require('../src/util');

class Game {
  constructor() {
    this.currentRound = null;
  }

  createDeck() {
    let cards = [];
    data.forEach(question => {
      cards = [...cards, new Card(question)]
    })
    const deck = new Deck(cards)
    return deck;
  }

  newRound() {
    this.currentRound = new Round(this.createDeck());

    return this.currentRound;
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${this.currentRound.deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  startGame() {
    this.newRound();
    this.printMessage(this.currentRound.deck, this.currentRound);
    this.printQuestion(this.currentRound);
    this.currentRound.takeTurn();
  }
}

module.exports = Game;