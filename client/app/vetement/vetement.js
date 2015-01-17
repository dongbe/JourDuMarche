'use strict';

angular.module('jourdumarcheApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/vetement', {
        templateUrl: 'app/vetement/vetement.html',
        controller: 'VetementCtrl'
      });
  });
