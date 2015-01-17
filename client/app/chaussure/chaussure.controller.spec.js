'use strict';

describe('Controller: ChaussureCtrl', function () {

  // load the controller's module
  beforeEach(module('jourdumarcheApp'));

  var ChaussureCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChaussureCtrl = $controller('ChaussureCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
