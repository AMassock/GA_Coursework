//Prompt #7

//We're trying to print Bob's first name to the console. But for some reason, it's
//not working.

const bob = {
  profile: {
    name: {
      firstName: "Bob",
      lastName: "Seger"
    },
    age: 73,
    dateOfBirth: {
      month: "May",
      day: 6,
      year: 1945
    },
    career: "Singer"
  }
};

console.log(bob.name.first_name);

//A. What is the error message?
// Uncaught SyntaxError: Identifier 'bob' has already been declared (at 06-prompt.js:1:1)

//B. What is causing the error?
// Two things. "name" is inside the "profile" object and we are using "bob.name" instead
// of "bob.profile.name". Also the key is "firstName" and not "first_name"

//C. How can you resolve/fix the error?
// Change the console log to "bob.profile.name.firstName"

```javascript
console.log(bob.profile.name.firstName);
```;
