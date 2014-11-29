'use strict';

/**
 * @ngdoc function
 * @name cupnPortalApp.controller:ContactusCtrl
 * @description
 * # ContactusCtrl
 * Controller of the cupnPortalApp
 */
angular.module('cupnPortalApp')
  .controller('ContactusCtrl', function ($scope) {
    $scope.map = {center: {latitude: 31.6598563, longitude: -106.3885786}, zoom: 15};
    $scope.marker = {
      id: 0,
      coords: {
        latitude: 31.6598563,
        longitude: -106.3885786
      }};
  });
