(function() {
  'use strict';
  
  angular
      .module('components.gndashicon')
      .directive('gnDashIcon', gnDashIcon);

  function gnDashIcon() {
      var directive = {
          restrict: 'EA',
          templateUrl: 'views/gnDashIcons.html',
          scope: {
              dashicondata: '='
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