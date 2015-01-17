'use strict';

angular.module('jourdumarcheApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/telephone', {
        templateUrl: 'app/telephone/telephone.html',
        controller: 'TelephoneCtrl'
      });
  });
