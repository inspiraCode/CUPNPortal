'use strict';

/**
 * @ngdoc function
 * @name cupnPortalApp.controller:NavigationCtrl
 * @description
 * # NavigationCtrl
 * Controller of the cupnPortalApp
 */
angular.module('cupnPortalApp')
  .controller('NavigationCtrl', function ($scope, $location) {
    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };
  });
