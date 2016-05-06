(function() {
  'use strict';
  
  angular
      .module('components.gnnavicon')
      .directive('gnNavIcon', gnNavIcon);

  function gnNavIcon() {
      var directive = {
          restrict: 'EA',
          templateUrl: 'views/gnNavIcons.html',
          scope: {
              icondata: '='
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