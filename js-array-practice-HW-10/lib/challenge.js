// Use this array for the first 8 prompts
const gilmoreGirls = [
  "Lorelai Gilmore",
  "Rory Gilmore",
  "Luke Danes",
  "Emily Gilmore",
  "Richard Gilmore",
  "Lane Kim",
  "Paris Geller",
  "Dean Forester",
  "Jess Mariano",
  "Logan Huntzberger",
];

// Prompt 1: Print Emily Gilmore to the console
console.log(gilmoreGirls[3]);

// Prompt 2: Add your own name to the end of the Gilmore Girls array:
gilmoreGirls.push("AJ Massock");
console.log(gilmoreGirls)

// Prompt 3: Write a `for` loop that prints our every character from Gilmore Girls:
for(let i = 0; i < gilmoreGirls.length; i++) {
  console.log(gilmoreGirls[i]);
}

// Prompt 4: Now use the spread operator (`...`) to print out each character from Gilmore Girls:
console.log(...gilmoreGirls);

// Prompt 5: Use a method to remove the first element from the gilmoreGirls array
//gilmoreGirls.shift()
console.log(gilmoreGirls)

// Prompt 6: Print the index of "Paris Geller"
// hint: look up .indexOf
console.log(gilmoreGirls.indexOf("Paris Geller"))

// Prompt 7: Join the array elements together and print them out in a single string
// hint: Look up .join
console.log(gilmoreGirls.join(', '))

// Prompt 8: print a sub array containing just   "Emily Gilmore", "Richard Gilmore", and "Lane Kim"
// hint: look up .slice
sliced = gilmoreGirls.slice(3,6)
console.log(sliced)

// Use this array for the next 6 prompts
const people = [
  {
    name: "John Doe",
    age: 35,
    language: "English",
    country: "America",
  },
  {
    name: "Jane Smith",
    age: 28,
    language: "Spanish",
    country: "Spain",
  },
  {
    name: "Robert Johnson",
    age: 41,
    language: "French",
    country: "France",
  },
  {
    name: "Samantha Williams",
    age: 32,
    language: "German",
    country: "Germany",
  },
];

// Prompt 9: Remove the first object from the `people` array
//people.shift()
console.log(people)

// Prompt 10: Add an object representing yourself to the beginning of the `people` array
people.unshift({
  name: "AJ",
  age: 33,
  language: "English",
  country: "United States",
})
console.log(people)

// Prompt 11: Write a `for` loop that iterates through the `people` array printing out the following introduction for each person:
// "John Doe is 35 years old and speaks English because they're from America."
for(let i = 0; i < people.length; i++) {
  console.log(`${people[i].name} is ${people[i].age} years old and speaks ${people[i].language} because they're from ${people[i].country}`)
}

// Prompt 12: Use JavaScript to print out the oldest person in the above array
// Attempt to compare by passing in a function to the .sort method
// based off https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

const compare = people.sort(function(a, b) {
  let prevIter = a.age;
  let thisIter = b.age;
  
  if (prevIter > thisIter) {
    return -1;
  } else {
    return 1;
  };
});

console.log(`${people[0].name} is the oldest person at ${people[0].age} years old`);

// Prompt 13: Use JavaScript to sum the ages of all the people in the `people` array
let sum = 0

function totalAge() {
  let total = 0
  for(let i = 0; i < people.length; i++) {
    total = total + people[i].age;
  }
  return total
}

console.log(totalAge())

// Prompt 14: Use .sort() to sort the `people` array by age
// hint: look up .sort and how to pass it a function
const compareFn = people.sort(function(a, b) {
  let prevIter = a.age;
  let thisIter = b.age;
  
  if (prevIter > thisIter) {
    return -1;
  } else {
    return 1;
  };
});

console.log(compareFn);