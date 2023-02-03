//Prompt #1

//We want an alert to appear in the browser that says "Hello World". But for some
//reason, it's not working ...

alert(greeting);

//A. What is the error message?
// 00-prompt.js:6 Uncaught ReferenceError: greeting is not defined
//     at 00-prompt.js:6:7

//B. What is causing the error?
//Greeting is not defined so when passed into "alert" JS isn't sure what it's supposed to do

//C. How can you resolve/fix the error?
// create a "greeting" variable

// ```javascript
// let greeting = "Hello World"
// ```;
