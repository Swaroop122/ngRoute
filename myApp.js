app = angular.module("myApp", ["ngRoute"]); 
app.config(function($routeProvider) { 
	$routeProvider 
	.when("/", { 
		template : `<h1>Welcome to spektra</h1> 
					<p> 
					Click on the links to change this content 
					</p>` 
	}) 
	.when("/courses", { 
		template : `<h1>Courses Offered</h1> 
					<p> 
						<ul> 
						<li>asp.net web api</li> 
						<li>angularjs</li> 
						<li>Sql server</li> 
						</ul> 
					</p>` 
	}) 
	.when("/internships", { 
		template : `<h1>Hire With Us</h1> 
					<p> 
						<ul> 
						<li>Software Developer</li> 
						<li>Technical Content Writer</li> 
						<li>Technical Content Engineer</li> 
						</ul> 
					</p>` 
	}); 
});
app.controller("myCtrl", function($scope) {
  $scope.firstName = "John";
  $scope.lastName= "Doe";
}); 
