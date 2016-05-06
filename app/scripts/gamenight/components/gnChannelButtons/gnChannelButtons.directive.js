(function() {
  'use strict';
  
  angular
      .module('components.gnchannelbuttons')
      .directive('gnChannelButtons', gnChannelButtons);

  function gnChannelButtons() {
      var directive = {
          restrict: 'EA',
          templateUrl: 'views/gnChannelButtons.html',
          scope: {
              channelbuttondata: '='
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