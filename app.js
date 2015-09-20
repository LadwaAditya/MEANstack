var express = require('express');
var app = express();
var mongojs = require('mongojs'); //Require Mongojs
var db = mongojs('contactList',['contactList']); //Connect to database
var bodyParser = require('body-parser'); //Require bodyParser module

//Use static public directory
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());


//Handel get request for contact list
app.get('/contactList',function(req,res){
	console.log("I recieved a get requent");
	//find all records in contactList
	db.contactList.find(function(err,docs){
		console.log("docs");
		res.json(docs);
	});

});

app.post('/contactList',function(req,res){
	console.log(req.body);
	db.contactList.insert(req.body,function(err,doc){
		res.json(doc);
	});
});
var server = app.listen(3000,function(){
	console.log("App listening at port 3000");
});