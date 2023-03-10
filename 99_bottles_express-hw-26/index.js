import express from "express";
const app = express();

let num_of_bottles = 99;

// Start server
app.listen('1414', () => {
    console.log('Express is running on port 1414');
})

// When a users makes a request to the root route ('/'), they should get a JSON object back with 
// '99 bottles of beer on the wall' and a link to a route to /98
app.get('/', (req, res) => {
    res.json({
        bottles: num_of_bottles,
        message: `${num_of_bottles} bottles of beer on the wall`,
        link: '/98'
    })
})

// When a number is given in the url (i.e. /:number_of_bottles), users should get a JSON object back with:
// '<number> bottles of beer on the wall' where <number> is the value of :number_of_bottles and
// A link to the next route (i.e. <number> minus 1)
app.get('/:num_of_bottles', (req, res) => {
    const num = req.params.num_of_bottles;
    const decrease = num - 1;

    // If there are 0 bottles left, the user should get a JSON object back with:
    // 0 bottles of beer on the wall and,
    // A link back to the top (i.e. 99 bottles of beer on the wall)
    if(num > 0) {
        res.json({
            bottles: num,
            message: `${num} bottles of beer on the wall`,
            link: `/${decrease}`
        })
    } else {
        res.json({
            bottles: num,
            message: `${num} bottles of beer on the wall`,
            link: `/`
        })
    }
})