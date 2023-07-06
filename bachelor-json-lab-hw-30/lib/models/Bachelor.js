import mongoose from '../db/connection.js'
const Schema = mongoose.Schema

const Bachelor = new Schema({
  name: String,
  year: Number,
  winner: String,
  stillTogether: Boolean
})

export default mongoose.model("Bachelor", Bachelor)
