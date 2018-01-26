var http = require('http');
var fs = require('fs');
var myuser = {
    "name":"kongruksiam",
    "job":"Programmer",
    "age":80
}
http.createServer(function(req,res){

    //  TEXT    //
    //res.writeHead(200,{'Content-Type':'text/text'});

    //  HTML   //
    //res.writeHead(200,{'Content-Type':'text/html'});

    //  JSON    //
    res.writeHead(200,{'Content-Type':'application/json'});

    //  TEXT   //
    //res.end("Helloworld");

    //  HTML //
    //var myStream = fs.createReadStream(__dirname+"/"+'index.html','utf8');
    //myStream.pipe(res);


    // Json //
    res.end(JSON.stringify(myuser));
}).listen(8081,'127.0.0.1');
