//Prompt #8

//We're trying to make it so that when we call the `greet` method of `person`, an
//alert appears with the person's full name. But for some reason, it's not working
// ...

let person = {
  firstName: "Bob",
  lastName: "Seger",
  greet: function() {
    function fullName() {
      return `${this.firstName} ${this.lastName}`;
    }

    alert(fullName());
  }
};

person.greet();

//A. What is the error message?
// Uncaught SyntaxError: Unexpected token '...' (at 07-prompt.js:5:1)
// after fixing to get the error to troubleshoot it's "undefined undefined"

//B. What is causing the error?
// inside the "fullName" function "this" is referring to the fullName function
// not the object person that we're expecting

//C. How can you resolve/fix the error?
// change "this." to "person."

// ```javascript
// let person = {
//   firstName: "Bob",
//   lastName: "Seger",
//   greet: function(firstName, lastName) {
//     function fullName() {
//       return `${person.firstName} ${person.lastName}`;
//     }

//     alert(fullName());
//   }
// };

// person.greet();
// ```;