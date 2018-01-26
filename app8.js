var fs = require('fs');
var reader = fs.createReadStream('code.txt');
var writerStream = fs.createWriteStream('file1.txt');
reader.pipe(writerStream);