(function() {
  'use strict';
  
  angular
      .module('components.gndashtrackable')
      .directive('gnDisplayBox', gnDisplayBox);

  function gnDisplayBox() {
      var directive = {
          restrict: 'EA',
          templateUrl: 'views/gnDisplayBox.html',
          scope: {
              displayboxdata: '='
          },
          link: linkFunc,
          controller: DirectiveController,
          controllerAs: 'vm',
          bindToController: true
      };

      return directive;

      function linkFunc(scope, el, attr, ctrl) {

      }
  }

  DirectiveController.$inject = ['$scope'];

  function DirectiveController($scope) {
      var vm = this;

  }   
}());