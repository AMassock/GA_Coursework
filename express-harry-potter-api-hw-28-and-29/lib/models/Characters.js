import mongoose from "../db/connection.js";

const Character = new mongoose.Schema({
    _id: String,
    name: String,
    role: String,
    house: String,
    school: String,
    __v: Number,
    ministryOfMagic: Boolean,
    orderOfThePhoenix: Boolean,
    dumbledoresArmy: Boolean,
    deathEater: Boolean,
    bloodStatus: String,
    species: String
})

// module.exports = mongoose.model("House", House);
export default mongoose.model("Character", Character)