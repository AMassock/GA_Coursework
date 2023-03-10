var express = require("express")
var logger = require("morgan")
var path = require("path")
var http = require("http")
var app = express()

// app.use(logger("short"))

// app.use((req, res, next) => {
//     console.log("In comes a " + req.method + " to " + req.url)
//     next()
// })

// app.use((req, res, next) => {
//     var minute = (new Date()).getMinutes()
//     if((minute % 2) === 0){
//         next()
//     }else{
//         res.statusCode = 403
//         res.end("Not authorized.")
//     }
// })

// app.use((req, res) => {
//     res.end("secret info: the password is 'swordfish'!")
// })

// app.use((req, res) => {
//     res.writeHead(200, {"Content-Type": "text/plain"})
//     res.end("Hello, World!")
// })

const EVIL_IP = "192.103.50.101";

app.use((req, res, next) => {
    console.log(req.ip);
    if(req.ip === EVIL_IP) {
        res.status(401).send("Not Allowed!")
    } else {
        next();
    }
})

var publicPath = path.resolve(__dirname, "Public")
app.use(express.static(publicPath))

// app.use((req, res) => {
//     res.writeHead(200, {"Content-Type": "text/plain"})
//     res.end("Looks like you didn't find a static field.")
// })

app.get("/", (req, res) => {
    // res.end("Welcome to my homepage!")
    res.redirect("/hello/world")
});

app.get("/about", (req, res) => {
    res.end("Welcome to the about page!")
});

app.get("/weather", (req, res) => {
    res.end("The current weather is NICE.")
});

app.get("/hello/:who",(req, res) => {
    res.end("hello, " + req.params.who + ".");
})

app.use((req, res) => {
    res.statusCode = 404;
    res.end("404!")
})

http.createServer(app).listen(3000)