var fs = require('fs');
var data = 'kongruksiam tutorial nodejs express mongodb angularjs';
var writerStream = fs.createWriteStream('output.txt');
writerStream.write(data,'utf8');
writerStream.end();
writerStream.on('finish',function(){
    console.log("Output Finish");
});