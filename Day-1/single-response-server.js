const http = require("http");
const server = http.createServer((request,response)=>{
    console.log("Server is Up.");
    response.end("Server working Sucessfully ")
});
const host = "127.0.0.1";
const port = "3000"
server.listen(port,host,error=>{
    if(error) return console.log("Error Occured");

    console.log("Server is listening on "+ host + ":" + port);
})