//Prompt #2

//We're trying to log the birds with names that are more than 4 characters long.
//But for some reason, it's not working ...

let birds = ['Eagle', 'Falcon', 'Duck', 'Turkey']

birds.forEach(function(bird) {
  if (bird.length > 4) {
    console.log(bird)
}

//A. What is the error message?
// Uncaught SyntaxError: Unexpected end of input (at 01-prompt.js:19:1)

//B. What is causing the error?
// Missing closing curly brace and closing perentheis at the end of the forEach statement. The if statment is closed

//C. How can you resolve/fix the error?
// Add closing curly brace and closing perentheis

// ```javascript
// birds.forEach(function(bird) {
//   if (bird.length > 4) {
//     console.log(bird)
//   }
// })
// ```;