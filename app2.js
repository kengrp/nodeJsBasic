var fs = require('fs');
var readMe = fs.readFileSync('code.txt','utf8');
console.log(readMe);
fs.writeFileSync('HelloNodeJs.txt',readMe);