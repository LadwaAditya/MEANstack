var myApp =angular.module('myApp',[]);

myApp.controller('AppCtrl', ['$scope','$http', function($scope,$http){
	console.log("hello from appController");

	var refresh = function(){

		$http.get('/contactList/')
			 .success(function(response){
			 console.log("I got the response");
			 $scope.contactList =response;
			 $scope.contact ="";
		});
	};

	refresh();//Call the function defined above

	$scope.addContact =function(){
		console.log($scope.contact);
		$http.post('/contactList', $scope.contact)
			 .success(function(response){
			 console.log(response);
			 refresh();
		});
	};

	$scope.remove = function(id){
		console.log(id);
		$http.delete('/contactList/'+id)
			 .success(function(response){
			 refresh();
		});
	};

	$scope.edit = function(id){
		console.log(id);
		$http.get('/contactList/' + id).success(function(response){
			$scope.contact =response;
		});
	};

	$scope.update = function(){
		console.log($scope.contact._id);
		$http.put('/contactList/' + $scope.contact._id, $scope.contact)
			 .success(function(response){
			 refresh();
			 });
	};

}]);
