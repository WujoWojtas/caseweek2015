(function () {
	var itemsTmp = [{
			name : 'test1',
			value : 'test1_v'
		}, {
			name : 'test2',
			value : 'test2_v'
		}, {
			name : 'test3',
			value : 'test3_v'
		}
	];

	var app = angular.module('app', ['ngRoute']);

	app.controller('HomeController', function ($scope, $http, $route, $routeParams) {
		$scope.items = itemsTmp;
	});

	app.controller('ItemController', function ($scope, $routeParams) {
		$scope.item = {};

		for (var i in itemsTmp) {
			var item = itemsTmp[i];
			if (item.name === $routeParams.itemName) {
				$scope.item = item;
				break;
			}
		}
	})

	app.config(function ($routeProvider, $locationProvider) {
		$routeProvider
		.when('/Item/:itemName', {
			templateUrl : 'item.html',
			controller : 'ItemController'
		});
	});

})();
