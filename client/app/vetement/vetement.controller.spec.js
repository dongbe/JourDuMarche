'use strict';

describe('Controller: VetementCtrl', function () {

  // load the controller's module
  beforeEach(module('jourdumarcheApp'));

  var VetementCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VetementCtrl = $controller('VetementCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
