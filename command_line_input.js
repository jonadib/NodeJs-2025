const {console} =require("console");
const http =require("http");
const port =process.env.port || 3000;
ç

http.createServer((req,res)=>{
    console.log(req.url);
    res.write("Hello World. My name is Adib\n");
    res.end("hello from command_line_input.js");
}).listen(port);
console.log(`Server is running at http://localhost:${port}`);