const mongoose = require('./connection.js');
const Schema = mongoose.Schema;

const Person = new Schema({
  to: String,
  from: String,
  message: String,
  sentOn: Date
});

module.exports = mongoose.model("Person", Person);