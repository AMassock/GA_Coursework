import mongoose from "../db/connection.js"
const Schema = mongoose.Schema;

const kingdomSchema = new Schema({
    title: String,
    extract: String
});

const Kingdom = mongoose.model("Kingdom", kingdomSchema)
export default Kingdom; 