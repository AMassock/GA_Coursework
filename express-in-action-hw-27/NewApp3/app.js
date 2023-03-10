const express = require("express")
const path = require("path")

const app = express()

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index", {
        message: "Hey y'all! This is my webpage."
    })
})

app.listen(3000)