var app = angular.module('angularSideNavModule',[]);
	app.controller('myCtrl',function($scope){
		$scope.data = "tirthraj barot";
	})
	app.directive('angularSideNavRaoit', function() {
		return {
			restrict : 'E',
			templateUrl : "side-nav-template.html",
			scope : {},
			controller : function($scope){
				$(document).ready(function(){
					$("#angular-side-nav-open").click(function(){
						$(".custom-sidenav-raoit").fadeIn();
						$(".custom-sidenav-raoit ul").animate({'width':'300px'},"slow");
					});
					$(".custom-sidenav-raoit").click(function(){
						$(".custom-sidenav-raoit ul").animate({'width':'0px'},"fast","",function(){$(".custom-sidenav-raoit").fadeOut("fast")});
					})
				});
			}
		}
	});