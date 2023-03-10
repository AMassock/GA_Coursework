const mongoose = require('./connection.js');
const Schema = mongoose.Schema;

const Tweet = new Schema({
    name: String,
    username: String,
    tweets: [
        {
            content: String,
            favorites: Number,
            comments: [
                {
                    username: String,
                    content: String
                }
            ]
        }
    ]
});

module.exports = mongoose.model("Tweet", Tweet);