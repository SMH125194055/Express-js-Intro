//jshint esversion:6

const express = require("express");

const app = express();

app.get("/",function(req,res){
    // console.log(req);
    res.send("<h1>Hello World</h1>");
});

app.get("/contact",function(req,res){
    // console.log(req);
    res.send("<h1>Contact me at: www.smh125@gmail.com</h1>");
});

app.get("/about",function(req,res){
    // console.log(req);
    res.send("<h1>My Name is Huzaifa love code.</h1>");
});

app.get("/what",function(req,res){
    // console.log(req);
    res.send("<h1>My Name is Huzaifa love code.</h1>");
});




app.listen(3000,function(){
  console.log("Server started on port 3000");
});