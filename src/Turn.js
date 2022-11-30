class Turn {
    constructor(guess, card) {
        this.guess = guess;
        this.card = card;
        this.correct;
    }
    returnGuess() {
        return this.guess;
    }
    returnCard() {
        return this.card;
    }
    evaluateGuess() {
        let correctNumber = this.card.answers.indexOf(this.card.answers.find(answer => answer === this.card.correctAnswer)) + 1;
        if(this.guess === correctNumber) {
            this.correct = true;
            return this.correct;
        }
        this.correct = false; 
        return this.correct;
    }
    giveFeedback() {
        if(this.correct) {
            return 'correct!';
        }
        return 'incorrect!';
    }

}

module.exports = Turn;