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
			        controller: 'AboutController'
			      }).
			      when('/contact', {
			        templateUrl: 'contact.html',
			        controller: 'ContactController'
			      }).
			      otherwise({
			        redirectTo: '/'
			      });
			}]);

	function MainNavController($scope, $location) 
		{ 
		$scope.isActive = function (viewLocation) { 
		    return viewLocation === $location.path();
		};
	}

    // create the controller and inject Angular's $scope
 
	app.controller('PaintingsCtrl', function($scope,  $http) {
		$scope.filters = { };
		$http.get("json/painting.json")
		.success(function(response) {$scope.paintings = response.painting;});

		

		$scope.toggleInfo = function(selectedPainting){
			//console.log('food object: ', selectedFood);
			// alert('hellooo');
			var positionLft = $('.product_info').width();
			// console.log($scope.showInfo, 'test');
			$scope.selectedPainting = selectedPainting;
		};
	});

	app.controller('AboutController', function($scope) { });

	app.controller('ContactController', function($scope) {
	    // $scope.message = 'This is Show orders screen';
	});

	app.controller('footerController', function($scope) {
	 	$scope.date = new Date();
	});

		


