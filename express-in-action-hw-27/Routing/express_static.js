const express = require('express');
const path = require('path');
const http = require('http');
const app = express();

const publicPath = path.resolve(__dirname, "static");
const userUploads = path.resolve(__dirname, "routes");

app.use(express.static(publicPath));
app.use(express.static(userUploads));

app.use((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Looks like you didn't find a static file.");
});



app.listen(3000);