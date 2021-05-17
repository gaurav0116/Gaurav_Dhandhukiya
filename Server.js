const express = require("express");
const bodyParser = require("body-Parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
    res.sendFile(__dirname+"/index.html");
    console.log(__dirname);
});

app.post("/sum", function(req,res){
    var n1= Number(req.body.num1);
    var n2 = Number(req.body.num2);
    var result = n1 + n2;
    res.send("The answer is : "+ result);
});

app.post("/multiply", function(req,res){
    var n1= Number(req.body.num1);
    var n2 = Number(req.body.num2);
    var result = n1 * n2;
    res.send("The answer is : "+ result);
});

app.post("/division", function(req,res){
    var n1= Number(req.body.num1);
    var n2 = Number(req.body.num2);
    var result = n1 / n2;
    res.send("The answer is : "+ result);
});

app.post("/substraction", function(req,res){
    var n1= Number(req.body.num1);
    var n2 = Number(req.body.num2);
    var result = n1 - n2;
    res.send("The answer is : "+ result);
});


app.listen(2080,function(){
    console.log("server has start on port 2080");
});