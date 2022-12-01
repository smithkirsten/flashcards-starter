const chai = require('chai');
const expect = chai.expect;
const Game = require('../src/Game');
const Round = require('../src/Round')
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const data = require('../src/data');
const util = require('../src/util');
const prototypeQuestions = data.prototypeData;

describe('Game', function () {
    let newGame;
    beforeEach(function() {
        newGame = new Game();
    });

    it('should be a function', function() {
        expect(Game).to.be.a('function');
    });

    it('should instantiate a new game', function() {
        expect(newGame).to.be.an.instanceof(Game);
    });

    it('should be able to hold the current round in a property', function() {
        expect(newGame.currentRound).to.equal(null);
    });

    it('should create a new deck of cards from the prototype data', function() {
        expect(newGame.createDeck().cards[2]).to.deep.equal({
            "id": 3,
            "question": "What type of prototype method directly modifies the existing array?",
            "answers": ["mutator method", "accessor method", "iteration method"],
            "correctAnswer": "mutator method"
        });
        expect(newGame.createDeck().cards.length).to.equal(30);
    });
    
    it('should create a new round', function() {
        expect(newGame.newRound()).to.be.an.instanceof(Round);
        expect(newGame.currentRound).to.be.an.instanceof(Round);
        expect(newGame.currentRound.deck.cards.length).to.equal(30);
    })
})

