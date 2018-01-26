var express = require('express');
var cookie = require('cookie-parser');
var app = express();
app.use(cookie());
app.set('view engine','ejs');
app.get('/createCookie',function(req,res){
    res.cookie('myCookie','Pornchai');
    res.end("Create Cookie");
});
app.get('/delCookie',function(req,res){
    res.clearCookie('myCookie');
    res.end("Delete Cookie Complate");
});



app.listen(8083);
