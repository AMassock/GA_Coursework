//Prompt #10

//We're trying to make a working counter object. But for some reason, it's not
//working ...

const Counter = {
  total: 0,
}

Counter.increase() {
  this.total++
}

Counter.decrease() {
  this.total--
}

Counter.reset() {
  this.total = 0
}

Counter.increase()
Counter.increase()
Counter.increase()
Counter.increase()
Counter.increase()
Counter.increase()
console.log(Counter.total) // => value = 6
Counter.decrease()
Counter.decrease()
Counter.decrease()
Counter.decrease()
console.log(Counter.total)  // => value = 2
Counter.rest()
console.log(Counter.total) // => value = 0

//A. What is the error message?
//Uncaught SyntaxError: Unexpected token '{' (at 09-prompt.js:10:20)

//B. What is causing the error?
// The functions are being invoked outside of the object using dot notation
// but they're not actually inside the object.

//C. How can you resolve/fix the error?
// Drop "Counter" off the front of each fuction and add a colon after the name

// ```javascript
// const Counter = {
//   total: 0,
  
//   increase: function() {
//     this.total++
//   },

//   decrease: function () {
//     this.total--
//   },

//   reset: function () {
//     this.total = 0
//   }
// }

// Counter.increase()
// Counter.increase()
// Counter.increase()
// Counter.increase()
// Counter.increase()
// Counter.increase()
// console.log(Counter.total) // => value = 6
// Counter.decrease()
// Counter.decrease()
// Counter.decrease()
// Counter.decrease()
// console.log(Counter.total)  // => value = 2
// Counter.reset()
// console.log(Counter.total) // => value = 0
// ```;
