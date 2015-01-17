'use strict';

describe('Controller: TelephoneCtrl', function () {

  // load the controller's module
  beforeEach(module('jourdumarcheApp'));

  var TelephoneCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TelephoneCtrl = $controller('TelephoneCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
