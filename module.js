const os = require('os');

// console.log(os.freemem())
// console.log(os.totalmem())
// console.log(os.homedir())
// console.log(os.hostname())
// console.log(os.platform())
// console.log(os.arch())
// console.log(os.tmpdir())    
// console.log(os.type())
// console.log(os.uptime())
// console.log(os.cpus())
// console.log(os.userInfo())
// console.log(os.release())
// console.log(os.networkInterfaces())

   console.log( os.hostname())

   const fs = require('fs');
const { log } = require('console');
   fs.writeFileSync('osinfo.txt',`The hostname of this OS is ${os.hostname()}`)
console.log(process .cwd())
log(process .pid)
