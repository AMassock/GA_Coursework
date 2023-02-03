//Prompt #4

//We're trying to call the `greet` function. But for some reason, it's not working
//...

this.greet();

//**Hint:** What is `this` in the global scope in our browser?

//A. What is the error message?
// 03-prompt.js:6 Uncaught TypeError: this.greet is not a function
// at 03-prompt.js:6:6

//B. What is causing the error?
// `this` is currently referring to window in the global scope and `greet` is not a function
// of `window`.

//C. How can you resolve/fix the error?
// This can be resolved by writting an object that has the greet function defined inside the object
// and invoking the function inside the object

// ```javascript
// hello = {
//     greeting: console.log("hello!"),
//     greet: function(greeting) {
//       this.greet();
//     },
//   }
// ```;