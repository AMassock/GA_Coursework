const Person = require('./Person.js');
const penPal = require('./penpals.json');

Person.create(penPal, (err, data) => {
    if(err) {
        console.log(err)
    }
    else{
        console.log(data)
    }
})