(function() {
  'use strict';
  
  angular
      .module('components.gnlogin')
      .directive('gnLogin', gnLogin);

  function gnLogin() {
      var directive = {
          restrict: 'EA',
          templateUrl: 'views/gnLogin.html',
          scope: {
              logindata: '='
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
    var currentState = 'login';
    
    vm.show = function(state) {
      if (currentState === state) { return true }
      
      return false;
    }
    
    vm.changeState = function(state) {
      currentState = state; 
    }
    
  }   
}());