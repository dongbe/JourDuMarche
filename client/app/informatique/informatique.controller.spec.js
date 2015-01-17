'use strict';

describe('Controller: InformatiqueCtrl', function () {

  // load the controller's module
  beforeEach(module('jourdumarcheApp'));

  var InformatiqueCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InformatiqueCtrl = $controller('InformatiqueCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
