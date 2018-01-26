var express = require('express');
var app = express();
app.set('view engine','ejs');
app.get('/:name' , function(req,res){
    var data = {user:"Pornchai Jareanfuprasurt",age:15,job:"Programmer"};
    res.render('profile1',{ person:req.params.name,data:data});
});
app.get('/' , function(req,res){
    var data = {name:"Pornchai Jareanfuprasurt",age:15,job:"Programmer"};
    res.render('profile1',{data:data});
});
app.get('/contact' , function(req,res){
    res.render('contact');
});
app.get('/database' , function(req,res){
    res.render('database');
});
app.listen(8081);
