(function () {
	var app = angular.module('app', []);

	app.controller('WeatherController', function ($scope, $http, WeatherService) {
		$scope.cities = WeatherService.cities;
		$scope.city = $scope.cities[0];
		$scope.weather = WeatherService.weather;

		$scope.$watch('city', function () {
			WeatherService.getWeatherFor($scope.city);
		});
	});

	app.service('WeatherService', function ($http) {
		this.cities = ['London', 'Warsaw', 'Berlin', 'Mardid', 'Rome'];
		this.weather = {};

		this.getWeatherFor = function (city) {
			var weatherTmp = this.weather;
			return $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city).success(function (data) {
				console.log(data);
				weatherTmp.description = data.weather[0].description;
				weatherTmp.temp = (data.main.temp - 273.15).toFixed(2);
			});
		};
	});
})();
