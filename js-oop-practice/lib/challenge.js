/*
 * Instructions:
 * Work through the following prompts. Prompts marked with "We Do", we will work
 * on together, as a class; prompts marked with "You Do", you will be given time
 * to work through on your own.
 *
 * Tip: comment out your solution to each prompt before moving on to the next
 * one! This will keep your console clear.
 */

/*
 * Prompt 1: We Do
 *
 * Define a class for a Car. Your Car class should have the following
 * properties:
 *
 *    - make
 *    - model
 *    - color
 *
 * Your Car class should have the following methods:
 *
 *    - drive: print 'vroom vroom' to the console
 *
 * Once you create your class definition create two instances.
 */
class Car {
    constructor(make, model, color) {
        this.make = make,
        this.model = model,
        this.color = color
    }

    drive() {
        console.log("vroom vroom");
    }
}

const sti = new Car("Subaru", "STI", "White");
const skyline = new Car("Nissan", "Skyline GTR", "Midnight Purple");

/*
 * Prompt 2: You Do
 *
 * Define a class for your favorite animal (dog, cat, giraffe, etc). Give your
 * class 3 attributes and two methods.
 *
 * After you've defined your class, create 3 instances.
 */
class Dog {
    constructor(breed, size, friendly) {
        this.breed = breed,
        this.size = size,
        this.friendly = friendly
    }
    wag() {
        console.log(`${this.breed} is wagging it's tail`);
    }

    isFriendly() {
        if(this.friendly === true) {
            console.log(`This ${this.breed} is friendly! please pet!`);
        } else {
            console.log(`This ${this.breed} is NOT friendly, please back away slowly`);
        }
    }
}

const germanShephard = new Dog("German Shephard", "Large", true);
germanShephard.wag();
germanShephard.isFriendly();

const chihuahua = new Dog("chihuahua", "small", false);
chihuahua.wag();
chihuahua.isFriendly();

/*
 * Prompt 3: We Do
 *
 * We're going to modify our Car class from the previous prompt and extend it to
 * create a Toyota class:
 *
 *   - Make a Car class with make, model, and color properties.
 *   - Extend your Car class to create a Toyota class. The make property will always
 *     be 'Toyota'. Add a drive method to your Toyota class.
 *
 * Make an instance of your Toyota class.
 *
 * You Do:
 *
 * Once we've completed the above, work through the following changes to your
 * Car and Toyota classes:
 *
 *   - move the color property to your Toyota class
 *   - move the drive method to your Car class
 *   - add a property to your Toyota class
 *   - add a property to your Car class and "fill it in" for your Toyota class
 */
class CarTwo {
    constructor(make, model, doors) {
        this.make = make,
        this.model = model,
        this.doors = doors
    }

    drive() {
        console.log("vroom vroom");
    }
}

class Toyota extends CarTwo {
    constructor(model, color, miles, doors) {
        super("Toyota", color, doors)
            this.color = color,
            this.miles = miles
    }
}

const camry = new Toyota("Camry", "Beige", "210000", 3);

/*
 * Prompt 4: You Do
 *
 * Define and Animal class with the following properties and methods:
 *
 *   - group (Invertebrates, Fish, Amphibians, Reptiles, Birds, and Mammals)
 *   - eat: log "yum yum" to the console
 *   - sleep: log "zzzzz" to the console
 *
 * Modify your animal from the previous prompt so that it extends your new
 * Animal class.
 *
 * Create an instance of your animal class (the one that extends the Animal
 * class).
 */
class Animal {
    constructor(group) {
        this.group = group
    }
    eat () {
        console.log("yum yum");
    }

    sleep() {
        console.log("zzzzz");
    }
}

class Snek extends Animal {
    constructor(type) {
        super("Invertebrate", type)
       
        this.type = type
    }
}

const python = new Snek("Python");

class Corgi extends Dog {
    constructor(color, friendly) {
        super("Welsh Corgi", color, friendly)
        this.color = color
    }
}

const corgi = new Corgi("beige", true);
/*
 * Prompt 5: You Do
 *
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
