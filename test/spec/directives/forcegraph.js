'use strict';

describe('Directive: forceGraph', function () {

  // load the directive's module
  beforeEach(module('pisaVisualisationApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<force-graph></force-graph>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the forceGraph directive');
  }));
});
