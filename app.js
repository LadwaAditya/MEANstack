var express = require('express');
var app = express();

//Use static public directory
app.use(express.static(__dirname + "/public"));
//Handel get request for contact list
app.get('/contactList',function(req,res){
	console.log("I recieved a get requent");

	person1  ={
			name: "Aditya",
			email: "ladwa.aditya@gmail.com",
			number: "7411438334"
		};
		person2  ={
			name: "Vishal",
			email: "ladwa.vishal@gmail.com",
			number: "7411438334"
		};

	var contactList = [person1,person2];
	res.json(contactList);
});
var server = app.listen(3000,function(){
	console.log("App listening at port 3000");
});