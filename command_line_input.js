const http =require("http");
const arg =process.argv;
const port=arg[];

http.createServer((req,res)=>{
    res.write("Hello World. My name is Adib\n");
    res.end("hello from command_line_input.js");
}).listen(port);
console.log(`Server is running at http://localhost:${port}`);