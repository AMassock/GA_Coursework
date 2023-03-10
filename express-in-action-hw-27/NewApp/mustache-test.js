const Mustache = require("mustache");


const result = Mustache.render("Hi, {{first}} {{last}}!", {
    first: "Nicholas",
    last: "Cage"
});
console.log(result)