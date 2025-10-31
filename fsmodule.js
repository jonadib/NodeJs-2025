const fs = require('fs');

// fs.readFile('file.txt', 'utf8', (err, data) => { //file read async
//     console.log(err,data);
// });

fs.writeFile('file2.txt',"This is file2.txt created by fs module", (er) => { //file write async
    console.log("Write successfully!")
 }) //file write async

// const a= fs.readFileSync('index.js'); //read file sync
//     console.log(a.toString());

const b=fs.writeFileSync('file3.txt',"This is file3.txt created by fs module sync"); //write file sync
    console.log("Write file3.txt successfully!")  
    //console.log(b);  

console.log("This is fsmodule.js")