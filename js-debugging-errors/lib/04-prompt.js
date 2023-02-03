//Prompt #5

//We're trying to print Bob's name to the console. But for some reason, it's not
//working ...

var bob;
console.log(bob.name);

//A. What is the error message?
// Uncaught TypeError: Cannot read properties of undefined (reading 'name')
//     at 04-prompt.js:7:17

//B. What is causing the error?
// `bob` is not an object containing the key `name`

//C. How can you resolve/fix the error?
// Turn `bob` into an object that has a key of `name` with a value.

// ```javascript
// var bob = {
//     name: "bob",
//   };
//   console.log(bob.name);
// ```;

