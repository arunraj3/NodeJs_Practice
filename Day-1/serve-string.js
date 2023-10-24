const http = require("http");
let i = 0;
const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.write("Server provided with String as Response");
  response.end();
});

const host = "127.0.0.1";
const port = "3000";

server.listen(port, host, (error) => {
  if (error) return console.log("Error Occured!....");

  console.log("Server is listening at " + host + ":" + port);
});
console.log(`Request ${i++}`);
