const http = require("http")

// function requestHandler(req, res) {
//     console.log("In comes a request to: " + req.url);
//     res.end("Hello, World!")
// }

function requestHandler(req, res) {
    if (req.url === "/") {
        res.end("Welcome to the homepage!")
    }
    else if(req.url === "/about") {
        res.end("Welcome to the About page!")
    }
    else {
        res.end("Error! File not found.")
    }
}

const server = http.createServer(requestHandler)

server.listen(3000)
