//Prompt #11

//We're trying to print the string `"hello world"`. But for some reason, it's not
//working ...

let obj = {
  oompa: [
    {
      loompa: {
        doopati: [
          [
            {
              do: ["good by cruel world", "hello world", "goodnight moon"]
            }
          ]
        ]
      }
    }
  ]
};

let message = obj[0].oompa.loompa[0].doopati.do[2];
console.log(message);

//A. What is the error message?
// Uncaught TypeError: Cannot read properties of undefined (reading 'oompa')
//  at 10-prompt.js:22:22

//B. What is causing the error?
// Referencing things in the message variable is not stepping in correctly

//C. How can you resolve/fix the error?
// "obj" is an object and not an array so remove the "[0]". oompa is an array
// so we must add "[0]" to reference the first item in the array which is "loompa"
// "loompa" is another object so remove the "[0]". "doopati" is an array with a
// nested array inside so it must be "doopati[0][0]" to get to the second item in 
// the array. "do" is an array but "hello world" is at index 1

// ```javascript
// let obj = {
//   oompa: [
//     {
//       loompa: {
//         doopati: [ [ {
//           do: ["good by cruel world", "hello world", "goodnight moon"]
//         } ] ]
//       }
//     }
//   ]
// };

// let message = obj.oompa[0].loompa.doopati[0][0].do[1];
// console.log(message);
// ```;
