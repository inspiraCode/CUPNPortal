'use strict';

/**
 * @ngdoc function
 * @name cupnPortalApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cupnPortalApp
 */
angular.module('cupnPortalApp')
  .controller('MainCtrl', function ($scope) {
    $scope.tab='OfertaAcademica';
    angular.element('#myCarousel').slick({
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: true,
      touchMove: true
    }).show();
  });
