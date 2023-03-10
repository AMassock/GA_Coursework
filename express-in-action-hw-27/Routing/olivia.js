var express = require("express");
var app = express();

app.get("/olivia", (req, res) => {  
  res.send("Welcome to Olivia's homepage!");
});

// app.get("/users/:userid", (req, res) => {  
//     const userid = parseInt(req.params.userid, 10);
//     console.log(userid);
//     res.send({userid});
//   });

// app.get(/^\/users\/(\d+)$/, (req, res) => {  
//     const userid = parseInt(req.params[0], 10);
//     console.log(userid);
//     res.send({userid});
//   });

app.get(/^\/users\/(\d+) - (\d+)$/, (req, res) => {  
    const startId = parseInt(req.params[0], 10);
    const endId = parseInt(req.params[1], 10)
    console.log(startId, endId);
    res.send({startId, endId});
  });

app.use((req, res) => {  
  res.status(404).send("Page not found!");
});

app.listen(3000); 