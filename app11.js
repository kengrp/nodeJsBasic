var express = require('express');
var routing = express();
routing.get('/',function(req,res){
    res.send('<h1>Hello User</h1>');
});
routing.get('/profile',function(req,res){
    res.send('<h1>Node Js Tutorial By </h1>');
});
routing.get('/profile/:name',function(req,res){
    res.send('<h1>Node Js Tutorial By ' + req.params.name + '</h1>');
});
routing.get('/user/profile/:id',function(req,res){
    res.send('<h1>Node Js Tutorial By ' + req.params.id + '</h1>');
});
routing.listen(8081);