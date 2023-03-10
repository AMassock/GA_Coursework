// In 00--seed-collections.js, map throught the monarch raw data 
// (from the JSON) to create a new array of objects that only includes 
// the properties needed in the Monarch model.
import mongoose from "mongoose";

import Monarch from "../../models/Monarch.js";
import Kingdom from "../../models/Kingdom.js"; 

import monarchRaw from "../data/monarchRaw.json" assert { type: "json" };
import kingdomRaw from "../data/kingdomRaw.json" assert { type: "json" };


let monarchData = monarchRaw.map(monarch => {
    return{
        name: monarch.name, 
        house: monarch.house, 
        start: monarch.start,
        end: monarch.end, 
        endReason: monarch.endReason, 
        kingdom: monarch.kingdom
    }
})


// console.log(monarchData);

let kingdomData = kingdomRaw.map(kingdom => {
    return{
        title: kingdom.title,
        extract: kingdom.extract
    }
})

console.log(kingdomData);

//Still in 00--seed-collections.js, use the new arrays of monarch and kingdom 
//data to seed their respective collections in your local database.

Monarch.insertMany(monarchData); 
Kingdom.insertMany(kingdomData); 