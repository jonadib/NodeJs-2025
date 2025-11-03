const { log } = require('console');
const http = require('http');

http.createServer((req,res)=>{
    res.write("Hello World. My name is Adib\n");
log(req.method);
res.end("hello from request.js");
}).listen(5700);