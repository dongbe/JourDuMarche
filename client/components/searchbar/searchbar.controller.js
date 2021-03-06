'use strict';

angular.module('jourdumarcheApp')
  .controller('SearchbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];

    $scope.isCollapsed = true;
    $scope.isAdmin = Auth.isAdmin;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
