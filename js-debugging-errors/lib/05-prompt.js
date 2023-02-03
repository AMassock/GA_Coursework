//Prompt #6

//We're trying to print the message to the console. But for some reason, it's not
//working...

let forSale = "sea shells"
let message = `She "sells' ${forSale} by \`sea' sea shore'
console.log(message)

//A. What is the error message?
//05-prompt.js:16 Uncaught SyntaxError: Unexpected end of input (at 05-prompt.js:16:1)

//B. What is causing the error?
// "\`sea'" is closing the quote from the beginning and causing strings to remain open

//C. How can you resolve/fix the error?
// Remove un-needed quotes and single quotes

// ```javascript
// let forSale = "sea shells"
// let message = `She sells ${forSale} by \sea sea shore`
// console.log(message)
// ```;