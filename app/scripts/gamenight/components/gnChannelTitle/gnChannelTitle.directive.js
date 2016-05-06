(function() {
  'use strict';
  
  angular
      .module('components.gnchanneltitle')
      .directive('gnChannelTitle', gnChannelTitle);

  function gnChannelTitle() {
      var directive = {
          restrict: 'EA',
          templateUrl: 'views/gnChannelTitle.html',
          scope: {
              channeltitledata: '='
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