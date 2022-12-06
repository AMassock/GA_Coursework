/*
 * Complete the prompts listed in the Readme below
 */
console.log("hello world");

// Bullet 1
// - Console logs "hello"
function hello () {
    console.log("hello");
}

// hello();

// Bullet 2
// - Console logs "world"
function world () {
    console.log("world");
}

//world();

// Bullet 3
// - Takes a parameter called "name" and console logs it
function logName(name) {
    console.log(name);
}

//logName('AJ');

// Bullet 4
// - Takes a parameter called "name" and console logs "hello" + name
function announceName(name) {
    console.log(`hello ${name}`);
}

//announceName('AJ');

// Bullet 5
// - Takes a parameter called "number" and multiplies it by itself, then console logs the result
let multi = function(number) {
    console.log(number * number);
}

//multi(13);

// Bullet 6
// - Take a number as a parameter and return itself squared.
function squared(number) {
    return number ** 2;
}

//console.log(squared(12));

// Bullet 7
// - Have 3 optional parameters, all numbers. Add all the numbers together. 
// If the function is called without passing any arugments (ie: the numbers), simply return 10.
function add(a = 4, b = 4, c = 2) {
    return a + b + c;
}

//console.log(add());

// Bullet 8
// - Take a number and add some amount of zeroes to the end, 
// returning it (make sure you return a number, not a string)
let zeros = function(num) {
    return parseFloat(num + '00000');
}

// console.log(zeros(12));
// console.log(typeof zeros(12));

// Bullet 9
// - return a function that console logs 'hello world' 
// (yes you can write functions inside functions!)
function hw() {
    function results() {
        console.log(`hello world`);
    }
    return results;
}

//hw();

// Bullet 10
// - Declare a variable, assigning a string to it. 
// Then write a function that modifies that string without returning anything.
let anything = "anything";

function modify() {
    anything = "modified";
}

modify();

//console.log(anything);

// Bullet 11
// - Declare a variable, assigning an array that contains 5 numbers to it. 
// Then write a function that removes the first item from the array.
const numbers = [1, 2, 3, 4, 5];

function removeFirst() {
    numbers.shift();
    return numbers;
}

//console.log(removeFirst());

// Bullet 12
// - Write two functions that do the same thing, but one returns the value and the
// other modifies a variable with side effects.
// - The functions should both add the string "flabbergasted" on to the end of an
// array

function funOne() {
    numbers.pop();
    numbers.push("flabbergasted");
    return numbers;
}

let funTwo = function () {
    numbers.pop();
    numbers.push("flabbergasted");
}
funTwo();

console.log(funOne());
console.log(numbers);