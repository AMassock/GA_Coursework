const Tweet = require('./Tweet.js');
const tweetData = require('./twitter.json');

Tweet.create(tweetData, (err, data) => {
    if(err) {
        console.log(err)
    }
    else{
        console.log(data)
    }
})