'use strict';

/**
 * @ngdoc function
 * @name cupnPortalApp.controller:MainCtrl
 * @description # MainCtrl Controller of the cupnPortalApp
 */
angular.module('cupnPortalApp').controller('MainCtrl',
		function($scope, resize, $timeout, $location) {
			$scope.go = function(path) {
				if (path == '') {
					if (angular.element(".navbar-toggle").is(':visible')) {
						angular.element(".navbar-toggle").click();
					}

				}
				if (path != $location.url()) {
					$location.url(path);
					if (angular.element(".navbar-toggle").is(':visible')) {
						angular.element(".navbar-toggle").click();
					}
				}
			};

			$scope.tab = 'OfertaAcademica';
			$timeout(function() {
				resizeImages();
				angular.element('#myCarousel').slick({
					autoplay : true,
					autoplaySpeed : 4000,
					arrows : true,
					touchMove : true
				}).show();
			}, 200);
			$scope.$on('resize', function() {
				resizeImages();
			})
		});
function resizeImages() {
	angular.element('#myCarousel').css('width',
			angular.element('body').css('width'));
	angular.element('#img1').css('width', angular.element('body').css('width'));
	angular.element('#img2').css('width', angular.element('body').css('width'));
}
