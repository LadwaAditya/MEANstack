var express = require('express');
var app = express();
var mongojs = require('mongojs'); //Require Mongojs
var db = mongojs('contactList',['contactList']); //Connect to database
var bodyParser = require('body-parser'); //Require bodyParser module

//Use static public directory
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());


//Handel GET request for contact list
app.get('/contactList',function(req,res){
	console.log("I recieved a get requent");
	//find all records in contactList
	db.contactList.find(function(err,docs){
		console.log(docs);
		res.json(docs);
	});

});

//Handel the new contacts sent via POST
app.post('/contactList',function(req,res){
	console.log(req.body);
	db.contactList.insert(req.body,function(err,doc){
		res.json(doc);
	});
});

//Handel DELETE request for a contact
app.delete('/contactList/:id',function(req,res){
	var id = req.params.id;
	console.log(id);
	db.contactList.remove({_id: mongojs.ObjectId(id)},function(err,doc){
		res.json(doc);
	});
});

//Handel GET for an individual contact with an Id
app.get('/contactList/:id',function(req,res){
	 var id = req.params.id;
	 db.contactList.findOne({_id :mongojs.ObjectId(id)},function(err,doc){
	 	res.json(doc);
	 });
});

//Handel PUT to modify a perticular contact
app.put('/contactList/:id',function(req,res){
	var id = req.params.id;
	console.log(req.body.name);

	db.contactList.findAndModify({
		query: {
			_id: mongojs.ObjectId(id)
		},
		update:{
			$set: {
				name:  req.body.name,
				email: req.body.email,
				number: req.body.number
			}
		},
		new:true
	},function(err,doc){
		res.json(doc);
	});
});

var server = app.listen(3000,function(){
	console.log("App listening at port 3000");
});