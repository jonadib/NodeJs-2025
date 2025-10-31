const path = require('node:path');

const a = path.basename('C:\\temp\\myfile.html');
// Returns: 'C:\\temp\\myfile.html'
console.log(a);
const b= path.dirname('/foo/bar/baz/asdf/quux');
// Returns: '/foo/bar/baz/asdf'
console.log(b);
const c=path.extname(__filename);
console.log(c); // Returns: '.js'
const d=path.parse(__filename);
console.log(d);