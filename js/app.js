var app = angular.module('myApp', []);	



			//Define Routing for app
			//Uri /portfolio -> template add_order.html and Controller PaintingsCtrl
			//Uri /about -> template about.html and Controller ShowAboutController
			app.config(['$routeProvider',
			  function($routeProvider) {
			    $routeProvider.
			      when('/', {
			        templateUrl: 'portfolio.html',
			        controller: 'PaintingsCtrl'
			    }).
			      when('/about', {
			        templateUrl: 'about.html',
			        controller: 'ShowAboutController'
			      }).
			      otherwise({
			        redirectTo: '/'
			      });
			}]);

    // create the controller and inject Angular's $scope
 
	app.controller('PaintingsCtrl', function($scope,  $http) {
		$http.get("json/painting.json")
		.success(function(response) {$scope.paintings = response.painting;});

		$scope.toggleInfo = function(selectedPainting){
			//console.log('food object: ', selectedFood);
			// alert('hellooo');
			var positionLft = $('.product_info').width();

			// console.log($scope.showInfo, 'test');
			$scope.selectedPainting = selectedPainting;
		};

		$scope.date = new Date();

		});

 		app.controller('ShowAboutController', function($scope, $http) {
		 
			$http.get("json/painting.json")
			.success(function(response) {$scope.paintings = response.painting;});
		    // $scope.message = 'This is Show orders screen';
		 
		});

		app.controller('ShowContactController', function($scope, $http) {
		 
			$http.get("json/painting.json")
			.success(function(response) {$scope.paintings = response.painting;});
		    // $scope.message = 'This is Show orders screen';
		 
		});
