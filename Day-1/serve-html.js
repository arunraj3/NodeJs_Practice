const http = require("http");
const fs = require("fs");



http.createServer((req,res)=>{
    console.log("Server Created");

    res.writeHead(200,{"Context-Type" : "text/html"});

    fs.readFile("index.html",(err,data)=>{
        if(err) throw err;
        res.write(data);
        res.end();
    })
}).listen(3000)