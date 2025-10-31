const http = require('http');
http.createServer((req , res) =>{
    res.write("This is server\n");
    res.end("hello from server 1"); // we have to end the response
}).listen(4800)

http.createServer((req , res) =>{
    res.write("This is server 2\n");
    res.end("hello from server 2"); // we have to end the response
}).listen(4900)

console.log("Server is running on port 4800 and 4900");

