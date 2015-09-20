var myApp =angular.module('myApp',[]);

myApp.controller('AppCtrl', ['$scope','$http', function($scope,$http){
	console.log("hello from appController");

	$http.get('/contactList').success(function(response){
		console.log("I got the response");
		$scope.contactList =response;
	});
}]);
