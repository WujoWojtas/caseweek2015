(function () {
	var app = angular.module('app', []);

	app.controller('HomeController', function ($scope) {});

	app.directive('testDir', function () {
		return {
			restrict : 'AE',
			replace : 'true',
			template : '<div style="background:green; float:left;" ng-style="{\'font-size\':value * 3 + \'px\'}">{{value}}</div>'
		}
	});

	app.directive('testDirScope', function () {
		return {
			restrict : 'AE',
			replace : 'true',
			scope : {
				v : '='
			},
			template : '<div style="background:yellow; float:left;" ng-style="{\'font-size\':v * 3 + \'px\'}">{{v}}</div>'
		}
	});
})();
