//Prompt #3

//We're trying to concatenate these two strings together. But for some reasons,
//it's not working ...

let greeting = "hello";
greeting.push(" world");
console.log(greeting);

//A. What is the error message?
// Uncaught SyntaxError: Identifier 'greeting' has already been declared (at 02-prompt.js:1:1)

//B. What is causing the error?
// Push is not a string method. Push is a method for arrays

//C. How can you resolve/fix the error?
// Change greeting.push to greeting += " world"

// ```javascript
// let greeting = "hello";
// greeting += " world";
// console.log(greeting);
// ```;