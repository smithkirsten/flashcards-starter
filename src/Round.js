const Turn = require("./Turn");

class Round {
    constructor(deck) {
        this.turns = 0;
        this.deck = deck;
        this.currentCard = deck.cards[0];
        this.currentTurn;
        this.wrongAnswers = [];
    }

    returnCurrentCard() {
        return this.currentCard;
    }

    takeTurn(guess) {
        this.turns++;
        this.currentTurn = new Turn(guess, this.currentCard);
        this.currentCard = this.deck.cards[this.turns];
        this.currentTurn.evaluateGuess();
        if(!this.currentTurn.correct) {
            this.wrongAnswers.push(this.currentTurn.card.id)
        }
        return this.currentTurn.giveFeedback();
    }

    calculatePercentCorrect() {
        let decimal = (this.deck.cards.length / this.wrongAnswers.length).toFixed(2)
        return `${decimal * 10}%`;
    }
    
    endRound() {
        console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()} of the questions correctly!`)
    }
}

module.exports = Round;