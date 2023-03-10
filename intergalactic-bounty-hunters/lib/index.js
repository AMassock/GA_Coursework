const Bounty = require('./models/Bounty.js');
/*
 * Instructions:
 *
 * For each prompt below, write a query that completes the task described in
 * the prompt.
 *
 * Tip: comment out your answers before moving on to the next prompt.
 *
 */

// Create a new Bounty with the following values:
// - name: Han Solo,
// - wanted for:  Owing Money
// - client: Jabba the Hut
// - reward: 10000000
// - ship: Millennium Falcon
// - hunters: Bobba Fett, Dengar, IG-88, Zuckus, Greedo, Bossk, 4-Lom
// - captured: false

        // Prompt 1 Solution:
        // Bounty.create({
        //     "name": "Han Solo",
        //     "wantedFor": "Owing Money",
        //     "client": "Jabba the Hut",
        //     "reward": 10000000,
        //     "ship": "Millennium Falcon",
        //     "hunters": ["Bobba Fett", "Dengar", "IG-88", "Zuckus", "Greedo", "Bossk", "4-Lom"],
        //     "captured": false
        // })


// Find all bounties in the database

// Prompt 2 Solution:
    // Bounty.find({}, (err, data) => {
    //     if(err) {
    //         console.log(err);
    //     } else {
    //         console.log(data);
    //     }
    // })

// Find all bounties where the client is 'Time Bureau'

// Prompt 3 Solution:
// const filter = {"client": "Time Bureau"};
// Bounty.find(filter, (err, data) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data)
//     }
// });



// Find all bounties that have been captured
// Find all bounties with a reward greater than 100,000
// Starbuck and the Captain have come to an understanding. Remove her record.
// Update Sara Lance's name to be her super hero alias, 'White Canary'
// Update Rocket's ship to be 'The Milano 2'
const user_id = "63fa73c8a6e4a2b076ce53e9"
Bounty.findByIdAndUpdate(user_id, { ship: "The Milano 2"}, (err, data) => {
    if (err){
        console.log(err)
    }
    else{
        console.log("Updated ship: ", data);
    }
})
