var buf1 = new Buffer("kongruksiam");
var buf2 = new Buffer("Tutorial");
var buf3 = Buffer.concat([buf1,buf2]);
console.log(buf3.toString());