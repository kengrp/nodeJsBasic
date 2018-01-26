var express = require('express');
var body = require('body-parser');
var app = express();
app.use(body());
app.set('view engine','ejs');
app.get('/showForm1',function(req,res){
    res.sendFile(__dirname + "/" + "showForm1.html");
});
app.post('/showData',function(req,res){
    data = {
        fname : req.body.fname ,
        lname : req.body.lname
    };
    console.log(data);
    // แสดงแบบ json
    //res.end(JSON.stringify(data));

    // แสดงแบบ html
    res.end("<h1>" +  data.fname  + " " + data.lname +  "</h1>");
});

app.listen(8083);
