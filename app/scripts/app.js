'use strict';

/**
 * @ngdoc overview
 * @name cupnPortalApp
 * @description
 * # cupnPortalApp
 *
 * Main module of the application.
 */
angular
  .module('cupnPortalApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngResize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/contactUs', {
        templateUrl: 'views/contactus.html',
        controller: 'ContactusCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
