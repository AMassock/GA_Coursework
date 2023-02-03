//Prompt #9

//We're trying to implement the [Fibonacci Sequence](https://en.wikipedia.org/wiki/Fibonacci_number). But for some reason,
//it's not working ...

//**Note:** The commented out code is part of the prompt. It represents code we've tried to implement to complete the function, and we may or may not need all or some of the commented out code in the final solution.

function createSequence( max ) {
  let sequence = [1, 1]
  // a = 1
  // b = 1

  for (let i = 2; i < max; i++) {
  let a = sequence[i - 1]
  let b = sequence[i - 2]
  sequence.push(a + b)

  // while (i <= max) {
  //    var a = 1, b = 1
  // }
  // }
  return sequence
}

let sequence = createSequence(20)
console.log(sequence)

//A. What is the error message?
// 08-prompt.js:25 Uncaught SyntaxError: Identifier 'sequence' has already been declared (at 08-prompt.js:25:5)

//B. What is causing the error?
// missing closing curly brace for the "createSequence" function and "return" is inside the for loop


//C. How can you resolve/fix the error?
// Add closing curly brace above "return sequence"

// ```javascript
// function createSequence( max ) {
//   let sequence = [1, 1]
//   // a = 1
//   // b = 1

//   for (let i = 2; i < max; i++) {
//   let a = sequence[i - 1]
//   let b = sequence[i - 2]
//   sequence.push(a + b)

//   // while (i <= max) {
//   //    var a = 1, b = 1
//   // }
//   // }
// }
//     return sequence
// }

// let sequence = createSequence(20)
// console.log(sequence)
// ```;