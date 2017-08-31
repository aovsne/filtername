var app = angular.module('myApp', ["ngRoute"])

app.config(function($routeProvider){
	$routeProvider
	.when('/home', {
		templateUrl: 'home.html',
		controller: 'studentController'
	})
	.when('/viewStudents', {
		templateUrl: 'viewStudents.html',
		controller: 'studentController'
	})
	.otherwise({
		redirectTo: '/home'
	})
})

app.controller('studentController', function($scope){
	$scope.students = [
		{
			name:'Tenzin',
			city: 'Tibet'
		},
		{
			name: 'Lhabu',
			city: 'Nepal'
		},
		{
			name: 'Yoshie',
			city: 'Japan'
		}
	]

	$scope.messege = "click on the link to view the student list"
})

