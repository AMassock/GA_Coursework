/*
 * Before you start, add this javascript file in a script tag in index.html.
 *
 * Tip: Comment out your solution to a prompt before moving on to the next one.
 * It will keep your console clean and easy to read!
 */

/*
 * Prompt 1:
 *
 * Write a function, using the function keyword. Call the function sayHello.
 * When invoked, sayHello should print the string 'hello world'.
 */

function sayHello() {
  console.log("hello world");
}

sayHello()

/*
 * Prompt 2:
 *
 * Create a function called print. Print should take a parameter called message.
 * When invoked and passed a string, print should `console.log` the message.
 */

function print(message) {
  console.log(message);
}

print("this is a test message")

/*
 * Prompt 3:
 *
 * Create a function called printMessage. This function should take a parameter
 * called message. When invoked and passed a string, print 'Today's message
 * is:', followed by the message passed in as a parameter.
 */

function printMessage(message) {
  console.log(`Today's message is: ${message}`);
}

printMessage("It's playoffs")

/*
 * Prompt 4:
 *
 * Fix the following function:
 */

/** Starter Code */
function neededName (a) {
  return a ** 2
}

neededName (2)

/*
 * Prompt 5:
 *
 * Create a function called reverseMessage. This function should take
 * a parameter called message. When invoked and passed a string, print the
 * string in reverse. (hint: look up some ways of doing this.)
 */

function reverseMessage (message) {
   console.log(message.split("").reverse().join(""));
}

reverseMessage("to be reversed")

/*
 * Prompt 6:
 *
 * Create a function called multiply that takes two parameters: a and b. When
 * invoked, multiply a times b. If b an argument is not passed in for b, then
 * double a (i.e. multiply it by two).
 *
 * Hint: use a default parameter.
 */

let multiply = function (a, b = 2) {
  return a * b;
}

console.log(multiply(2))

/*
 * Prompt 7:
 *
 * Fix the following code. HINT: Think Objects :)
 */

/** Starter Code */
function makePerson(firstname, lastname) {
  firstname: firstname;
  lastname: lastname;

  return `${firstname} ${lastname}`
}

const zakk = makePerson('Zakk', 'F')
const jimmy = makePerson('Jimmy', 'B')


/*
 * Prompt 8:
 *
 * Write a function that returns an object. The object can be anything.
 */

function objectReturn(title) {
  let obj = {
    fname: 'AJ',
    lname: 'Massock',
    age: 33,
    occupation: title
  }

//  return `My name is ${this.fname} ${this.lname}, I am ${this.age} years old and am currently working as a ${this.occupation}`
return obj
}

objectReturn( )

/*
 * Prompt 9:
 *
 * Write a function that returns an array. The array can be of anything.
 */

function arrayReturn() {
  let array = [1,2,3,4,5]

  return array
}



/*
 * Prompt 10:
 *
 * Write a function that, when called, adds a number passed in as a parameter to
 * the sum variable below. Invoke your method a few times and then print the sum
 */

/** Starter Code */
let sum = 0

function addNum(num) {
  sum += num;
}

addNum(1);
addNum(3);
addNum(19);

console.log(sum);


/*
 * Prompt 11:
 *
 * Write a function that takes an array of number values and returns the sum.
 * Test it out to make sure it works.
 */

function returnSum(arr) {
  for (let i = 0; i < arr.length; i++) {
    sum = arr[i] + arr[i];
    return sum
  }
}

testArray = [1,2,3,4]
returnSum(testArray)

/*
 * Prompt 12:
 *
 * Write a function that takes a string and returns an array of every word in
 * the string.
 */

function toArray(str) {
  retArray = str.split("")
  return retArray
}

console.log(toArray("string"))

/*
 * Prompt 13:
 *
 * How can you write a function so that this expression works? It should print
 * the string "this works!"
 */

/** Starter Code */
function testFunc() {
  function innerFunc() {
    console.log("this works!");
    }
    return innerFunc
}

testFunc()()

/*
 * Prompt 14:
 *
 * Write a function that takes the add function below as a parameter and invokes
 * it, passing in 2 and 4.
 */

/** Starter Code */
function add(a, b) {
  return a + b
}

function take(c) {
  return c
}

console.log(take(add(2,4)))

/*
 * Prompt 15:
 *
 * Write a function that returns another function. Have the inner function print
 * the string "hello world"
 */

function outterFunct() {
  function innerFunct() {
    return "hello world";
  }
  return innerFunct()
}

console.log(outterFunct())