import mongoose from "../db/connection.js";
import Character from "./Characters.js";

const House = new mongoose.Schema({
    name: String,
    mascot: String,
    headOfHouse: String,
    houseGhost: String,
    founder: String,
    school: String,
    members: [{
        type: mongoose.ObjectId,
        ref: Character
    }],
    values: [String],
    colors: [String]
})

// module.exports = mongoose.model("House", House);
export default mongoose.model("House", House)