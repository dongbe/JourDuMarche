'use strict';

angular.module('jourdumarcheApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/categorie', {
        templateUrl: 'app/categorie/categorie.html',
        controller: 'CategorieCtrl'
      });
  });
