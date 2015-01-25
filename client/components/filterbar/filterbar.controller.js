'use strict';

angular.module('jourdumarcheApp')
  .controller('FilterbarCtrl', function ($scope, $location) {

    $scope.isActive = function(route) {
      console.log($location.path());
      return route === $location.path();
    };
  });
