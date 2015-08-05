var App = angular.module('admin',['ngRoute'])
.run(["$rootScope", function ($rootScope){
	$rootScope.baseUrl = 'http://localhost:8282'; 
}]);
App.config(function($routeProvider){
	$routeProvider	// AngularJS Routes
	.when('/login', {
		templateUrl: 'app/views/login.html',
		controller: 'login_controller'
	})
	.when('/home', {
		templateUrl: 'app/views/adminhome.html',
		controller: 'home_controller'
	})
	.when('/user', {
		templateUrl: 'app/views/user_list.html',
		controller: 'user_controller'
	})
	.when('/post', {
		templateUrl: 'app/views/post_list.html',
		controller: 'post_controller'
	})    
	.otherwise({		
        redirectTo: '/login'
    })
});