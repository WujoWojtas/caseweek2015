(function(){
	var app = angular.module('app', []);  
  
	app.controller('HomeController', function ($scope) {
		$scope.items = [];
		
		$scope.add = function(){
			var newObj = 'sth new : ) ' + $scope.items.length;
			$scope.items.push(newObj);
		};
		
		$scope.clear = function(){			
			$scope.items = [];
		};
	});
})();