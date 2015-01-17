'use strict';

angular.module('jourdumarcheApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/informatique', {
        templateUrl: 'app/informatique/informatique.html',
        controller: 'InformatiqueCtrl'
      });
  });
