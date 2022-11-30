const data = require('./data');
const prototypeQuestions = data.prototypeData;
const Round = require('../src/Round')
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const util = require('./util');

class Game {
  constructor() {}

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;