(function () {
	var app = angular.module('app', ['ngRoute']);

	app.controller('HomeController', function ($scope, $http, $route, $routeParams, ItemsService) {
		$scope.items = ItemsService.getItemsService();
	});

	app.controller('ItemController', function ($scope, $routeParams, ItemsService) {
		var itemName = $routeParams.itemName;
		$scope.item = ItemsService.getItem(itemName)
	});

	app.service('ItemsService', function () {
		var items = [{
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

		this.getItemsService = function () {
			return items;
		};

		this.getItem = function (itemName) {
			console.log(itemName);
			for (var i in items) {
				var item = items[i];
				if (item.name === itemName) {
					return item;
				}
			}
			return {};
		}
	});

	app.config(function ($routeProvider, $locationProvider) {
		$routeProvider
		.when('/Item/:itemName', {
			templateUrl : 'item.html',
			controller : 'ItemController'
		});
	});
})();