//import monarchRaw from "./db/data/monarchRaw.json"
import mongoose from "../db/connection.js"

const monarchSchema = new mongoose.Schema ({
    name: String, 
    house: String, 
    start: String,
    end: String, 
    endReason: String, 
    kingdom: String
})

const Monarch = mongoose.model("Monarch", monarchSchema)

export default Monarch 