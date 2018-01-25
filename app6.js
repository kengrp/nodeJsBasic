var fs = require('fs');
var data = '';
var readStream = fs.createReadStream('code.txt');
readStream.setEncoding('utf8');
readStream.on('data',function(txt){
    data += txt;

});
readStream.on('end',function(){
    console.log(data);
});
readStream.on('err',function(){
    console.log(err.stack);
});