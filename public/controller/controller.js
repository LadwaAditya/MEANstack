var myApp =angular.module('myApp',[]);

myApp.controller('AppCtrl', ['$scope', function($scope){
	console.log("hello from appController");
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
	$scope.contactList = contactList;
}]);
