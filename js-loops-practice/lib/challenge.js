/*
 * PART 1: `while` loops
 */

/*
 * Prompt:
 *
 * Use a while loop to count from 0 to 10. Log each number to the console.
 */

// Solution:
// num = 0
// while (num <= 10) {
//     console.log(num);
//     num++
// }

/*
 * Prompt:
 *
 * Use a while loop to count from 10 to 0. Log each number to the console.
 */

// Solution:
// num = 10
// while (num >= 0) {
//     console.log(num);
//     num--
// }

/*
 * Prompt:
 *
 * Use `prompt()` to write a while loop that will continue to ask the
 * user for the magic number until they enter the value "7".
 */

// Solution:
// let magicNumber = ""
// while (magicNumber !== "7") {
//     magicNumber = prompt("Uh uh uh, that's not the magic number");
// }
// alert("Congrats thats the magic number!")

/*
 * PART 2: `for` loops
 */

/*
 * Prompt:
 *
 * Write a for loop that counts from 0 to 5.
 */

// Solution:
// for (let i = 0; i <= 5; i++) {
//     console.log(i)
// }

/*
 * Prompt:
 *
 * Write a for loop that counts down from 5 to 0.
 */

// Solution:
// for (let i = 5; i >= 0; i--) {
//     console.log(i)
// }

/*
 * Prompt:
 *
 * Write a for loop that counts from 0 to 10 in increments of 2.
 */

/*
 * Prompt:
 *
 * Write a for loop that counts from -5 to 5, printing each number to the
 * console.
 */

// Solution:
// for (let i = -5; i <=5; i++) {
//     console.log(i)
// }
/*
 * Prompt:
 *
 * Create a variable called sum (make sure sum is defined outside of your loop).
 * Create a loop that counts from 1 to 10, incrementing by 1. This time, rather
 * than printing i to the console, add i to sum. After your loop, print the
 * value of sum to the console.
 *
 * Reflect: What did we just do here?
 */

// Solution:
// let sum = 0
// for (let i = 1; i <=10; i++) {
//     sum += i;
// }
// console.log(sum)

/*
 * Prompt:
 *
 * We can write any valid JavaScript inside the block of our loop (the part
 * between the curly braces). Let's put a conditional in there!
 *
 * Create a loop that counts from 0 to 10. Inside your loop, write a conditional
 * that matches these requirements:
 *
 *    - if the value of i is even, print out "i is event"
 *    - otherwise, print out "i is odd"
 */

// Solution:
// for (let i = 0; i <= 10; i++) {
//     if ((i % 2) === 0) {
//         console.log(`${i} is even`)
//     } else {
//         console.log(`${i} is odd`)
//     }
// }

/*
 * PART 3: Iterating through Arrays
 */

/*
 * Prompt:
 *
 * Write a for loop that prints out each item in the below array.
 */

// Solution:
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
for (let i = 0; i < letters.length; i++) {
    console.log(letters[i]);
}

/*
 * Prompt:
 *
 * Write a for loop that sums the values in the below array.
 */

// Solution:
let sum = 0
const numbers = [23, 19, 23, 52, 12];
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
}
console.log(sum)

/*
 * Prompt:
 *
 * Write a for loop that doubles each value in the following array.
 */

// let result = 0
// const moreNumbers = [12, 23, 34, 45];
// for (let i = 0; i < moreNumbers.length; i++) {
//     result = moreNumbers[i] * 2;
//     console.log(result)
// }

/*
 * Prompt:
 *
 * Write a for loop that sets a variable to the largest number in the following array
 */

// Solution:
let largest = 0
const moreNumbers = [12, 45, 23, 999, 7];
 
for (let i = largest; i < moreNumbers.length; i++) {
    if (moreNumbers[i] > largest) {
        largest = moreNumbers[i]
    } 
}
console.log(`${largest} is the largest number in the array`)
