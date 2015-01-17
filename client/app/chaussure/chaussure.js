'use strict';

angular.module('jourdumarcheApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/chaussure', {
        templateUrl: 'app/chaussure/chaussure.html',
        controller: 'ChaussureCtrl'
      });
  });
