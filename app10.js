var express = require('express');
var routing = express();
routing.get('/',function(req,res){
    res.send('<h1>Hello world</h1>');
});
routing.listen(8081);