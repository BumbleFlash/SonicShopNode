var express = require('express');
var url = require('url');
var mysql= require('mysql');
var app = express();
var http= require("http").Server(app);
var login=require('./login');
var signup= require('./signup');
var product=require('./product');
var q;
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "products",
  password: "pammas"
});
app.get("/",function(req,res)

	{
		res.send("You're Connected");
	});
app.get("/login",function(req,res)
	{
        q= url.parse(req.url,true).query;
        login.login(q,con,res);

	});
app.get("/signup",function(req,res)
	{
        q= url.parse(req.url,true).query;
        signup.signup(q,con,res);
	});
app.get("/displayProducts",function(req,res){
	    q=url.parse(req.url,true).query;
	    product.product(q,con,res);
});
app.listen(8080,function()
{
    console.log("Server listening");
});