
var express = require("express");  
var morgan = require("morgan")
var path = require("path");
var fs = require("fs");
var app = express();   

app.use(morgan("short"))

app.use((req, res, next) => {
    console.log("Request IP: " + req.url);               
    console.log("Request date: " + new Date());  
    next();     
}); 

// app.use((req, res, next) => {
//     var filePath = path.join(__dirname, "static", req.url);  
//     fs.exists(filePath, (exists) => {                      
//       if(exists){                                             
//         res.sendFile(filePath);                                 
//       }else{                                                  
//         next();                                                 
//       } 
//     });
//   });

// var staticPath = path.join(__dirname, "Static")

// app.use(express.static(staticPath))

// app.use((req, res) => {   
//     res.status(404);             
//     res.send("File not found!"); 
// });

var filePath = path.join(__dirname, "./image.png")

app.use((req, res, next) => {
    res.sendFile(filePath, (err) => {
        if(err){
            console.log("File failed to send.")
            next(new Error("Error sending file!"))
        }else{
            console.log("File sent!")
        }
    })
})

app.use((err, req, res, next) => {  
    console.error(err)                  
    next(err)                            
});

app.use((err, rec, res, next) => {
    res.status(500)
    res.send("Internal server error.")
})

// app.use((req, res) => {   
//     res.status(404);             
//     res.send("File not found!"); 
// });

app.listen(3000, () => {               
    console.log("App started on port 3000");  
});