var url = require("url");
var parsedURL = url.parse("https://git.generalassemb.ly/rook/express-in-action-hw-27");  

console.log('protocol:', parsedURL.protocol);  // "http:"
console.log('host:', parsedURL.host);      // "www.example.com"
console.log('query:', parsedURL.query);     // "name=barry"