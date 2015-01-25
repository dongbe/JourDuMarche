'use strict';

angular.module('jourdumarcheApp')
  .controller('InformatiqueCtrl', function ($scope) {
    $scope.menu = [
      {
        'title': 'Informatique',
        'link': '/informatique'
      },
      {
        'title': 'Informatique',
        'link': '/informatique'
      }
    ];
    $scope.message = 'Hello';
  });
