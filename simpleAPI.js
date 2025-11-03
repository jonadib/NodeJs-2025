const http = require('http');

const userData=[
    {
        name:"Adib",
        age:24,
        email:"muja@gmail.com"

    },
      {
        name:"Jon Doe",
        age:25,
        email:"jon@gmail.com"

    },
    {
        name:"Antor",
        age:25,
        email:"antor@gmail.com"

    },
     {
        name:"Antora",
        age:26,
        email:"antora@gmail.com"

    }
];
http.createServer((req,res)=>{
    res.setHeader("Content-Type",'application/JSON');
    res.write(JSON.stringify(userData));
    res.end();

}).listen(6100 ,()=>{
    console.log("server is running on port 6100");
});