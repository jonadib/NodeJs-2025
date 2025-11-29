const { log } = require('console');
const http = require('http');

http.createServer((req,res)=>{
    res.write("Hello World. My name is Adib\n");
    console.log(req.url);
    if(req.url === '/about'){
        res.write("This is about page\n");
    } else if(req.url === '/contact'){
        res.write("This is contact page\n");
    } else if (req.url === '/'){
        res.write("This is home page\n");
    }else {
        res.write("This is home page\n");
    }
    console.

log(req.method);
res.end("hello from request.js");
}).listen(5900);