'use strict';

angular
  .module('ichingApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/calendar.html',
        controller: 'calendar'
      })
      .when('/bagong', {
        templateUrl: 'views/bagong.html',
        controller: 'bagong'
      })
      .when('/bazi', {
        templateUrl: 'views/bazi.html',
        controller: 'bazi'
      })
      .when('/zhanbu', {
        templateUrl: 'views/zhanbu.html',
        controller: 'zhanbu'
      })
      .when('/fengshui', {
        templateUrl: 'views/fengshui.html',
        controller: 'fengshui'
      })
      .when('/calendar', {
        templateUrl: 'views/calendar.html',
        controller: 'calendar'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
