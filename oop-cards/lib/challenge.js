/*
 * Define a Card class with the following properties:
 *
 *   - suit (hearts, spades, clubs, diamonds)
 *   - rank (Ace, 2, 3, 4, .. Jack, King, Queen)
 *   - score (1, 2, 3, 4, ... 11, 12, 13)
 *
 * Define a Deck class with the following properties and methods:
 *
 *   - length (the number of cards - should start at 52)
 *   - cards (an array of cards in the deck)
 *   - draw: return a random card from the cards array
 *
 * When you create an instance of your Deck class (i.e. in your constructor),
 * fill in the cards array with 52 instances of your Card class. You can do
 * this with a nested for loop - first loop through an array of all possible
 * suits, then loop through an array of all possible ranks. Inside your inner
 * loop, create an instance of your Card class and push it into the Deck's cards
 * array.
 *
 * Instantiate an instance of your Deck and start drawing random cards!
 */

let suit = ["hearts", "spades", "clubs", "diamonds"];
let rank = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let score = [14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

class Card {
    constructor(suit, rank, score) {
        this.suit = suit;
        this.rank = rank;
        this.score = score;
    }
}

class Deck {
    constructor() {
        this.cards = [];
    }

    buildCards(suit, rank, score) {

        for(let i = 0; i < suit.length; i++) { 
    
            for(let j = 0; j < rank.length; j++) {
                let card = new Card(rank[j], suit[i], score[j]);
    
                this.cards.push(card);
                }
            }
            return this.cards;
        }
    }

    function dealHand(deckOne) {
        let hand = [];
        while(hand.length < 1) {
            hand.push(deckOne.pop());
        }
        return hand
    }

let deckOne = new Deck();
deckOne.buildCards(suit, rank, score)

function shuffleDeck(deckOne) {

    for(let i = 0; i < 850; i++) {
        let posOne = Math.floor(Math.random() * deckOne.length);
        let posTwo = Math.floor(Math.random() * deckOne.length);
        let temp = deckOne[posOne];

        deckOne[posOne] = deckOne[posTwo];
        deckOne[posTwo] = temp;
    }
 }

 shuffleDeck(deckOne.cards);
 console.log(dealHand(deckOne.cards));