(function() {
  'use strict';
  
  angular
      .module('components.gndashtrackable')
      .directive('gnDashTrackable', gnDashTrackable);

  function gnDashTrackable() {
      var directive = {
          restrict: 'EA',
          templateUrl: 'views/gnDashTrackable.html',
          scope: {
              trackabledata: '='
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